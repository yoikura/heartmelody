<template>
	<view class="scence">
		<view class="sce_top">
			<view class="video_box" style="position: relative;" @click="insertTreatRecord">
				<uni-link :href="senceInfo.address">
					<view>
						<image src="../../static/play.png" class="videoplay" mode=""></image>
						<image class="topimg" :src="senceInfo.cover" mode=""></image>
					</view>
				</uni-link>
			</view>
			<view class="choose">
				<view class="heart" @click.stop="favorite">
					<image src="../../static/heart.png" mode="" v-if="senceInfo.isFavorite"></image>
					<image src="../../static/whiteheart.png" mode="" v-else></image>
				</view>
				<view class="addplaylist" @click="addPlayList">
					加入播放列表
				</view>
			</view>
			<!-- 			<view style="position:relative;width: 630rpx;height: 474rpx; margin:10px auto;" id="pano"></view> -->
		</view>
		<view class="audiobox">
			<wxy-audio class="audio" :src="hintAudio.src" :play.sync="play"></wxy-audio>
			<view class="tip2">
				<text>提示：建议您在开始治疗之前跟随引导语调整状态</text>
			</view>
			<!-- <audio style="text-align: left;height: 80rpx;" :src="hintAudio.src" :poster="hintAudio.poster" :name="hintAudio.name" controls></audio> -->
		</view>
		<view class="sce_center">
			<view class="title">
				{{senceInfo.sname}}
			</view>
			<view class="music_name">
				音乐:&nbsp; {{senceInfo.music_name}}
			</view>
			<view class="cate">
				分类:&nbsp; {{senceInfo.cate}}
			</view>
			<view class="cate">
				时长:&nbsp; {{Math.floor(senceInfo.duration/60)}}min&nbsp; {{senceInfo.duration%60}}s
			</view>
			<view class="device_name">
				播放设备:&nbsp; {{senceInfo.equipment}}
			</view>
		</view>
		<view class="sce_bottom">
			<view class="describe">
				<text>描述</text>
			</view>
			<view class="introduce">
				{{senceInfo.description}}
			</view>
		</view>
		<!-- 普通弹窗 -->
		<uni-popup ref="popup" mask-background-color="rgba(0,0,0,0)">
			<view class="popup-content">
				<view class="pop_top">
					<view class="search">搜索设备</view>
					<view class="wifi_name">
						当前Wi-Fi:wifi_net
					</view>
				</view>
				<view class="des_list">
					<view class="des_item" v-for="(item,i) in desList" :key="i">
						<image src="../../static/VR (3D).png" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>


<script>
	import {
		changeFavorite,getSenceDetail,addPlayList,insertTreatRecord
	} from "../../common/api.js"
	import {
		mapState
	} from 'vuex'
	import {
		computed
	} from "vue"
	export default {
		data() {
			return {
				play:true,
				hintAudio:{
					poster: 'https://web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
					name: '引导词',
					author: '暂无',
					src: 'https://heartmelody.oss-cn-beijing.aliyuncs.com/music/%E5%BC%95%E5%AF%BC%E8%AF%AD%E5%BD%95%E9%9F%B3.mp3',
				},
				senceInfo: {},
				list: [
				],
				desList: [
				],
				uid: null
			}
		},
		methods: {
			async addPlayList() {
				// this.$refs.popup.open('bottom')
				let param = {
					uid:this.Info.uid,
					sid:this.senceInfo.sid
				}
				let res = await addPlayList(param)
				if(res.data.return_code === 'success'){
					uni.showToast({
						title: '加入播放列表成功',
						icon: 'none'
					})
				}else{
					uni.showToast({
						title: '已在播放列表中',
						icon: 'none'
					})
				}
			},
			//收藏或取消
			async favorite() {
				console.log(this.senceInfo.isFavorite)
				this.senceInfo.isFavorite = !this.senceInfo.isFavorite
				let params = {
					uid: this.Info.uid,
					sid: this.senceInfo.sid,
					favorite: this.senceInfo.isFavorite
				}
				console.log(params)
				// 收藏或取消的接口
				let res = await changeFavorite(params)
				uni.showToast({
					title: this.senceInfo.isFavorite ? '收藏成功' : '取消收藏',
					icon: 'none'
				})
				//刷新首页
				let pages = getCurrentPages();
				let beforePage = pages[pages.length - 2];
				console.log(beforePage)
				if(beforePage.route === 'pages/index/index'){
					console.log('index')
					beforePage.getSenceList(beforePage.active);
				}else if(beforePage.route === 'pages/search/search'){
					console.log('search')
					beforePage.toSearch()
				}
			},
			async insertTreatRecord(){
				let params = {
					uid: this.uid,
					sid: this.senceInfo.sid,
					duration: this.senceInfo.duration
				}
				await insertTreatRecord(params)
			}
		},
		computed: {
			...mapState('m_user', ['Info'])
		},
		async onLoad(options) {
			console.log(options.id);
			this.uid = this.Info.uid	
			let param = {
				uid: String(this.uid),
				sid: options.id
			}
			let res = await getSenceDetail(param)
			this.senceInfo = res.data.sceneInfo
		},
	}
