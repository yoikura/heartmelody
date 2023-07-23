export default {
	// 为当前模块开启命名空间
	namespaced: true,

	// 模块的 state 数据
	state: () => ({
		Info: null,
	}),

	// 模块的 mutations 方法
	mutations: {
		addUser(state, e) {
			state.Info = e
		}
	},

	// 模块的 getters 属性
	getters: {},
}