<template>
	<view class="search">
		<view class="ipt_box">
			<input type="text" v-model="title"
				style="margin-left:28rpx ;width: 80%;font-size: 28rpx;font-weight: 400;letter-spacing: 0px;line-height: 0px;color: rgba(0, 0, 0, 1);">
			<view class="search_box" @click="toSearch">
				<image src="../../static/search.png" mode=""></image>
			</view>
		</view>
		<view class="body">
			<view style="width: 100%;text-align: center;" v-if="!card">
				暂无内容,请搜索
			</view>
			<view class="card" v-for="(item, i) in card" :key="i" @click="toScene(i)" v-else>
				<!-- <view class="oval" @click.stop="favorite(i)">
					<image src="../../static/heart.png" class="heart" mode="" v-if="item.isFavorite"></image>
					<image src="../../static/whiteheart.png" class="heart" mode="" v-else></image>
				</view> -->
				<view class="card_top">
					<view class="title">
						{{item.title}}
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
	import {getSencesByTitle,changeFavorite} from '@/common/api.js'
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				list: [
				],
				card: [],
				title: '',
				uid: null
			};
		},
		async onLoad(options){
			this.uid = this.Info.uid	
			let param = {
				title: options.title,
				uid: this.uid
			}
			this.title = options.title
			let res = await getSencesByTitle(param)
			this.card = res.data
		},
		methods: {
			async toSearch() {
				if (!this.title) {
					return uni.showToast({
						title: '请输入内容',
						icon: 'none'
					})
				}
				uni.showLoading({
					title: '搜索中...'
				})
				let param = {
					title: this.title,
					uid: this.uid
				}
				let res = await getSencesByTitle(param)
				this.card = res.data
				uni.hideLoading()
				// setTimeout(() => {
				// 	this.card = this.list
				// 	uni.hideLoading()
				// }, 1500)
			},
			toScene(i) {
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${this.card[i].sid}`
				})
			},
			// //收藏或取消
			// async favorite(i) {
			// 	console.log("here")
			// 	this.card[i].isFavorite = !this.card[i].isFavorite
			// 	let data = {
			// 		uid: this.uid,
			// 		sid: this.card[i].sid,
			// 		favorite: this.card[i].isFavorite
			// 	}
			// 	// 收藏或取消的接口
			// 	let res = await changeFavorite(data)
			// 	if(res.return_code === 200){
			// 		uni.showToast({
			// 			title: this.card[i].isFavorite ? '收藏成功' : '取消收藏',
			// 			icon: 'none'
			// 		})
			// 	}
			// },
		},
		computed: {
			...mapState('m_user', ['Info'])
		},
	}
</script>

<style lang="scss">
	page {
		width: 100%;
		background-color: rgba(235, 236, 237, 1);
	}

	.search {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.ipt_box {
		position: fixed;
		top: 0;
		transform: translateX(-50%);
		left: 50%;
		display: flex;
		align-items: center;
		margin-top: 52rpx;
		width: 630rpx;
		height: 112rpx;
		border-radius: 20rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 13px 40px 0px rgba(239, 240, 244, 1);
	}

	.search_box {
		position: absolute;
		right: 0;
		top: 0;
		width: 112rpx;
		height: 112rpx;
		border-radius: 10px;
		background: rgba(255, 127, 130, 1);
		border: 1px solid rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0px 13px 40px 0px rgba(239, 240, 244, 1);
	}

	.search_box image {
		width: 45%;
		height: 45%;
	}

	.body {
		margin-top: 200rpx;
		width: 702rpx;
		// height: 100rpx;
		// background-color: #ccc;
		display: flex;
		// align-items: center;
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