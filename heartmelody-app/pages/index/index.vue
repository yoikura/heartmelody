<template>
	<view class="index">
		<view class="ipt_box" @click="toSearch">
			<!-- <input type="text"
				style="margin-left:28rpx ;width: 80%;font-size: 28rpx;font-weight: 400;letter-spacing: 0px;line-height: 0px;color: rgba(0, 0, 0, 1);"> -->
			<view class="search_box">
				<image src="../../static/search.png" mode=""></image>
			</view>
		</view>
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item ,index) in plan" :key="index">
					<!-- <view class="swiper-item">
						{{item.cover}}
					</view> -->
					<view class="plan_img" @click="planToScene(item.sid)">
						<image :src="item.cover" mode=""></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="scroll">
			<scroll-view scroll-x="true" enable-flex="true" class="scrollx">
				<view class="scroll_content">
					<view :class="['item', active==i?'active':'']" v-for="(item ,i) in list" :key="i"
						@click="choose(i)">
						<image :src="item.avatar" mode=""></image>
						<view class="ittext" :style="{width:item.typeName.length*34 +'rpx'}">{{item.typeName}}</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="text_box" v-if="list[active]">
			{{list[active].remark}}
		</view>
		<view class="body">
			<view class="card" v-for="(item, i) in card" :key="i" @click="toScene(i)">
				<view class="oval" @click.stop="favorite(i)">
					<image src="../../static/heart.png" class="heart" mode="" v-if="item.isFavorite"></image>
					<image src="../../static/whiteheart.png" class="heart" mode="" v-else></image>
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
		<tb :selected="0"></tb>
	</view>
</template>

<script>
	import tb from '@/components/tb/tb.vue';
	import getDateTime from '@/common/utils/getdateTime.js';
	import {
		postLogin,
		changeFavorite,
		getSenceType,
		getSenceAppoint,
		getRecommend,
		getDayPlan
	} from "../../common/api.js"
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		components: {
			tb
		},
		data() {
			return {
				list:[],
				card: [
				],
				active: 0,
				uid: null,
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				plan: []
			}
		},
		async onShow() {
			this.plan = []
			this.uid = this.Info.uid
			uni.hideTabBar()
				//this.getUserinfo()
			this.getTypeList()
			this.getSenceList(this.active)
			let param = {
				uid: this.uid,
				beginTime: getDateTime.frontWeek('y-m-d'),
				endTime: getDateTime.nowDate('y-m-d'),
			}
			let res = await getDayPlan(param)
			let list = res.data.sceneList
			let index = new Date().getDay()%7
			for(let i = index;i<list.length;i++){
				this.plan.push(list[i])
			}
			for(let i = 0;i<index;i++){
				this.plan.push(list[i])
			}
			// this.plan = res.data.sceneList
		},
		methods: {
			...mapMutations('m_user', ['addUser']),
			choose(i) {
				this.active = i
				this.getSenceList(i)
			},
			toScene(i) {
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${this.card[i].sid}`
				})
			},
			toSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			//获得用户信息
			// async getUserinfo() {
			// 	// let res = await postLogin()
			// 	let res = {
			// 		uid: 1,
			// 		userName: '阳光彩虹小白马',
			// 		tel: '13275377979',
			// 		avatar: 'https://img.js.design/assets/img/617ba80c805b9b8390de36fb.png'
			// 	}
			// 	this.addUser(res)
			// },
			//收藏或取消
			async favorite(i) {
				this.card[i].isFavorite = !this.card[i].isFavorite
				let data = {
					uid: this.uid,
					sid: this.card[i].sid,
					favorite: this.card[i].isFavorite
				}
				// 收藏或取消的接口
				let res = await changeFavorite(data)
				uni.showToast({
					title: this.card[i].isFavorite ? '收藏成功' : '取消收藏',
					icon: 'none'
				})
				this.getSenceList(this.active)
			},
			async getTypeList(){
				let res = await getSenceType()
				this.list = res.data.senceType
			},
			async getSenceList(type){
				let data = {
						stid: type+1,
						uid: this.uid,
					}
				let res = []
				uni.showLoading({
					title: '加载中'
				});
				if(type === 0){
					res = await getRecommend(data)
					this.card = res.data.data
				}else{
					res = await getSenceAppoint(data)
					this.card = res.data.typeSence
				}
				uni.hideLoading();
			},
			planToScene(sid){
				uni.navigateTo({
					url: `/subpkg/scene/scene?id=${sid}`
				})
			}
		},
		computed: {
			...mapState('m_user', ['Info'])
		},
		onLaunch() {
			uni.hideTabBar()
		}
	}
</script>

<style>
	page {
		width: 100%;
		background-color: rgba(235, 236, 237, 1);
	}

	.active {
		background-color: rgba(0, 183, 214, 1) !important;
	}

	.index {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.ipt_box {
		position: relative;
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

	.text_box {
		/* left: 32px; */
		margin-top: 38rpx;
		width: 626rpx;
		height: 117rpx;
		opacity: 1;
		/** 文本1 */
		font-size: 26rpx;
		font-weight: 300;
		/* 		letter-spacing: 0px;
		line-height: 0px; */
		color: rgba(0, 0, 0, 1);
		text-align: left;
		vertical-align: top;
	}

	.scroll {
		margin-top: 22rpx;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.scrollx {
		width: 656rpx;
		/* height: 100px; */
		display: flex;
	}

	.scroll_content {
		padding: 12rpx 0;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
	}

	.item {
		/* width: 180rpx; */
		height: 100rpx;
		opacity: 1;
		border-radius: 16rpx;
		background: rgba(255, 255, 255, 1.0);
		box-shadow: 0px 0px 30px 0px rgba(239, 240, 244, 1);
		margin-right: 58rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.6s;
		padding: 0 10rpx;
	}


	.item image {
		width: 78rpx;
		height: 78rpx;
		opacity: 1;
		border-radius: 28rpx;
	}

	.ittext {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 12rpx;
		width: 54rpx;
		height: 42rpx;
		opacity: 1;
		/** 文本1 */
		font-size: 28rpx;
		font-weight: 400;
		/* letter-spacing: 0px; */
		/* line-height: 0px; */
		color: rgba(0, 0, 0, 1);

	}

	.body {
		margin-top: 36rpx;
		width: 702rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-bottom: 194rpx;
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

	.heart {
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
	
	.plan_img {
		margin-top: 20rpx;
		margin-left: 5%;
		width: 90%;
		height: 92%;
	}
	
	.plan_img image {
		width: 100%;
		height: 100%;
		border-radius: 28rpx;
	}
	
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
</style>