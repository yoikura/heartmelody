<template>
	<view class="diagnose">
		<view class="check" v-if="isshow">
			<view class="state" v-if="isfinish">
				<image src="../../static/finish.png" class="loading" mode=""></image>
				<text style="margin-left: 50rpx;">已完成，请查看</text>
			</view>
			<view class="state" v-else>
				<image src="../../static/loading.gif" class="loading" mode=""></image>
				<text style="margin-left: 50rpx;">未完成，请等待...</text>
			</view>
			<view class="audiobox">
				<wxy-audio class="audio" :src="hintAudio.src" :play.sync="play"></wxy-audio>
				<view class="tip2">
					<text>提示：建议您在开始治疗之前跟随引导语调整状态</text>
				</view>
				<!-- <audio style="text-align: left;height: 80rpx;" :src="hintAudio.src" :poster="hintAudio.poster" :name="hintAudio.name" controls></audio> -->
			</view>
			<view class="top" v-if="isfinish">
				<view class="video_box" style="position: relative;" @click="toPlay">
					<uni-link :href="card.address">
						<image src="../../static/play.png" class="videoplay" mode=""></image>
						<image class="topimg" :src="card.cover" mode=""></image>
					</uni-link>
				</view>
				<view class="choose">
					<view class="heart" @click.stop="favorite">
						<image src="../../static/heart.png" mode="" v-if="card.isFavorite"></image>
						<image src="../../static/whiteheart.png" mode="" v-else></image>
					</view>
					<view class="choosedevice" @click="addPlayList">
						加入播放列表
					</view>
				</view>
			</view>
		</view>
		<view class="upbox">
			<view class="text">请选择您要上传的音乐文件：</view>
			
			<lsj-upload  ref="lsjUpload1" :width="width" :height="height" :option="option1" childId="upload1"
				:size="size" :formats="formats1" :instantly="instantly" @change="onChange1" :count="1">
				<view style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
					<view class="choose_file file" v-if="filename_1">
						<image src="../../static/m.png" mode=""></image>
						<view class="overflow">{{filename_1}}</view>
					</view>
					<view class="choose_file" hover-class="btnc" v-else>
						选择文件
					</view>
				</view>
			</lsj-upload >
			<uni-icons type="trash" size="20" v-if="filename_1" @click="clear1()" style="margin-right: 20rpx;"></uni-icons>
		</view>
		<!-- <view class="upbox"
			style="margin-top: 40rpx;flex-direction: column;justify-content: center;align-items: flex-start;">
			<view class="text">请选择您上传的音乐类型：</view>
			<view class="text">
				<view class="true" v-for="(item, i ) in words" :key="i" @click="choosewords(i)">
					<view class="radio">
						<view class="dot" v-if="wordsActive==i">
						</view>
					</view>
					<text style="margin-right: 50rpx;">{{item}}</text>
				</view>
			</view>
		</view> -->
		<!-- <view class="words-upload" v-if="hasWords">
			<view class="text">请选择您要上传的歌词文件：</view>
			<lsj-upload  ref="lsjUpload2" :width="width" :height="height" :option="option2" childId="upload2"
				:size="size" :formats="formats2" :instantly="instantly" @change="onChange2" :count="1">
				<view style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
					<view class="choose_file file" v-if="filename_2">
						<image src="../../static/m.png" mode=""></image>
						<view class="overflow">{{filename_2}}</view>
					</view>
					<view class="choose_file" hover-class="btnc" v-else>
						选择文件
					</view>
				</view>
			</lsj-upload>
			<uni-icons type="trash" size="20" v-if="filename_2" @click="clear2()" style="margin-right: 20rpx;"></uni-icons>
		</view> -->
		<view class="upbox"
			style="margin-top: 40rpx;flex-direction: column;justify-content: center;align-items: flex-start;">
			<view class="text">请选择您偏爱的场景类型：</view>
			<view class="text">
				<view class="true" v-for="(item, i ) in sceneTypes" :key="i" @click="chooseSceneType(i)">
					<view class="radio">
						<view class="dot" v-if="sceneTypesActive==i">
						</view>
					</view>
					<text style="margin-right: 50rpx;">{{item}}</text>
				</view>
			</view>
		</view>
		<view class="tip1">
			<text>您可选择输入一些对想要生成场景的描述：</text>
		</view>
		<view class="iptbox">
			<input type="text" v-model="describtion"
				style="margin-left:16rpx ;width: 90%;font-size: 28rpx;font-weight: 300;letter-spacing: 0px;line-height: 0px;color: rgba(0, 0, 0, 1);">
		</view>
		<view class="tip2">
			<text style="margin-left: 34rpx;">提醒：建议输入格式为形容词+景物名词。</text>
		</view>
		<view class="btn" hover-class="btnc" @click="start">
			开始生成
		</view>
		<view class="tip2">
			<text style="margin-left: 72rpx;margin-top: 16rpx;">注意：场景生成受网络状况的影响，请耐心等待。</text>
		</view>
		<!-- 普通弹窗 -->
		<!-- <uni-popup ref="popup1" background-color="#fff">
			<view class="popup-content2">
				<lsj-upload  ref="lsjUpload1" :width="width" :height="height" :option="option1"
					:size="size" :formats="formats" :instantly="instantly" @change="onChange1" @uploadEnd="onuploadEnd1">
					<view style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
						<view class="btns"
							style="z-index: 2;display: flex;align-items: center;justify-content: center;position: r;">
							选择附件</view>
					</view>
				</lsj-upload >
			</view>
		</uni-popup>
		<uni-popup ref="popup2" background-color="#fff">
			<view class="popup-content2">
				<lsj-upload ref="lsjUpload2" :width="width" :height="height" :option="option2"
					:size="size" :formats="formats" :instantly="instantly" @change="onChange2" @uploadEnd="onuploadEnd2">
					<view style="width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;">
						<view class="btns"
							style="z-index: 2;display: flex;align-items: center;justify-content: center;position: r;">
							选择附件</view>
					</view>
				</lsj-upload>
			</view>
		</uni-popup> -->
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import {upCtreateScene,changeFavorite,addPlayList} from '@/common/api.js'
	export default {
		data() {
			return {
				filename_1: '',
				filename_2: '',
				isshow: false,
				isfinish: false,
				words: ['无歌词', '有歌词'],
				sceneTypes:['动漫','写实'],
				hasWords:false,
				wordsActive: 0,
				sceneTypesActive: 0,
				card: {},
				option1: {
					// 上传服务器地址，需要替换为你的接口地址
					url: 'http://localhost:8888/createscene/upload', // 该地址非真实路径，需替换为你项目自己的接口地址
					// 上传附件的key
					name: 'mp3File',
					// 根据你接口需求自定义请求头,默认不要写content-type,让浏览器自适配
					// 根据你接口需求自定义body参数
					formData: {
						fileName:''
					}
				},
				option2: {
					// 上传服务器地址，需要替换为你的接口地址
					url: 'http://localhost:8888/createscene/upload', // 该地址非真实路径，需替换为你项目自己的接口地址
					// 上传附件的key
					name: 'wordsFile',
					// 根据你接口需求自定义请求头,默认不要写content-type,让浏览器自适配
					// 根据你接口需求自定义body参数
					formData: {
						fileName:''
					}
				},
				// 选择文件后是否立即自动上传，true=选择后立即上传
				instantly: false,
				// 必传宽高且宽高应与slot宽高保持一致
				width: '100%',
				height: '100%',
				// 限制允许上传的格式，空串=不限制，默认为空
				formats1: 'mp3,mp4,ogg',
				formats2: 'txt',
				// 文件上传大小限制
				size: 30,
				// 文件回显列表
				files1: new Map(),
				files2: new Map(),
				// 演示用
				tabIndex: 0,
				describtion:'',
				uid: null,
				play:true,
				hintAudio:{
					poster: 'https://web-assets.dcloud.net.cn/unidoc/zh/music-a.png',
					name: '引导词',
					author: '暂无',
					src: 'https://heartmelody.oss-cn-beijing.aliyuncs.com/music/%E5%BC%95%E5%AF%BC%E8%AF%AD%E5%BD%95%E9%9F%B3.mp3',
				},
			};
		},
		onLoad(){
			this.uid = this.Info.uid
		},
		methods: {
			upfile(i) {
				let that = this
				if(i === 1){
					this.$refs.popup1.open('bottom')
				}else{
					this.$refs.popup2.open('bottom')
				}
				
				// uni.chooseFile({
				// 	count: 1, //默认100
				// 	extension: ['.zip', '.doc', 'txt'],
				// 	success: function(res) {
				// 		console.log(res, res.tempFiles[0].name, JSON.stringify(res.tempFilePaths));
				// 		if (i == 1) {
				// 			that.filename_1 = res.tempFiles[0].name
				// 		} else {
				// 			that.filename_2 = res.tempFiles[0].name
				// 		}
				// 		// console.log(that.filename_1);
				// 	}
				// });
			},
			//选择
			choosewords(i) {
				this.wordsActive = i
				if(i===1)
					this.hasWords = true
				else
					this.hasWords = false
			},
			chooseSceneType(i){
				this.sceneTypesActive = i
			},
			//开始生成
			async start() {
				if(this.filename_1 === ''&&this.filename_2 === ''&&this.describtion === ''){
					uni.showToast({
						title: '输入不能全为空！',
						icon: 'none'
					})
					return
				}
				if(this.filename_1 === ''){
					uni.showToast({
						title: '音频文件为空！',
						icon: 'none'
					})
					return
				}
				this.isshow = true
				// await this.upload()
				let params = {
					uid : String(this.uid),
					musicName: this.filename_1.split('.')[0],
					style: this.sceneTypes[this.sceneTypesActive],
					senceDescription: this.describtion
				}
				let res = await upCtreateScene(params)
				if(res.statusCode == 200){
					this.isfinish = true
					res.data.isFavorite = false
					this.card = res.data
					// this.card.isFavorite = false
				}
			},
			// // 某文件上传结束回调(成功失败都回调)
			// onuploadEnd1(item) {
			// 	this.$refs.popup1.close()
			// 	// 强制更新视图
			// 	this.$forceUpdate();
			// },
			// onuploadEnd2(item) {
			// 	this.$refs.popup2.close()
			// 	// 强制更新视图
			// 	this.$forceUpdate();
			// },
			// 文件选择回调
			onChange1(files) {
				// this.$refs.popup1.close('bottom')
				console.log('当前选择的文件列表：', ...files.values(), JSON.stringify([...files.values()]));
				// 更新选择的文件 
				this.files1 = files;
				console.log(this.files);
				let a = [...files.values()]
				this.filename_1 = a[0].name
				this.option1.formData.fileName = this.filename_1
				// 强制更新视图
				this.$forceUpdate()
			},
			onChange2(files) {
				// this.$refs.popup2.close('bottom')
				console.log('当前选择的文件列表：', ...files.values(), JSON.stringify([...files.values()]));
				// 更新选择的文件 
				this.files2 = files;
				console.log(this.files);
				let a = [...files.values()]
				this.filename_2 = a[0].name
				this.option2.formData.fileName = this.filename_2
				// 强制更新视图
				this.$forceUpdate()
			},
			// 手动上传
			upload() {
				// name=指定文件名，不指定则上传所有type等于waiting和fail的文件
				if(this.filename_1 !== ''){
					this.$refs.lsjUpload1.upload()
				}
				//歌词文件暂定
				// if(this.filename_2 !== ''){
				// 	this.$refs.lsjUpload2.upload();
				// }
			},
			// 移除某个文件
			clear1() {
				// name=指定文件名，不传name默认移除所有文件
				this.$refs.lsjUpload1.clear();
				this.filename_1 = ''
			},
			clear2() {
				// name=指定文件名，不传name默认移除所有文件
				this.$refs.lsjUpload2.clear();
				this.filename_2 = ''
			},
			//收藏或取消
			async favorite() {
				this.card.isFavorite = !this.card.isFavorite
				let data = {
					uid: this.uid,
					sid: this.card.sid,
					favorite: this.card.isFavorite
				}
				// 收藏或取消的接口
				let res = await changeFavorite(data)
				uni.showToast({
					title: this.card.isFavorite ? '收藏成功' : '取消收藏',
					icon: 'none'
				})
			},
			async addPlayList() {
				let param = {
					uid:this.uid,
					sid:this.card.sid
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
		},
		computed: {
			...mapState('m_user', ['Info'])
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}

	.diagnose {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.check {
		animation-name: move2;
		animation-duration: 0.4s;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 2;
		background-color: #f7f7f7
	}

	.upbox {
		margin-top: 160rpx;
		width: 700rpx;
		height: 140rpx;
		opacity: 1;
		border-radius: 40rpx;
		background: rgba(248, 247, 252, 1);
		display: flex;
		align-items: center;
	}



	.text {
		width: 1200rpx;
		height: 52rpx;
		display: flex;
		align-items: center;

		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
		margin-left: 32rpx;
	}

	.true {
		display: flex;
		align-items: center;
	}

	.radio {
		width: 32rpx;
		height: 32rpx;
		position: relative;
		border-radius: 50%;
		display: flex;
		align-items: center;
		border: 1px solid rgba(0, 0, 0, 1);
		margin-right: 14rpx;
	}

	.dot {
		width: 12rpx;
		height: 12rpx;
		position: absolute;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
		background-color: rgba(0, 0, 0, 1);
		border-radius: 50%;
	}

	.choose_file {
		width: 180rpx;
		height: 64rpx;
		opacity: 1;
		border-radius: 16rpx;
		background: rgba(0, 183, 214, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		margin-right: 26rpx;
	}

	.file {
		background-color: rgba(0, 0, 0, 0);
		/** 文本1 */
		font-size: 24rpx;
		font-weight: 400;
		letter-spacing: 0px;
		color: rgba(0, 0, 0, 1);
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.file image {
		width: 24rpx;
		height: 30rpx;
		margin-right: 12rpx;
	}

	.overflow {
		width: 200rpx;
		display: block;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		// -o-text-overflow: ellipsis;
	}

	.tip1 {
		margin-top: 54rpx;
		width: 100%;
		height: 54rpx;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
	}

	.tip1 text {
		margin-left: 24rpx;
	}

	.iptbox {
		width: 702rpx;
		height: 64rpx;
		margin-top: 20rpx;
		border: 1px solid rgba(43, 52, 89, 1);
		border-radius: 16rpx;
		background-color: white;
		display: flex;
		align-items: center;
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

	.btn {
		left: 0px;
		top: 0px;
		width: 630rpx;
		height: 100rpx;
		opacity: 1;
		border-radius: 16rpx;
		background: rgba(0, 183, 214, 1);
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 166rpx;
	}

	.btnc {
		transition: 0.1s;
		transform: scale(0.97);
		background-color: rgba(0, 172, 195, 1.0);
	}

	.state {
		width: 100%;
		display: flex;
		align-items: center;
		margin-top: 206rpx;
	}

	.state text {
		animation-name: move;
		animation-duration: 1s;
	}

	.loading {
		width: 32rpx;
		height: 32rpx;
		margin-left: 50rpx;
		animation-name: fd;
		animation-duration: 0.6s;
	}

	@keyframes fd {
		0% {
			transform: scale(0.1);
		}

		100% {
			transform: scale(1);
		}
	}

	@keyframes move {
		0% {
			transform: translateX(60rpx);
			opacity: 0.4;
		}

		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	@keyframes move2 {
		0% {
			transform: translateX(100%);
		}

		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.top {
		margin-top: 112rpx;
		width: 630rpx;
		height: 474rpx;
		background-color: white;
		border-radius: 40rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		animation-name: move;
		animation-duration: 1s;


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

		.choosedevice {
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
	}

	.popup-content {
		background-color: rgba(229, 229, 229, 1);
		border-radius: 40rpx 40rpx 0px 0px;
		height: 924rpx;
		display: flex;
		flex-direction: column;
		align-items: center;


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

		.des_item {
			margin-left: 40rpx;
			display: flex;
			align-items: center;
			margin-bottom: 20rpx;
			/* transition: 1s; */
			/* transform: translateX(30rpx); */
			animation-name: an1;
			animation-duration: 1s;
		}

		@keyframes an1 {
			0% {
				transform: translateX(100rpx);
				opacity: 0.4;
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

	.popup-content2 {
		width: 100%;
		height: 300rpx;
		position: relative;
	}

	.dibu {
		height: 200rpx;
		width: 30rpx;
	}

	.words-upload{
		margin-top: 40rpx;
		width: 700rpx;
		height: 140rpx;
		opacity: 1;
		border-radius: 40rpx;
		background: rgba(248, 247, 252, 1);
		display: flex;
		align-items: center;
	}
	.btns {
		width: 630rpx;
		height: 100rpx;
		opacity: 1;
		border-radius: 16rpx;
		background: rgba(0, 183, 214, 1);
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.audiobox{
		text-align: center;
		margin-top: 60rpx;
		width: 85%;
	}
	.audio{
		border-radius: 20rpx;
	}
</style>