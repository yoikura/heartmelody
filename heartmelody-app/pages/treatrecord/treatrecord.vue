<template>
	<view class="record">
		<view class="information" v-for="(item , i) in record" :key="i">
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					用户名：
				</view>
				<view class="info_right">
					{{item.userName}}
				</view>
			</view>
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					开始时间：
				</view>
				<view class="info_right">
					{{item.createTime}}
				</view>
			</view>
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					使用时长：
				</view>
				<view class="info_right" style="display: flex;align-items: center;flex-wrap: wrap;">
					{{Math.floor(item.duration/60)}}min&nbsp; {{item.duration%60}}s
				</view>
			</view>
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					使用的音乐场景：
				</view>
				<view class="card" @click="toScene(i)">
					<view class="card_top">
						<text class="title">{{item.sname}}</text>
						<view class="cardimgbox" @click.stop="favorite(i)">
							<image src="../../static/heart.png" mode="" v-if="item.favorite"></image>
							<image src="../../static/whiteheart.png" mode="" v-else></image>
						</view>
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
		getTreatRecords,changeFavorite
	} from "../../common/api.js"
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				record: [
					// {
					// 	uid: 1,
					// 	rid: 1,
					// 	sid: 1,
					// 	sname: '音乐场景1',
					// 	cover: '默认地址',
					// 	isFavorite: false,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	duration: '20min',
					// 	result: '中度焦虑',
					// 	info: {
					// 		id: 1,
					// 		title: '宁静之海',
					// 		img: 'https://img.js.design/assets/img/64154fa5a4b8a1cad9cd97db.jpg'
					// 	},
					// },
					// {
					// 	uid: 1,
					// 	rid: 1,
					// 	sid: 1,
					// 	sname: '音乐场景1',
					// 	cover: '默认地址',
					// 	isFavorite: true,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	duration: '20min',
					// 	result: '中度焦虑',
					// 	info: {
					// 		id: 0,
					// 		title: '绝美落日',
					// 		img: 'https://img.js.design/assets/img/6411e12d071dedd4d1fac38d.jpg'
					// 	},
					// }, {
					// 	uid: 1,
					// 	rid: 1,
					// 	sid: 1,
					// 	sname: '音乐场景1',
					// 	cover: '默认地址',
					// 	isFavorite: false,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	duration: '20min',
					// 	result: '中度焦虑',
					// 	info: {
					// 		id: 3,
					// 		title: '海豚子音',
					// 		img: 'https://img.js.design/assets/img/6416a24dd1d4cdd7f8390c96.jpg'
					// 	}
					// }, {
					// 	uid: 1,
					// 	rid: 1,
					// 	sid: 1,
					// 	sname: '音乐场景1',
					// 	cover: '默认地址',
					// 	isFavorite: true,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	duration: '20min',
					// 	result: '中度焦虑',
					// 	info: {
					// 		id: 2,
					// 		title: '鸟语黄昏',
					// 		img: 'https://img.js.design/assets/img/641550a1d1d4cdd7f80a2e65.jpg'
					// 	},
					// }
				]
			};
		},
		methods: {
			toScene(i) {
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${this.record[i].info.id}`
				})
			},
			//收藏或取消
			async favorite(i) {
				this.record[i].favorite = !this.record[i].favorite
				let isFavorite = this.record[i].favorite
				for(let j in this.record){
					if(this.record[i].sid===this.record[j].sid){
						this.record[j].favorite = isFavorite
					}
				}
				let data = {
					uid: this.Info.uid,
					sid: this.record[i].sid,
					favorite: this.record[i].favorite
				}
				// 收藏或取消的接口
				let res = await changeFavorite(data)
				uni.showToast({
					title: this.record[i].favorite ? '收藏成功' : '取消收藏',
					icon: 'none'
				})
				
			},
			async getTreatRecords() {
				let res = await getTreatRecords(this.Info.uid)
				this.record = res.data.data
			}
		},
		computed: {
			...mapState('m_user', ['Info'])
		},
		onLoad() {
			this.getTreatRecords()
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
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		text {
			/** 文本1 */
			font-size: 28rpx;
			font-weight: 400;
			letter-spacing: 0px;
			line-height: 0px;
			color: rgba(0, 0, 0, 1);
			margin-left: 46rpx;
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
	.title{
		width: 60%;
	}
</style>