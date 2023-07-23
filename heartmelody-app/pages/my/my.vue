<template>
	<view class="my">
		<view class="top">
			<view class="info_item">
				<view class="info_left">
					头像:
				</view>
				<image :src="userInfo.avatar" mode=""></image>
			</view>
			<view class="info_item">
				<view class="info_left">
					用户名:
				</view>
				<text>{{userInfo.userName}}</text>
			</view>
			<view class="btn" @click="revise">
				点击修改
			</view>
		</view>
		<view class="item" @click="toMyfav">
			<image src="../../static/heartk.png" class="img_left" style="width: 28rpx;height: 26rpx;" mode=""></image>
			<text>我的喜欢</text>
			<image src="../../static/next.png" mode="" class="next"></image>
		</view>
		<view class="item" @click="toRecord">
			<image src="../../static/biao.png" class="img_left" style="width: 24rpx;height: 28rpx;" mode=""></image>
			<text>诊断记录</text>
			<image src="../../static/next.png" mode="" class="next"></image>
		</view>
		<view class="item" @click="toTreatrecord">
			<image src="../../static/record1.png" class="img_left" style="width: 32rpx;height: 36rpx;" mode=""></image>
			<text>治疗记录</text>
			<image src="../../static/next.png" mode="" class="next"></image>
		</view>
		<view class="item" @click="logout">
			<image src="../../static/off.png" class="img_left" style="width: 32rpx;height:32rpx;" mode=""></image>
			<text>注销</text>
			<image src="../../static/next.png" mode="" class="next"></image>
		</view>
		<uni-popup ref="popup" background-color="#fff">
			<view class="revise_info">
				<view class=""
					style="display: flex;align-items: center;justify-content: center;flex-direction: column;">
					<image :src="ava" mode="" @click="chooseImg"></image>
					<text style="margin-top: 20rpx;">头像</text>
				</view>
				<view class="" style="display: flex;align-items: center;justify-content: center;">
					<text style="margin-right: 20rpx;">用户名:</text>
					<input type="text" value="userInfo.userName" v-model="name">

				</view>
				<button type="primary" @click="truexg">确定修改</button>
			</view>
		</uni-popup>
		<tb :selected="2"></tb>
	</view>
</template>

<script>
	import tb from '@/components/tb/tb.vue';
	import {
		mapState
	} from 'vuex'
	import{updateUserInfo} from '@/common/api.js'
	export default {
		components: {
			tb
		},
		data() {
			return {
				userInfo: null,
				name: '',
				ava: []
			};
		},
		methods: {
			//修改信息
			revise() {
				this.$refs.popup.open('center')
				this.ava = this.userInfo.avatar
				this.name = this.userInfo.userName
			},
			//修改头像
			chooseImg() {
				let that = this
				uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						console.log(tempFilePaths);
						this.ava = tempFilePaths
						uni.uploadFile({
							url: 'https://iyunxia.cn/webapps/file/uploadFile',
							filePath: tempFilePaths[0],
							name: 'iFile',
							formData: {
								openId: 'oGvk045t0ucxGBjcIrIgEdbqX748',
								file: tempFilePaths[0],
								uid: this.userInfo.uid
							},
							success: (uploadFileRes) => {
								console.log(uploadFileRes, '//');
								let img = JSON.parse(uploadFileRes.data)
								uni.showToast({
									title: '上传成功！',
									icon: 'none'
								})
								that.img = img.data.file_path
							}
						});
					}
				});
			},
			//确认修改
			async truexg() {
				let newUser = {
					uid: this.userInfo.uid,
					userName: this.name,
					tel: this.userInfo.tel,
					avatar: this.ava[0]
				};
				let res = await updateUserInfo(newUser)
				if(res.data.return_code==="success"){
					uni.showToast({
						title: '修改成功',
						icon: 'none'
					})
					this.userInfo.avatar = this.ava
					this.userInfo.userName = this.name
					this.$refs.popup.close()
				}else{
					uni.showToast({
						title: '修改失败，请重试',
						icon: 'none'
					})
				}
			},
			//去喜欢页面
			toMyfav() {
				uni.navigateTo({
					url: '/pages/favorite/favorite'
				})
			},
			//去诊断记录
			toRecord() {
				uni.navigateTo({
					url: '/pages/record/record'
				})
			},
			//去治疗记录
			toTreatrecord() {
				uni.navigateTo({
					url: '/pages/treatrecord/treatrecord'
				})
			},
			logout() {
				uni.showModal({
					title: '提示',
					content: '确定退出登录吗？',
					success: function(res) {
						if (res.confirm) {
							uni.showToast({
								title: '取消登录',
								icon: 'none'
							})
							uni.reLaunch({
								url: '/pages/login/login'
							})
						} else if (res.cancel) {
							uni.showToast({
								title: '取消退出登录',
								icon: 'none'
							})
						}
					}
				});
			}
		},
		computed: {
			...mapState('m_user', ['Info']),
		},
		onLoad() {
			this.userInfo = this.Info
			console.log(this.userInfo);
		},
		onLaunch() {
			uni.hideTabBar()
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		background-color: rgba(235, 236, 237, 1);
	}

	.my {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.top {
		margin-top: 202rpx;
		width: 634rpx;
		height: 382rpx;
		opacity: 1;
		border-radius: 34rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 49px 0px rgba(233, 232, 239, 1);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.info_item {
		margin-left: 28rpx;
		display: flex;
		align-items: center;
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);

	}

	.info_left {
		width: 144rpx;
	}

	.info_item image {
		width: 104rpx;
		height: 104rpx;
		border-radius: 28rpx;
	}

	.btn {
		width: 246rpx;
		height: 78rpx;
		background-color: rgba(0, 183, 214, 1);
		border-radius: 16rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 28rpx;
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(255, 255, 255, 1);


	}

	.item {
		display: flex;
		align-items: center;
		position: relative;
		width: 636rpx;
		height: 80rpx;
		opacity: 1;
		margin-top: 56rpx;
		border-radius: 34rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 49px 0px rgba(233, 232, 239, 1);
		/** 文本1 */
		font-size: 16px;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
	}

	.item text {
		margin-left: 34rpx;
	}

	.img_left {
		margin-left: 44rpx;

	}

	.next {
		width: 16rpx;
		height: 30rpx;
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		right: 48rpx;
	}

	.revise_info {
		width: 700rpx;
		height: 500rpx;
		border-radius: 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		flex-direction: column;
	}

	.revise_info image {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		margin-top: 30rpx;
	}

	.revise_info input {
		width: 400rpx;
		border: 1px solid #ccc;
	}
</style>