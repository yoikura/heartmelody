<template>
	<view class="login">
		<view class="top">
			<view class="title">嘿！</view>
			<view class="title">欢迎回来</view>
		</view>
		<view class="phonenum">
			手机号
		</view>
		<view class="ipt fipt">
			<input type="number" v-model="tel"
				style="margin-left:40rpx ;width: 90%;font-size: 42rpx;font-weight: 400;letter-spacing: 0px;line-height: 0px;color: rgba(0, 0, 0, 1);">
		</view>
		<view class=" code">
			验证码
		</view>
		<view class="ipt cipt">
			<input type="number" v-model="code"
				style="margin-left:40rpx ;width: 50%;font-size: 42rpx;font-weight: 400;letter-spacing: 0px;line-height: 0px;color: rgba(0, 0, 0, 1);">
			<view class="gain" @click="getCode">
				<text v-if="iscode">获取验证码</text>
				<text style="color: #a7a7a7;" v-else>{{time}}s后重新获取</text>
			</view>
		</view>
		<view class="tip2">
			<text>提示：新用户会自动注册</text>
		</view>
		<div class="login_btn" @click="login">
			<view class="lgtext">
				登录
			</view>
		</div>
	</view>
</template>

<script>
	import {
		postRegister,
		sendMsg
	} from "../../common/api.js"
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				iscode: true,
				time: 59,
				tel: null,
				code: null,
				timer: null,
			};
		},
		methods: {
			...mapMutations('m_user', ['addUser']),
			async login() {
				if (!this.tel) {
					return uni.showToast({
						title: '请输入手机号!',
						icon: 'none'
					})
				}
				if (!this.code) {
					return uni.showToast({
						title: '请输入验证码!',
						icon: 'none'
					})
				}
				let regs = /^[0-9]{6,6}$/gim;
				if (!regs.test(this.code)) {
					return uni.showToast({
						title: '请输入6位验证码',
						icon: 'none'
					})
				}
				//手机号验证加验证码登录
				let data = {
					tel: this.tel,
					code: this.code
				}
				 const res = await postRegister(data)
				// if (res.data.return_code==="success") {
				if (true) {
					this.addUser(res.data.data)
					uni.showToast({
						title: '登录成功',
						icon: 'none'
					})
					uni.reLaunch({
						url: '/pages/index/index'
					})
				} else {
					uni.showToast({
						title: res.data.tips,
						icon: 'none'
					})
				}
			},
			async getCode() {
				if (!this.tel) {
					return uni.showToast({
						title: '请输入手机号!',
						icon: 'none'
					})
				}
				let regs = /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/;
				if (!regs.test(this.tel)) {
					return uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none'
					})
				}
				let res = await sendMsg(this.tel)
				if(res.data.return_code ==='success'){
					this.code = res.data.data
				}
				this.iscode = false
				this.timer = setInterval(() => {
					this.time--
					if (this.time == -1) {
						this.iscode = true
						this.time = 59
						clearInterval(this.timer)
					}
				}, 1000)
			}
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		height: 100%;
		background-color: white;
	}

	.login {
		width: 100%;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.top {
		margin-left: 60rpx;
		margin-top: 244rpx;
		width: 240rpx;
		height: 174rpx;
		display: flex;
		flex-direction: column;
		font-size: 60rpx;
		font-weight: 400;
		color: rgba(43, 52, 89, 1);
	}

	.title {
		animation-name: an1;
		animation-duration: 0.8s;
	}

	.phonenum {
		width: 84rpx;
		height: 42rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: rgba(43, 52, 89, 1);
		margin-top: 74rpx;
		margin-left: 64rpx;
	}

	.ipt {
		width: 630rpx;
		height: 100rpx;
		border-radius: 16rpx;
		border: 2rpx solid rgba(43, 52, 89, 1);
		margin-left: 60rpx;
		display: flex;
		align-items: center;
		position: relative;
	}

	.fipt {
		margin-top: 14rpx;
	}

	.code {
		width: 84rpx;
		height: 42rpx;
		font-size: 28rpx;
		font-weight: 400;
		color: rgba(43, 52, 89, 1);
		margin-top: 44rpx;
		margin-left: 64rpx;
	}

	.cipt {
		margin-top: 12rpx;
	}

	.login_btn {
		width: 630rpx;
		height: 100rpx;
		border-radius: 16rpx;
		background-color: rgba(0, 183, 214, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 60rpx;
		margin-top: 162rpx;
	}

	.lgtext {
		width: 64rpx;
		height: 48rpx;
		font-size: 32rpx;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}


	@keyframes an1 {
		0% {
			transform: translateX(-30rpx);
			opacity: 0.3;
		}

		100% {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.gain {
		position: absolute;
		transform: translateY(-50%);
		right: 40rpx;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 183, 214, 1);
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
		margin-left: 60rpx;
		margin-top: 30rpx;
	}
</style>