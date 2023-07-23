<template>
	<view class="calendar">
		<view class="calendar-wrapper">
			<view class="calendar-month">
				{{curMonth}}月
			</view>
			<view class="calendar-daylist">
				<view v-for="(item,index) in list" @click="chooseDay(index)" class="calendar-daylist-item"
					:class="[index<todayIndex?'disable':'']">
					<view class="calendar-daylist-week">
						{{item| filterWeek}}
					</view>
					<view class="calendar-daylist-day" :class="[index==active?'active':'']">
						{{item| filterDay}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		getNextDay,
		getBeforeDay,
		getCurMonthDayNum,
		getElseMonthDayNum,
		isSameDay,
		timeFormat,
		geRecentDay
	} from "./util.js"
	export default {
		name: "niu-calendar",
		props: {
			/**
			 * 是否立即触发change
			 */
			rightnow: {
				type: Boolean,
				default: true
			},
			// 时间范围
			day: {
				type: Number,
				default: 4 * 7
			}
		},
		filters: {
			filterWeek: function(time) {
				let t = new Date(time)
				let week = t.getDay()
				let cur = ['日', '一', '二', '三', '四', '五', '六'][week]
				return cur ? cur : ''
			},
			filterYear: function(time) {
				let t = new Date(time)
				let year = t.getFullYear()()
				return year ? year : ''
			},
			filterDay: function(time) {
				let t = new Date(time)
				let day = t.getDate()
				return day ? day : ''
			},
		},
		computed: {
			curYear() {
				if (this.list[this.active]) {
					let date = new Date(this.list[this.active])
					let year = date.getFullYear()
					return year
				}
				return ''
			},
			curMonth() {
				if (this.list[this.active]) {
					let date = new Date(this.list[this.active])
					let month = date.getMonth() + 1
					return month
				}
				return ''
			}
		},
		data() {
			return {
				active: -1,
				todayIndex: -1,
				list: []
			};
		},
		watch: {
			day: {
				handler(newValue, oldValue) {
					console.time("create")
					const day = geRecentDay(this.day);
					console.timeEnd("create")
					this.active = day.index;
					this.todayIndex = day.index;
					this.list = day.list;
					if (this.rightnow) {
						this.$emit("change", this.list[this.active])
					}
				},
				immediate: true
			}
		},
		methods: {
			chooseDay(index) {
				if (this.todayIndex > index) {
					return;
				}
				if (this.active == index) {
					return;
				}
				this.active = index
				this.$emit("change", this.list[this.active])
			}
		}
	}
</script>

<style lang="scss" scoped>
	.calendar{
		
		.calendar-wrapper {
			height: 120rpx;
			overflow: hidden;
			box-shadow: 0px 5px 5px 0px rgba(87, 139, 255, 0.1);
			display: flex;
			align-items: center;
			.calendar-year{
				font-size: 40rpx;
				font-weight: 500;
				color: #232323;
			}
			.calendar-month {
				height: 80rpx;
				width: 120rpx;
				text-align: center;
				line-height: 80rpx;
				margin: 20rpx 0;
				border-right: 2px solid #578BFF;
				font-size: 40rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #232323;
			}
		
			.calendar-daylist {
				overflow: auto;
				flex: 1;
				width: 0;
				white-space: nowrap;
				height: 100%;
		
				.calendar-daylist-item {
					height: 100%;
					display: inline-flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 0 22rpx;
		
					&.disable {
						.calendar-daylist-week {
							color: #909090;
						}
		
						.calendar-daylist-day {
							color: #909090;
						}
					}
		
					.calendar-daylist-week {
						font-size: 28rpx;
						font-weight: 400;
						color: #232323;
					}
		
					.calendar-daylist-day {
						margin-top: 10rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #232323;
						width: 40rpx;
						height: 40rpx;
						text-align: center;
						padding: 2rpx;
						border-radius: 50%;
		
						&.active {
							background: #578BFF;
							color: white;
						}
					}
				}
			}
		}
	}
</style>
