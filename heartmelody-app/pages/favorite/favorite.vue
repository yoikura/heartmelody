<template>
	<view class="favorite">
		<view class="body">
			<view class="card" v-for="(item, i) in card" :key="i" @click="toScene(i)">
				<view class="oval" @click.stop="favorite(i)">
					<image src="../../static/heart.png" mode="" v-if="item.favorite"></image>
					<image src="../../static/whiteheart.png" mode="" v-else></image>
				</view>
				<view class="card_top">
					<view class="title">
						{{item.sname}}
					</view>
				</view>
				<view class="card_img">
					<image :src="item.cover" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getFavorite,changeFavorite
	} from "../../common/api.js"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				card: [
				],
			};
		},
		methods: {
			toScene(i) {
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${this.card[i].sid}`
				})
			},
			async getFavorite() {
				let res = await getFavorite(this.Info.uid)
				this.card = res.data.data
			},
			//收藏或取消
			async favorite(i) {
				this.card[i].favorite = !this.card[i].favorite
				let data = {
					uid: this.Info.uid,
					sid: this.card[i].sid,
					favorite: this.card[i].favorite
				}
				// 收藏或取消的接口
				let res = await changeFavorite(data)
				uni.showToast({
					title: this.card[i].favorite ? '收藏成功' : '取消收藏',
					icon: 'none'
				})
				this.getFavorite()
			}
		},
		computed: {
			...mapState('m_user', ['Info']),
		},
		onLoad() {
			this.getFavorite()
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
	}

	.favorite {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.body {
		margin-top: 94rpx;
		width: 702rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.card {
		width: 334rpx;
		height: 374rpx;
		opacity: 1;
		border-radius: 40rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		margin-bottom: 42rpx;
		position: relative;
		align-items: center;
	}

	.card_top {
		display: flex;
		align-items: center;
		width: 100%;
	}

	.title {
		width: 100%;
		height: 44rpx;
		display: flex;
		align-items: center;
		margin-left: 46rpx;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(0, 0, 0, 1);
		margin-top: 24rpx;

	}

	.oval {
		position: absolute;
		right: 16rpx;
		top: 16rpx;
		width: 52rpx;
		height: 50rpx;
		opacity: 1;
		background: rgba(255, 243, 243, 1);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.oval image {
		width: 20rpx;
		height: 16rpx;
	}

	.card_img {
		margin-top: 42rpx;
		width: 284rpx;
		height: 188rpx;
	}

	.card_img image {
		width: 100%;
		height: 100%;
		border-radius: 28rpx;
	}
</style>