export const baseURL = 'http://118.195.194.233:9999'
// export const baseURL = 'http://localhost:8888'

export const request = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + options.url, //接口地址：前缀+方法中传入的地址
			method: options.method || 'POST', //请求方法：传入的方法或者默认是“GET”
			data: options.data || {}, //传递参数：传入的参数或者默认传递空集合
			header: {
				'token': uni.getStorageSync("token") || "" //自定义请求头信息
			},
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				console.log(err)
				reject(err)
			}
		})
	})
}
