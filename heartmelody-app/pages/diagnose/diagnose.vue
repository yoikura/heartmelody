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
			<view class="information">
				<view class="info_item" style="margin-top: 44rpx;">
					<view class="info_left">
						用户名：
					</view>
					<view class="info_right" v-show="record">
						{{record.name}}
					</view>
				</view>
				<view class="info_item" style="margin-top: 44rpx;">
					<view class="info_left">
						诊断时间：
					</view>
					<view class="info_right" v-show="record">
						{{record.date}}
					</view>
				</view>
				<view class="info_item" style="margin-top: 44rpx;">
					<view class="info_left">
						选择上传的数据：
					</view>
					<view class="info_right" v-show="record">
						{{record.data}}
					</view>
				</view>
				<view class="info_item" style="margin-top: 44rpx;margin-bottom: 44rpx;">
					<view class="info_left">
						诊断结果：
					</view>
					<view class="info_right" v-show="record">
						{{record.result}}
					</view>
				</view>
			</view>
			<view class="tip2" style="margin-left: 30rpx;">
				<text style="margin-left: 30rpx;margin-top: 20rpx;">提醒：您可在个人中心-诊断记录中查看自己的所有诊断结果。</text>
			</view>
		</view>
		<view class="upbox">
			<view class="text">选择您的眼动仪测试数据：</view>
			<!-- <view class="choose_file file" v-if="filename_1">
				<image src="../../static/file.png" mode=""></image>
				<view class="overflow">{{filename_1}}</view>
			</view> -->
			<view class="choose_file" hover-class="btnc">
				<picker @change="bindPickerChange1" :value="index1" :range="list1" @click="getFile('eyeTracking')">
					<view class="uni-input" style="font-size: 10px;">{{list1[index1]}}</view>
				</picker>
			</view>
		</view>
		<view class="upbox" style="margin-top: 40rpx;">
			<view class="text">选择您的脑机测试数据：</view>
			<!-- <view class="choose_file file" v-if="filename_2">
				<image src="../../static/file.png" mode=""></image>
				<view class="overflow">{{filename_2}}</view>
			</view> -->
			<view class="choose_file" hover-class="btnc">
				<picker @change="bindPickerChange2" :value="index2" :range="list2" @click="getFile('eeg')">
					<view class="uni-input" style="font-size: 10px;">{{list2[index2]}}</view>
				</picker>
			</view>
		</view>
		<view class="tip1">
			<text> 选择输入一些表达自己情感状态的描述：</text>
		</view>
		<view class="iptbox">
			<input type="text" v-model="emoTxt" style="margin-left:16rpx ;width: 90%;font-size: 28rpx;font-weight: 300;letter-spacing: 0px;line-height: 0px;color: rgba(0, 0, 0, 1);

">
		</view>
		<view class="tip2">
			<text style="margin-left: 34rpx;">提醒：可以是几句话或者一些情感词语。</text>
		</view>
		<view class="btn" hover-class="btnc" @click="start">
			开始诊断
		</view>
		<view class="tip2">
			<text style="margin-left: 72rpx;margin-top: 16rpx;">注意：诊断受网络状况的影响，请耐心等待。</text>
		</view>
	</view>
</template>

