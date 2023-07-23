<template>
	<scroll-view class="analyse">
		<uni-popup ref="popup" background-color="#fff">
			<view class="popup-content">
				<view class="date-choose">
					<view class="datetime-picker">
						<uni-datetime-picker v-model="daterange" :border = 'false' :clear-icon = 'false' :value="daterange" type="daterange" @maskClick="maskClick"/>
					</view>
					<view class="btn" hover-class="btnc" @click="analyse">
						生成
					</view>
				</view>
				<view class="upbox">
					<view class="chart-title" style="margin-left: 270rpx;">诊断数据分析</view>
					<view class="chart"><qiun-data-charts 
						  type="line"
						  :opts="lineChartOpts"
						  :chartData="lineChartData"
						/></view>
					<view class="chart-title" style="margin-left: 300rpx;">病情评估</view>
					<view class="chart"><qiun-data-charts 
						  type="ring"
						  :opts="ringChartOpts"
						  :chartData="ringChartData"
						/></view>
				</view>
			</view>
		</uni-popup>
		<view class="calendar-box">
			<lunc-calendar class="calendar" :showShrink="false" :showChangeBtn="false" shrinkState="week" @dayChange="dayChange"></lunc-calendar>
		</view>
		<view class="upbox" style="height: 943rpx;" v-if="JSON.stringify(recommendType) != '{}'&&JSON.stringify(recommendSence) != '{}'">
			<view class="chart-title" style="margin-left: 300rpx;">治疗计划</view>
			<view class="body">
				<view class="recommend">
					<uni-icons type="arrow-right" size="18" style="margin-right: 20rpx;"></uni-icons>
					<view class="recommend-title">推荐场景类型</view>
				</view>
				<view class="card">
					<view class="card_top">
						<view class="title">
							{{recommendType.typeName}}
						</view>
						<view class="description">
							建议治疗时间：{{recommendType.time}}
						</view>
					</view>
					<view class="card_img" @click="toSearch(recommendType.typeName)">
						<image :src="recommendType.avatar" mode=""></image>
					</view>
				</view>
				<view class="recommend" style="border-bottom: 5rpx solid seagreen;">
					<uni-icons type="eye-filled" size="18" style="margin-right: 20rpx;"></uni-icons>
					<view class="recommend-title">推荐场景</view>
				</view>
				<view class="card">
					<view class="card_top">
						<view class="title" style="width: 60%;">
							{{recommendSence.sname}}
						</view>
						<view class="description" style="margin-left: auto;width: 30%;">
							时长：{{Math.floor(recommendSence.duration/60)}}min&nbsp; {{recommendSence.duration%60}}s
						</view>
					</view>
					<view class="card_img" @click="toScene(recommendSence.sid)">
						<image :src="recommendSence.cover" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="list" @click="toPlan()">
			<view class="list_name">
				生成您的专属治疗计划
			</view>
			<image src="../../static/next.png" mode="" class="list_right"></image>
		</view>
	</scroll-view>
</template>

