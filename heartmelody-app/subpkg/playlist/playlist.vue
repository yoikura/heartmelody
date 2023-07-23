<template>
	<view class="record">
		<view class="information" v-for="(item , i) in playlist" :key="i">
			<!-- <view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					用户名：
				</view>
				<view class="info_right">
					{{item.userName}}
				</view>
			</view> -->
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					创建时间：
				</view>
				<view class="info_right">
					{{item.createTime}}
				</view>
			</view>
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					音乐场景：
				</view>
				<view class="card" @click="toScene(i)">
					<view class="card_top">
						<text style="margin-top: 60rpx;margin-bottom: 20rpx;">{{item.sname}}</text>
						<!-- <view class="cardimgbox" @click.stop="favorite(i)">
							<image src="../../static/heart.png" mode="" v-if="item.isFavorite"></image>
							<image src="../../static/whiteheart.png" mode="" v-else></image>
						</view> -->
					</view>
					<image class="card_img" :src="item.cover" mode="">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getPlayList,changeFavorite
	} from "../../common/api.js"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				uid:'',
				playlist:[]
			};
		},
		methods: {
			toScene(i) {
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${this.playlist[i].sid}`
				})
			},
			//收藏或取消
			async favorite(i) {
				this.playlist[i].isFavorite = !this.playlist[i].isFavorite
				let data = {
					uid: this.Info.uid,
					sid: this.playlist[i].sid,
					isFavorite: this.playlist[i].isFavorite
				}
				// 收藏或取消的接口
				let res = await changeFavorite(data)
				uni.showToast({
					title: this.playlist[i].isFavorite ? '收藏成功' : '取消收藏',
					icon: 'none'
				})
			},
			async getPlayList() {
				let param = {
					uid : this.uid
				}
				let res = await getPlayList(param)
				this.playlist = res.data.data
			}
		},
		computed: {
			...mapState('m_user', ['Info'])
		},
		onLoad() {
			this.uid = this.Info.uid
			this.getPlayList()
		}
	}
</script>

<style lang="scss">
	page {
		width: 100%;
	}

	.record {
		padding-bottom: 100rpx;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
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

	.card {
		width: 334rpx;
		height: 374rpx;
		box-shadow: 0px 0px 60px 0px rgba(239, 240, 244, 1);
		border-radius: 40rpx;
		background-color: white;
		margin-bottom: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.card_top {
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text {
			/** 文本1 */
			font-size: 28rpx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 0px;
			color: rgba(0, 0, 0, 1);
			margin-left: 10rpx;
			margin-top: 24rpx;
			
		}
	}

	.cardimgbox {
		width: 50rpx;
		height: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 16rpx;
		margin-right: 16rpx;
		border-radius: 50%;
		background-color: rgba(255, 243, 243, 1);

	}

	.cardimgbox image {
		width: 20rpx;
		height: 16rpx;
	}

	.card_img {
		border-radius: 28rpx;
		width: 284rpx;
		height: 188rpx;
		margin-top: 42rpx;
	}
</style>