<template>
	<view class="tabbar">
		<view class="item_tar" @click="switchTab(0)">
			<image class="tab_img_tar" src="../../static/index_c.png" mode="widthFix" v-if="selected==0">
			</image>
			<image class="tab_img_tar" src="../../static/index.png" mode="widthFix" v-else>
			</image>
		</view>
		<view class="center_tar" @click="switchTab(1)">
			<image class="tab_img_tar" style="width: 40rpx;height: 40rpx;" src="../../static/add.png" mode="widthFix"
				v-if="selected==1">
			</image>
			<image class="tab_img_tar" style="width: 40rpx;height: 40rpx;" src="../../static/add.png" mode="widthFix"
				v-else>
			</image>
		</view>
		<view class="item_tar" @click="switchTab(2)">
			<image class="tab_img_tar" src="../../static/mmm.png" mode="widthFix" v-if="selected==2">
			</image>
			<image class="tab_img_tar" src="../../static/my.png" mode="widthFix" v-else>
			</image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			selected: Number
		},
		data() {
			return {
				color: '#000',
				selectedColor: '#C4DE0D',
				list: [{
						pagePath: '/pages/index/index',
						iconPath: '../../static/index.png',
						selectedIconPath: '../../static/index_c.png',
						// text: '首页'
					},
					{
						pagePath: '/pages/handle/handle',
						iconPath: '../../static/add.png',
						selectedIconPath: '../../static/add.png',
						// text: '扫码'
					},
					{
						pagePath: '/pages/my/my',
						iconPath: '../../static/my.png',
						selectedIconPath: '../../static/mmm.png',
						// text: '我的'
					}
				],
				i: 0
			};
		},
		methods: {
			switchTab(i) {

				let url = this.list[i].pagePath;
				this.i = i
				console.log(this.list[i], this.selected);
				uni.switchTab({
					url
				});
			},

		}
	};
</script>

<style lang="scss">
	.tabbar {
		z-index: 99;
		width: 100%;
		height: 166rpx;
		box-sizing: border-box;
		background-color: #fff;
		// color: #6d6d6d;
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		left: 0;
		border-radius: 60rpx 60rpx 0px 0px;
		box-shadow: 0px -15px 40px 0px rgba(232, 234, 238, 0.8);

		// box-shadow: 0rpx -2rpx 0rpx 0rpx rgba(82, 100, 117, 0.08);

		.item_tar {
			width: 20%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			position: relative;
		}

		.tab_img_tar {
			width: 56rpx;
			height: 56rpx;
		}


		// .back {
		// 	display: none;
		// 	position: absolute;
		// 	width: 88rpx;
		// 	z-index: -1;
		// 	height: 88rpx;
		// }

		// .backed {
		// 	display: block;
		// }

	}

	.center_tar {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		background-color: rgba(255, 126, 131, 1);
		border-radius: 28rpx;
		width: 92rpx;
		height: 92rpx;
		box-shadow: -1px 5px 21px 0px rgba(255, 186, 188, 1);
	}
</style>