<script>
	export default {
		onLaunch: function() {
			console.log('App Launch,1111')
			uni.hideTabBar()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	page {
		background-color: rgba(235, 236, 237, 1);
	}
</style>