(function() {
    var isHLSSupported = function() {
        var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
        var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
        var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === "function" && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
        var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === "function" && typeof sourceBuffer.prototype.remove === "function";
        return isTypeSupported && sourceBufferValidAPI;
    };
    window.TWToolbarClass = function(options, playerObj, fsCallBack, tConfig) {
        this.container = options.container || document.body;
        this.browser = JTUtil["getBrowser"]();
        this.player = playerObj;
        this.fullStatus = false;
        this.fullScreenCallBack = typeof fsCallBack == "function" ? fsCallBack : function() {
            alert("浏览器不支持全屏！");
        };
        this.videoList = tConfig && tConfig.videoList ? tConfig.videoList : [];
        this.videoQuality = tConfig && tConfig.videoQuality || 0;
        this.isSupportHLS = isHLSSupported();
        this.createDOM();
        this.isFirstTouch = true;//是否第一次Touch
        this.togglePlay = function() {
            //判断是否第一次Touch，从而在iOS13以上进行一次弹框让用户选择是否允许使用陀螺仪
            if (this.isFirstTouch) {
                this.isFirstTouch = false;
                //针对iOS13的safari判断，注意在iOS13的微信里，不存在eviceOrientationEvent.requestPermission
                if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
                    DeviceOrientationEvent.requestPermission().then(function(permissionState) {
                        if (permissionState === "granted") {
                            //同意就启用陀螺仪，这里没有通过重新刷新页面的方式
                            uvSetEnableGyro();
                        } else {
                            if (window.top != window) {
                                //iframe方式，给根window抛一个事件，让其启用陀螺仪
                                uvSetEnableIframeGyro(true);
                                window.top.postMessage({
                                    type: "gyroCreate"
                                }, "*");
                            } else {
                                //非iframe方式，直接就禁用陀螺仪了
                                uvDisableGyro && uvDisableGyro();
                            }
                        }
                    }).catch(console.error);
                }
            }
            if (!this.player.api_getVideoPlayStatus()) {
                this.player.api_setVideoPlay();
                this.deleteBeginLayer();
            } else {
                this.player.api_setVideoPause();
            }
            this.setPlayStatus();
        };
        var self = this;
        EventUtil["addEvent"](this.videoTogglePlay, "click", function() {
            self.togglePlay();
        });
        EventUtil["addEvent"](this.videoFullScreen, "click", function() {
            if (!JTUtil["isSupportFullScreen"]()) {
                typeof self.fullScreenCallBack == "function" && self.fullScreenCallBack(self.fullStatus, self.player);
            } else {
                JTUtil["isFullScreen"]() ? self.player.api_exitFullScreen() : self.player.api_enterFullScreen();
            }
        });
        EventUtil["addEvent"](this.videoViewPortToggle, "click", function() {
            var isVRModel = self.player.api_getViewPortStatus();
            !isVRModel ? self.player.api_enterVRModel() : self.player.api_exitVRModel();
            self.setViewPortStatus();
        });
        this.isDown = false;
        this.BoundingEventDom = null;
        EventUtil["addEvent"](this.videoScroll, "mousedown", function(e) {
            EventUtil["stopDefault"](e);
            EventUtil["stopPropagation"](e);
            e = e.changedTouches && e.changedTouches[0] || e;
            self.isDown = true;
            self.BoundingEventDom = self.videoScroll.getBoundingClientRect();
            var p = (e.pageX - self.BoundingEventDom.left) / self.BoundingEventDom.width;
            self.updateCurTime(p);
        });
        EventUtil["addEvent"](this.videoScroll, "mousemove", function(e) {
            if (self.isDown) {
                e = e.changedTouches && e.changedTouches[0] || e;
                var p = (e.pageX - self.BoundingEventDom.left) / self.BoundingEventDom.width;
                self.updateCurTime(p);
            }
        });
        EventUtil["addEvent"](this.videoScroll, "mouseup", function(e) {
            EventUtil["stopDefault"](e);
            EventUtil["stopPropagation"](e);
            self.isDown = false;
        });
        EventUtil["addEvent"](this.videoScroll, "mouseout", function(e) {
            self.isDown = false;
        });
        this.createBeginLayer();
    };
    var funs = {
        createDOM: function() {
            this.target = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.target, {
                id: "videoToolbar"
            });
            DomUtil["inject"](this.target, this.container);
            this.videoBG = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoBG, {
                id: "videoBG"
            });
            DomUtil["inject"](this.videoBG, this.target);
            this.videoTogglePlay = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoTogglePlay, {
                id: "videoTogglePlay",
                "class": "floatL floatW videoStop"
            });
            DomUtil["inject"](this.videoTogglePlay, this.videoBG);
            this.videoScroll = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoScroll, {
                id: "videoScroll",
                "class": "videoScroll"
            });
            DomUtil["inject"](this.videoScroll, this.videoBG);
            this.videoScrollBG = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoScrollBG, {
                id: "videoScrollBG"
            });
            DomUtil["inject"](this.videoScrollBG, this.videoScroll);
            this.videoScrollBG1 = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoScrollBG1, {
                id: "videoScrollBG1"
            });
            DomUtil["inject"](this.videoScrollBG1, this.videoScroll);
            this.videoScrollBG2 = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoScrollBG2, {
                id: "videoScrollBG2"
            });
            DomUtil["inject"](this.videoScrollBG2, this.videoScroll);
            this.videoTime = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoTime, {
                id: "videoTime"
            });
            DomUtil["inject"](this.videoTime, this.videoBG);
            this.videoTime.innerHTML = "00:00/00:00";
            this.videoFullScreen = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoFullScreen, {
                id: "videoFullScreen",
                "class": "floatR floatW videoFullScreen1"
            });
            DomUtil["inject"](this.videoFullScreen, this.videoBG);
            this.videoViewPortToggle = JTUtil["cDom"]("div");
            DomUtil["setProperties"](this.videoViewPortToggle, {
                id: "videoViewPortToggle",
                "class": "floatR floatW videoViewPort1"
            });
            DomUtil["inject"](this.videoViewPortToggle, this.videoBG);
            this.addQualityDom();
        },
        addQualityDom: function() {
            if (this.videoList.length > 0) {
                this.curVideoDom = JTUtil["cDom"]("div");
                DomUtil["setProperties"](this.curVideoDom, {
                    id: "curVideo",
                    "class": "floatR floatW"
                });
                DomUtil["inject"](this.curVideoDom, this.videoBG);
                this.curVideoDomText = JTUtil["cDom"]("div");
                this.curVideoDomText.className = "curVideoText";
                this.curVideoDomText.innerHTML = this.getVideoObjByQuality(this.videoList, this.videoQuality).Text;
                DomUtil["inject"](this.curVideoDomText, this.curVideoDom);
                this.videoDomList = JTUtil["cDom"]("div");
                this.videoDomList.className = "videoDomList";
                DomUtil.setStyles(this.videoDomList, {
                    top: -(10 * 2 + 30 * this.videoList.length) + "px"
                });
                DomUtil["inject"](this.videoDomList, this.curVideoDom);
                var innerDom = "";
                for (var i = 0; i < this.videoList.length; i++) {
                    var cobj = this.videoList[i];
                    var quality = cobj.Quality;
                    var defClass = "videoListDom";
                    if (this.videoQuality == quality) defClass += " videoListDomCheck";
                    innerDom += "<div id='" + quality + "' class='" + defClass + "'>" + cobj.Text + "</div>";
                }
                this.videoDomList.innerHTML = innerDom;
            }
            var self = this;
            if (this.curVideoDom) {
                EventUtil["addEvent"](this.curVideoDom, "click", function(e) {
                    EventUtil.stopPropagation(e);
                    self.toggleVideoList();
                });
                EventUtil["addEvent"](document, "click", function() {
                    self.hiddenVideoList();
                });
                EventUtil.addEvent(this.videoDomList, "click", function(e) {
                    EventUtil.stopPropagation(e);
                    var targetDom = EventUtil.getTarget(e);
                    var targetId = targetDom.id;
                    var checkObj = self.getVideoObjByQuality(self.videoList, targetId);
                    if (targetId == self.videoQuality) return;
                    if (!checkObj) return;
                    var path = "";
                    if (self.isSupportHLS) {
                        path = checkObj["M3U8"] || checkObj["MP4"];
                    } else {
                        path = checkObj["MP4"] || checkObj["M3U8"];
                    }
                    if (!path) return;
                    self.videoQuality = targetId;
                    var domList = document.querySelectorAll(".videoListDomCheck");
                    for (var i = 0; i < domList.length; i++) {
                        var dom = domList[i];
                        dom.className = "videoListDom";
                    }
                    DomUtil.addClass(targetDom, "videoListDomCheck");
                    self.curVideoDomText.innerHTML = checkObj.Text;
                    self.hiddenVideoList();
                    self.player.api_changeVideoPath(path);
                });
            }
        },
        getVideoObjByQuality: function(Addresses, Quality) {
            var path = null;
            var sceneArray = Addresses;
            var sceneArrayLen = Addresses.length;
            for (var i = 0; i < sceneArrayLen; i++) {
                var indexObj = sceneArray[i];
                if (indexObj.Quality == Quality) {
                    path = indexObj;
                    break;
                }
            }
            return path;
        },
        hiddenVideoList: function() {
            if (!this.videoDomList) return;
            this.videoDomList.style.display = "none";
            this.curVideoDomText.className = "curVideoText";
        },
        showVideoList: function() {
            this.videoDomList.style.display = "block";
            this.curVideoDomText.className = "curVideoText_sel";
        },
        toggleVideoList: function() {
            if (!this.videoDomList) return;
            var isblock = this.videoDomList.style.display;
            if (isblock == "block") {
                this.hiddenVideoList();
            } else {
                this.showVideoList();
            }
        },
        setPlayStatus: function() {
            var isPlay = this.player.api_getVideoPlayStatus();
            var defClass = !isPlay ? "videoStop" : "videoPlay";
            DomUtil["removeClass"](this.videoTogglePlay, "videoStop");
            DomUtil["removeClass"](this.videoTogglePlay, "videoPlay");
            DomUtil["addClass"](this.videoTogglePlay, defClass);
            this.deleteBeginLayer();
        },
        setViewPortStatus: function() {
            var viewPortNum = this.player.api_getViewPortStatus();
            var defClass = viewPortNum ? "videoViewPort2" : "videoViewPort1";
            DomUtil["removeClass"](this.videoViewPortToggle, "videoViewPort1");
            DomUtil["removeClass"](this.videoViewPortToggle, "videoViewPort2");
            DomUtil["addClass"](this.videoViewPortToggle, defClass);
        },
        setFullScreenStatus: function(isFull) {
            var isFS = isFull ? isFull : JTUtil["isFullScreen"]();
            var defClass = isFS ? "videoFullScreen2" : "videoFullScreen1";
            DomUtil["removeClass"](this.videoFullScreen, "videoFullScreen2");
            DomUtil["removeClass"](this.videoFullScreen, "videoFullScreen1");
            DomUtil["addClass"](this.videoFullScreen, defClass);
        },
        setScrollSize: function() {
            var countWidth = this.container.getBoundingClientRect().width;
            var defSize = countWidth - 50 * 4 - 110;
            DomUtil["removeClass"](this.videoScroll, "videoScroll");
            DomUtil["removeClass"](this.videoScroll, "videoScrollTop");
            this.videoTime.style.marginLeft = "0px";
            this.videoScroll.style.width = "100%";
            DomUtil["addClass"](this.videoScroll, "videoScrollTop");
        },
        setDefault: function() {
            this.setPlayStatus();
            this.setViewPortStatus();
            this.setFullScreenStatus();
            this.setScrollSize();
        },
        getUpdateBuffered: function() {
            var videoDom = this.player.api_getVideoDom();
            if (!videoDom) return;
            var buf = videoDom.buffered;
            var leg = buf.length - 1;
            if (leg < 0) return;
            var duration = videoDom.duration.toFixed(1);
            var x1, x2;
            x1 = buf.start(leg).toFixed(1);
            x2 = buf.end(leg).toFixed(1);
            var p = x2 / duration * 100;
            this.videoScrollBG1.style.width = p + "%";
        },
        updateProperties: function() {
            var videoDom = this.player.api_getVideoDom();
            if (!videoDom) return;
            var duration = videoDom.duration || 0;
            var cur = videoDom.currentTime || 0;
            var curTime = JTUtil["formatToMin"](cur);
            if (isFinite(duration)) {
                var countTime = JTUtil["formatToMin"](duration);
                this.videoTime.innerHTML = curTime + "/" + countTime;
                var progress = cur / duration * 100;
                this.videoScrollBG2.style.width = progress + "%";
            } else {
                this.videoTime.innerHTML = curTime;
            }
        },
        updateCurTime: function(p) {
            var videoDom = this.player.api_getVideoDom();
            if (!videoDom) return;
            var duration = videoDom.duration;
            var curTime = duration * p;
            this.player.api_setVideoCurTime(curTime);
        },
        resize: function(p) {
            this.setScrollSize();
        },
        createBeginLayer: function() {
            if (this.player.api_getVideoAutoPlayStatus()) return;
            this.beginLayer = document.createElement("div");
            this.beginLayer.id = "beginLayer";
            var beginLayerImg = document.createElement("div");
            beginLayerImg.id = "beginLayerImg";
            this.beginLayer.appendChild(beginLayerImg);
            this.container.appendChild(this.beginLayer);
            var self = this;
            EventUtil["addEvent"](beginLayerImg, "click", function(e) {
                EventUtil.stopPropagation(e);
                self.togglePlay();
            });
        },
        deleteBeginLayer: function() {
            this.player.api_getVideoPlayStatus() && this.beginLayer && DomUtil.destroy(this.beginLayer);
        },
        resetQuality: function(address) {
            this.curVideoDom && DomUtil.destroy(this.curVideoDom);
            this.videoList = address ? address : [];
            this.addQualityDom();
        }
    };
    for (var key in funs) {
        window.TWToolbarClass.prototype[key] = funs[key];
    }
})();