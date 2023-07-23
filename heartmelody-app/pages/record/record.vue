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
					诊断时间：
				</view>
				<view class="info_right">
					{{item.createTime}}
				</view>
			</view>
			<view class="info_item" style="margin-top: 44rpx;">
				<view class="info_left">
					选择上传的数据：
				</view>
				<view class="info_right">
					{{item.data}}
				</view>
			</view>
			<view class="info_item" style="margin-top: 44rpx;margin-bottom: 44rpx;">
				<view class="info_left">
					诊断结果：
				</view>
				<view class="info_right">
					{{item.results}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getDiagnoseRecords
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
					// 	did: 1,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	data: '眼动仪数据；脑机数据；文本描述',
					// 	result: '中度焦虑'
					// },
					// {
					// 	uid: 1,
					// 	did: 1,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	data: '眼动仪数据；脑机数据；文本描述',
					// 	result: '中度焦虑'
					// }, {
					// 	uid: 1,
					// 	did: 1,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	data: '眼动仪数据；脑机数据；文本描述',
					// 	result: '中度焦虑'
					// }, {
					// 	uid: 1,
					// 	did: 1,
					// 	userName: '阳光彩虹小白马',
					// 	creatTime: '2023-03-20 10:20:55',
					// 	data: '眼动仪数据；脑机数据；文本描述',
					// 	result: '中度焦虑'
					// }
				]
			};
		},
		methods: {
			// 获取诊断记录
			async getDiagnoseRecords() {
				let uid = this.Info.uid
				let res = await getDiagnoseRecords(uid)
				this.record = res.data.data
				// if (res.data.return_code === "success") {
				// 	this.record = res.data.data
				// 	uni.showToast({
				// 		title: res.tips,
				// 		icon: 'none'
				// 	})
				// } else {
				// 	uni.showToast({
				// 		title: res.tips,
				// 		icon: 'none'
				// 	})
				// }
			}
		},
		computed: {
			...mapState('m_user', ['Info']),
		},
		onLoad() {
			this.getDiagnoseRecords()
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
</style>