<template>
	<view class="handle">
		<view class="title">
			请选择您要进行的项目
		</view>
		<view class="list" @click="toDiagnose">
			<image src="../../static/zhiliao.png" mode="" class="list_left"></image>
			<view class="list_name">
				紧张焦虑诊断
			</view>
			<image src="../../static/next.png" mode="" class="list_right"></image>
		</view>
		<view class="list" @click="toCreate">
			<image src="../../static/sence_create.png" mode="" class="list_left"></image>
			<view class="list_name">
				音乐场景生成
			</view>
			<image src="../../static/next.png" mode="" class="list_right"></image>
		</view>
		<view class="list" @click="toPlaylist">
			<image src="../../static/playlist.png" mode="" class="list_left"></image>
			<view class="list_name">
				场景播放列表
			</view>
			<image src="../../static/next.png" mode="" class="list_right"></image>
		</view>
		<view class="list" @click="toAnalyse">
			<image src="../../static/analyse.png" mode="" class="list_left"></image>
			<view class="list_name">
				情绪评估和治疗方案
			</view>
			<image src="../../static/next.png" mode="" class="list_right"></image>
		</view>
		<tb :selected="1"></tb>
	</view>
</template>

<script>
	import tb from '@/components/tb/tb.vue';

	export default {
		components: {
			tb
		},
		data() {
			return {

			};
		},
		methods: {
			toDiagnose() {
				uni.navigateTo({
					url: '/pages/diagnose/diagnose'
				})
			},

			toCreate() {
				uni.navigateTo({
					url: '/pages/sceneCreate/sceneCreate'
				})
			},
			toPlaylist() {
				uni.navigateTo({
					url: `/subpkg/playlist/playlist`
				})
			},
			toAnalyse(){
				uni.navigateTo({
					url: `/pages/analyse/analyse`
				})
			}
		},
		computed: {},
		onLaunch() {
			uni.hideTabBar()
		},
		onLoad() {}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
		width: 100%;
		height: 100%;
	}

	.handle {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		// justify-content: center;
		flex-direction: column;
	}

	.title {
		margin-top: 380rpx;
		width: 600rpx;
		height: 88rpx;
		/** 文本1 */
		font-size: 60rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(43, 52, 89, 1);
		animation-name: show;
		animation-duration: 1s;
	}

	.list {
		margin-top: 30rpx;
		margin-bottom: 26rpx;
		width: 636rpx;
		height: 80rpx;
		opacity: 1;
		border-radius: 34rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 49px 0px rgba(233, 232, 239, 1);
		animation-name: an1;
		animation-duration: 1s;
		position: relative;
		display: flex;
		align-items: center;
	}

	@keyframes show {
		0% {
			opacity: 0.2;
		}

		100% {
			opacity: 1;
		}
	}

	@keyframes an1 {
		0% {
			opacity: 0.2;
			transform: translateX(-70rpx);
		}

		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.list_left {
		width: 28rpx;
		height: 28rpx;
		margin-left: 44rpx;
	}

	.list_name {
		width: 292rpx;
		height: 50rpx;
		margin-left: 34rpx;
		display: flex;
		align-items: center;
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);

	}

	.list_right {
		width: 16rpx;
		height: 30rpx;
		position: absolute;
		transform: translateY(-50%);
		top: 50%;
		right: 42rpx;
	}
</style>