<script>
	import {upUserdata,getEmoFile} from '@/common/api.js'
	import getDateTime from '@/common/utils/getdateTime.js'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				// list1: ['选择文件','20230410115130.txt', '20230408155534.txt', '20230408080244.txt', '20230405161758.txt'],
				list1: ['选择文件'],
				index1: 0,
				// list2: ['选择文件','20230410114822.txt', '20230408155033.txt', '20230408075101.txt', '20230405160828.txt'],
				list2: ['选择文件'],
				index2: 0,
				emoTxt:'',
				filename_1: '',
				filename_2: '',
				isshow: false,
				isfinish: false,
				record: null,
				i: null,
				uid: null,
				userName: ''
			};
		},
		onReady() {
			let userInfo = this.Info
			this.uid = userInfo.uid
			this.userName = userInfo.userName
		},
		methods: {
			bindPickerChange1(e) {
				this.index1 = e.detail.value
				this.filename_1 = this.list1[this.index1]
			},
			bindPickerChange2(e) {
				this.index2 = e.detail.value
				this.filename_2 = this.list2[this.index2]
			},
			//开始诊断
			async start() {
				this.isshow = true
				if(this.filename_1 === ''&&this.filename_2 === ''&&this.emoTxt === ''){
					uni.showToast({
						title: '输入不能全为空！',
						icon: 'none'
					})
					return
				}
				let params = {
					uid: this.uid,
					eegFile: this.filename_1,
					eyeTrackingFile: this.filename_2,
					emoTxt: this.emoTxt
				}
				let res = await upUserdata(params)
				this.isfinish = true
				let userData = ''
				if(this.filename_1!==''&&this.filename_1!=='选择文件'){
					userData+='眼动仪数据;'
				}
				if(this.filename_2!==''&&this.filename_2!=='选择文件'){
					userData+='脑机数据;'
				}
				if(this.emoTxt!==''){
					userData+='文本描述;'
				}
				let emoRes = ''
				if(res.data.emoRes === 'NORMAL'){
					emoRes = '正常'
				}
				if(res.data.emoRes === 'MILD'){
					emoRes = '轻度焦虑'
				}
				if(res.data.emoRes === 'MODERATE'){
					emoRes = '中度焦虑'
				}
				if(res.data.emoRes === 'SEVERE'){
					emoRes = '重度焦虑'
				}
				this.record = {
					name: this.userName,
					date: getDateTime.nowDate('y-m-d h:i:s'),
					data: userData,
					result: emoRes
				}
				// setTimeout(() => {
				// 	this.isfinish = true
				// 	this.record = {
				// 		name: '阳光彩虹小白马',
				// 		date: '2023-03-20 10:20:55',
				// 		data: '眼动仪数据；脑机数据；文本描述',
				// 		result: '中度焦虑'
				// 	}
				// }, 1100)
			},
			async getFile(type){
				let params = {
					uid: String(this.uid),
					type: type
				}
				let res = await getEmoFile(params)
				// console.log(res.data.fileName[0])
				for(let i=0;i<res.data.fileName.length;i++){
					console.log(res.data.fileName[i])
					res.data.fileName[i] = res.data.fileName[i].split('/')[2]
				}
				if(type === 'eeg'){
					this.list2.push(...res.data.fileName)
				}else{
					this.list1.push(...res.data.fileName)
				}
			}
		},
		computed: {
			...mapState('m_user', ['Info']),
		},
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
	}

	.fileipt {
		opacity: 1;
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
		z-index: 5;
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
		width: 356rpx;
		height: 52rpx;
		display: flex;
		align-items: center;

		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		letter-spacing: 0px;
		// line-height: 0px;
		color: rgba(0, 0, 0, 1);
		margin-left: 32rpx;
	}

	.choose_file {
		width: 268rpx;
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
		width: 150rpx;
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
		z-index: 1;
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

	.information {
		margin-top: 80rpx;
		width: 700rpx;
		// height: 400rpx;
		opacity: 1;
		border-radius: 40rpx;
		background: rgba(248, 247, 252, 1);
		display: flex;
		flex-direction: column;
	}

	.info_item {
		width: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.info_left {
		margin-left: 26rpx;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
		width: 38%;
		display: flex;
		align-items: center;
		height: 52rpx;
	}

	.info_right {
		width: 55%;
		display: flex;
		align-items: center;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 300;
		letter-spacing: 0px;
		// line-height: 0px;
		color: rgba(0, 0, 0, 1);
		word-break: break-all;
		// flex-wrap: wrap;
		// height: 52rpx;
		// white-space: pre-wrap;
		// animation-name: move;
		// animation-duration: 0.8s;
	}

	.popup-content {
		width: 100%;
		height: 300rpx;
		position: relative;
	}

	.btns {
		z-index: 0;
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
		position: absolute;
		transform: translate(-50%, -50%);
		top: 50%;
		left: 50%;
	}
</style>