<script>
	import {lineChartOpts,lineChartData,ringChartOpts,ringChartData} from './modal/echarts.js'
	import getDateTime from '@/common/utils/getdateTime.js';
	import {getDiagnoseAnalyse,getDiseaseAnalyse,getDayPlan,getDayPlanRecover} from '@/common/api.js'
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default{
		data(){
			return{
				daterange: [getDateTime.frontWeek('y-m-d'),getDateTime.nowDate('y-m-d')],
				chartData: {},
				lineChartOpts: {},
				lineChartData:{},
				ringChartOpts: {},
				ringChartData:{},
				uid: null,
				recommendTypeList: [],
				recommendSenceList: [],
				recommendType:{
					// typeName:'',
					// time:'',
					// avatar:''
				},
				recommendSence:{
					// sname:'',
					// duration:'',
					// cover:'',
					// sid:null
				},
				dayInfo:{}
			}
		},
		watch: {
			daterange(){
				this.getLineChartData()
				this.getRingChartData()
			}
		},
		async onLoad() {
			this.uid = this.Info.uid
			this.getLineChartData();
			this.lineChartOpts = lineChartOpts();
			this.getRingChartData();
			this.ringChartOpts = ringChartOpts();
			let dayInfo = {
				date:getDateTime.nowDate('y-m-d')
			}
			this.dayChange(dayInfo)
			let param = {
				uid: this.uid,
				beginTime: this.daterange[0],
				endTime: this.daterange[1]
			}
			let res = await getDayPlan(param)
			this.recommendTypeList = res.data.typeList
			this.recommendSenceList = res.data.sceneList
			for(let i=0;i<this.recommendTypeList.length;i++){
				this.recommendTypeList[i].time = res.data.time[i]
			}
			this.recommendSence = this.recommendSenceList[this.dayInfo.date.split('-')[2]%7]
			this.recommendType = this.recommendTypeList[this.dayInfo.date.split('-')[2]%7]
		},
		onload(){
			
		},
		computed: {
			...mapState('m_user', ['Info'])
		},
		methods: {
			toPlan(){
				this.$refs.popup.open('bottom')
			},
			async getLineChartData() {
				let param = {
					uid: this.uid,
					startTime: this.daterange[0],
					endTime: this.daterange[1]
				}
				let res = await getDiagnoseAnalyse(param)
				setTimeout(() => {
					// let res = {
					// 	data: [0,2,3,1,1,3,1],
					// 	date: ['2023/5/1','2023/5/2','2023/5/3','2023/5/4','2023/5/5','2023/5/6','2023/5/7']
					// }
					let chartData = lineChartData(res.data)
					this.lineChartData = JSON.parse(JSON.stringify(chartData));
				}, 500);
			},
			async getRingChartData(){
				let param = {
					uid: this.uid,
					startTime: this.daterange[0],
					endTime: this.daterange[1]
				}
				let res = await getDiseaseAnalyse(param)
				let obj = {
					data:res.data
				}
				let obj1 = {
					data:[]
				}
				obj1.data.push(obj)
				let chartData = ringChartData(obj1)
				let a = 0
				let b = 0
				for(let i=0;i<res.data.length;i++){
					if(res.data[i].name === '正常')
						a+=res.data[i].value*1.0
					else if(res.data[i].name === '轻度焦虑')
						a+=res.data[i].value*0.8
					else if(res.data[i].name === '中度焦虑')
						a+=res.data[i].value*0.5
					else if(res.data[i].name === '重度焦虑')
						a+=res.data[i].value*0.3
					b+=res.data[i].value
				}
				if(b !== 0){
					this.ringChartOpts.subtitle.name = Math.round(100*a/b).toString()
				}else{
					this.ringChartOpts.subtitle.name = ''
				}
				this.ringChartData = JSON.parse(JSON.stringify(chartData));
				// setTimeout(() => {
				// 	// let res = {
				// 	// 	data: [
				// 	// 	  {
				// 	// 		data: [{"name":"正常","value":50,"labelShow":false},{"name":"轻度焦虑","value":30,"labelShow":false},{"name":"中度焦虑","value":20,"labelShow":false},{"name":"重度焦虑","value":18,"labelShow":false}]
				// 	// 	  }
				// 	// 	]
				// 	// };
					
				// }, 500);
			},
			async dayChange(dayInfo){
				console.log(dayInfo)
				this.dayInfo = dayInfo
				let today = Date.parse(getDateTime.nowDate('y-m-d'))
				// console.log("Date.parse(dayInfo.date):"+Date.parse(dayInfo.date))
				// console.log("today.getTime():"+today.getTime())
				// console.log("new Date(today+7*24*3600*1000):"+new Date(today.getTime()+7*24*3600*1000))
				if(Date.parse(dayInfo.date)>=today&&Date.parse(dayInfo.date)<=new Date(today+7*24*3600*1000).getTime()){
					if(this.recommendSenceList.length>0&&this.recommendTypeList.length>0){
						console.log('here')
						this.recommendSence = this.recommendSenceList[dayInfo.day%7]
						this.recommendType = this.recommendTypeList[dayInfo.day%7]
					}
				}else{
					this.recommendSence = {}
					this.recommendType = {}
				}
			},
			async analyse(){
				let param = {}
				let res = {}
				if(this.recommendTypeList.length>0&&this.recommendSenceList.length>0){
					param = {
						uid: this.uid,
						beginTime: this.daterange[0],
						endTime: this.daterange[1],
					}
					res = await getDayPlanRecover(param)
				}else{
					param = {
						uid: this.uid,
						beginTime: this.daterange[0],
						endTime: this.daterange[1]
					}
					res = await getDayPlan(param)
				}
				this.recommendTypeList = res.data.typeList
				this.recommendSenceList = res.data.sceneList
				for(let i=0;i<this.recommendTypeList.length;i++){
					this.recommendTypeList[i].time = res.data.time[i]
				}
				this.recommendSence = this.recommendSenceList[this.dayInfo.date.split('-')[2]%7]
				this.recommendType = this.recommendTypeList[this.dayInfo.date.split('-')[2]%7]
				this.$refs.popup.close()
			},
			toSearch(title){
				uni.navigateTo({
					url: `/pages/search/search?title=${title}`
				})
			},
			toScene(sid){
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${sid}`
				})
			}
		}
	}
</script>

<style>
	.upbox {
		margin: 10rpx 0 50rpx 0;
		padding: 10rpx 10rpx 10rpx 10rpx;
		width: 100%;
		height: 1000rpx;
		opacity: 1;
		border-radius: 40rpx;
		background: rgba(248, 247, 252, 1);
		display: block;
		/* justify-content: center;
		align-items: center; */
	}
	.chart{
		width: 700rpx;
		height: 400rpx;
	}
	.chart-title{
		/* margin-left: 280rpx; */
		margin-top: 20rpx;
	}
	.btn {
		width: 15%;
		height: 70rpx;
		opacity: 1;
		border-radius: 16rpx;
		background: rgba(0, 183, 214, 1);
		/** 文本1 */
		font-size: 32rpx;
		font-weight: 400;
		letter-spacing: 0px;
		line-height: 0px;
		color: rgba(255, 255, 255, 1);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btnc {
		z-index: 1;
		transition: 0.1s;
		transform: scale(0.97);
		background-color: rgba(0, 172, 195, 1.0);
	}
	.datetime-picker{
		width: 75%;
		margin-right: 20rpx;
	}
	.date-choose{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 30rpx;
	}
	.card {
		width: 100%;
		height: 354rpx;
		opacity: 1;
		border-radius: 40rpx;
		background-color: white;
		display: flex;
		flex-direction: column;
		margin-bottom: 20rpx;
		position: relative;
		align-items: center;
	}
	
	.card_top {
		display: flex;
		align-items: center;
		width: 100%;
	}
	.card_img {
		margin-top: 20rpx;
		width: 600rpx;
		height: 220rpx;
	}
	
	.card_img image {
		width: 100%;
		height: 100%;
		border-radius: 28rpx;
	}
	.body {
		margin-top: 20rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-bottom: 194rpx;
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
	.title {
		width: 35%;
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
	.recommend{
		margin: 10rpx 20rpx;
		width: 60%;
		border-bottom: 5rpx solid #0081EF;
		display: flex;
		align-items: center;
	}
	.recommend-tile{
		display: flex;
	}
	.description{
		width: 50%;
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
	.popup-content {
		width: 100%;
		height: 1100rpx;
		position: relative;
	}
	.list {
		margin-top: 30rpx;
		margin-left: 5%;
		margin-bottom: 26rpx;
		width: 90%;
		height: 120rpx;
		opacity: 1;
		border-radius: 15rpx;
		background: rgba(157, 218, 255, 1.0);
		box-shadow: 0px 0px 49px 0px rgba(233, 232, 239, 1);
		animation-name: an1;
		animation-duration: 1s;
		position: relative;
		display: flex;
		align-items: center;
	}
	.list_name {
		width: 100%;
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