</script>

<style>
	page {
		width: 100%;
		background-color: rgba(235, 236, 237, 1);
		margin: 0;
		padding: 0;
	}

	.scence {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.sce_top {
		margin-top: 40rpx;
		width: 630rpx;
		height: 474rpx;
		background-color: white;
		border-radius: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		animation-name: move_an1;
		animation-duration: 0.6s;
	}

	.topimg {
		width: 560rpx;
		height: 306rpx;
		border-radius: 28rpx;
		margin-top: 36rpx;
	}

	.choose {
		margin-top: 18rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.heart {
		background-color: rgba(255, 243, 243, 1);
		width: 74rpx;
		height: 74rpx;
		margin-left: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.heart image {
		width: 28rpx;
		height: 26rpx;
	}

	.addplaylist {
		width: 246rpx;
		height: 78rpx;
		opacity: 1;
		border-radius: 16rpx;
		background: rgba(0, 183, 214, 1);
		font-size: 32rpx;
		font-weight: 400;
		color: white;
		margin-right: 36rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sce_center {
		width: 634rpx;
		height: 302rpx;
		border-radius: 40rpx;
		background: rgba(248, 247, 252, 1);
		margin-top: 30rpx;
		display: flex;
		flex-direction: column;

		/* 文本 */
		font-size: 28rpx;
		font-weight: 400;
		color: rgba(115, 119, 154, 1);

		animation-name: move_an2;
		animation-duration: 0.7s;
	}

	.title {
		margin-left: 38rpx;
		margin-top: 18rpx;
		width: 100%;
		height: 38rpx;
		display: flex;
		align-items: center;
		opacity: 1;
		/** 文本1 */
		font-size: 40rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(43, 52, 89, 1);
	}

	.music_name {
		/* width: 196rpx;
		height: 42rpx;
		opacity: 1; */
		margin-top: 22rpx;
		margin-left: 38rpx;
	}

	.cate {
		margin-top: 18rpx;
		margin-left: 38rpx;
	}

	.device_name {
		margin-top: 22rpx;
		margin-left: 38rpx;
	}

	.sce_bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20rpx;
		animation-name: move_an3;
		animation-duration: 0.8s;
	}

	.describe {
		width: 100%;
		display: flex;
		align-items: center;
	}

	.describe text {
		margin-left: 70rpx;
		font-size: 40rpx;
		font-weight: 400;
		color: rgba(43, 52, 89, 1);
	}

	.introduce {
		margin-top: 18rpx;
		width: 630rpx;
		height: 406rpx;
		opacity: 1;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		color: rgba(115, 119, 154, 1);

	}

	.popup-content {
		background-color: rgba(229, 229, 229, 1);
		border-radius: 40rpx 40rpx 0px 0px;
		height: 924rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.pop_top {
		margin: 40rpx;
		width: 692rpx;
		border-bottom: 1px solid rgba(166, 166, 166, 1);
		display: flex;
		flex-direction: column;
	}

	.search {
		width: 160rpx;
		height: 60rpx;
		line-height: 60rpx;
		margin-top: 52rpx;
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
	}

	.wifi_name {
		height: 60rpx;
		line-height: 60rpx;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 200;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
	}

	.des_list {
		width: 100%;
		display: flex;
		flex-direction: column;
		/* margin-top: 48rpx; */
	}

	.des_item {
		margin-left: 40rpx;
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;
		/* transition: 1s; */
		/* transform: translateX(30rpx); */
		animation-name: move_an1;
		animation-duration: 1s;
	}

	@keyframes move_an1 {
		0% {
			transform: translateX(100rpx);
			opacity: 0.4;
		}

		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes move_an2 {
		0% {
			transform: translateX(100rpx);
			opacity: 0;
		}

		30% {
			transform: translateX(100rpx);
			opacity: 0;
		}

		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes move_an3 {
		0% {
			transform: translateX(100rpx);
			opacity: 0;
		}

		60% {
			transform: translateX(100rpx);
			opacity: 0;
		}

		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.des_item image {
		width: 48rpx;
		height: 48rpx;
	}

	.des_item text {
		margin-left: 22rpx;
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 200;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
	}

	.videoplay {
		position: absolute;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
		width: 60rpx;
		height: 60rpx;
		z-index: 1;
	}
	.audiobox{
		text-align: center;
		margin-top: 30rpx;
		width: 85%;
	}
	.audio{
		border-radius: 20rpx;
	}
	.tip2 {
		display: flex;
		align-items: center;
		width: 100%;
		height: 34rpx;
		/** 文本1 */
		font-size: 24rpx;
		font-weight: 200;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
		margin-top: 30rpx;
	}
</style>