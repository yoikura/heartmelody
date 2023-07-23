import {
	request
} from '@/common/request.js'

// 注册登录接口
export const postRegister = (data) => request({
	url: '/userinfo/SysLogin',
	method: 'POST',
	data: {
		tel: data.tel,
		code: data.code
	}
})

// 发送验证码
export const sendMsg = (tel) => request({
	url: '/userinfo/sendMsg',
	method: 'POST',
	data: {
		tel
	}
})

// 个人信息接口
export const postLogin = (uid) => request({
	url: '/userinfo/SysGetPersonalInfo',
	method: 'POST',
	data: {
		uid
	}
})

// 修改个人信息
export const updateUserInfo = (data) => request({
	url: '/userinfo/SysupdateUserInfo',
	method: 'POST',
	data: {
		uid: data.uid,
		tel: data.tel,
		userName: data.userName,
		avatar: data.avatar
	}
})

// 获取诊断记录
export const getDiagnoseRecords = (uid) => request({
	url: '/userinfo/SysgetDiagnosticLogging',
	method: 'POST',
	data: {
		uid
	}
})

// 获取治疗记录
export const getTreatRecords = (uid) => request({
	url: '/userinfo/SysgetTreatmentRecords',
	method: 'POST',
	data: {
		uid
	}
})



// 获取我喜欢的场景
export const getFavorite = (uid) => request({
	url: '/userinfo/SysgetFavoriteScene',
	method: 'POST',
	data: {
		uid
	}
})

// 上传用户数据，获取诊断报告 （待修改）
export const upUserdata = (data) => request({
	url: '/emoAnalyse/EmoUploadUserInfo',
	method: 'POST',
	data: {
		uid: data.uid,
		eegFile: data.eegFile,
		eyeTrackingFile: data.eyeTrackingFile,
		emoTxt: data.emoTxt
	},
})

// 上传音乐信息，获取音乐信息标签
export const musicUpload = (data) => request({
	url: '/musicanalyse/MusicUploadMusic',
	method: 'POST',
	data: {
		uid: data.uid,
		mp3Address: data.mp3Address,
		ifHaveLyrics: data.ifHaveLyrics
	}
})
// 我喜欢的场景或取消我喜欢的场景
export const changeFavorite = (data) => request({
	url: '/createscene/ScenSetFavoriteScene',
	method: 'POST',
	data: {
		uid: data.uid,
		sid: data.sid,
		isFavorite: data.favorite
	}
})
// 上传音乐信息和场景描述，获取生成的场景
export const upCtreateScene = (data) => request({
	url: '/createscene/ScenCtreateScene',
	method: 'POST',
	data: {
		uid: data.uid,
		musicName: data.musicName,
		style: data.style,
		senceDescription: data.senceDescription
	}
})
// 获取场景类型
export const getSenceType = () => request({
	url: '/createscene/ScenGetSenceType',
	method: 'POST'
})
// 根据场景类型查询音乐场景，获取指定类型的音乐场景
export const getSenceAppoint = (data) => request({
	url: '/createscene/ScenGetSenceByType',
	method: 'POST',
	data: {
		stid: data.stid,
		uid: data.uid,
	}
})
// 获取详细的音乐场景信息
export const getSenceDetail = (data) => request({
	url: '/createscene/ScenGetSenceInfo',
	method: 'POST',
	data: {
		uid: data.uid,
		sid: data.sid
	}
})
// 加入播放列表
export const addPlayList = (data) => request({
	url: '/playList/add',
	method: 'POST',
	data: {
		uid: data.uid,
		sid: data.sid
	}
})
// 获取播放列表
export const getPlayList = (data) => request({
	url: '/playList/getPlayList',
	method: 'POST',
	data: {
		uid: data.uid
	}
})
// 从播放列表中删除
export const removePlayList = (data) => request({
	url: '/playList/remove',
	method: 'POST',
	data: {
		sid: data.sid
	}
})
// 根据用户诊断记录和治疗记录，生成个性化的推荐列表
export const getRecommend = (data) => request({
	url: '/recommend/RecommendScene',
	method: 'POST',
	data: {
		uid: data.uid
	}
})

export const getDiagnoseAnalyse = (data) => request({
	url: '/analyse/getDiagnoseAnalyse',
	method: 'POST',
	data: {
		uid: data.uid,
		startTime: data.startTime,
		endTime: data.endTime
	}
})

export const getDiseaseAnalyse = (data) => request({
	url: '/analyse/getDiseaseAnalyse',
	method: 'POST',
	data: {
		uid: data.uid,
		startTime: data.startTime,
		endTime: data.endTime
	}
})

export const getDayPlan = (data) => request({
	url: '/analyse/getDayPlan',
	method: 'POST',
	data: {
		uid: data.uid,
		beginTime: data.beginTime,
		endTime: data.endTime
	}
})

export const getDayPlanRecover = (data) => request({
	url: '/analyse/getDayPlan',
	method: 'POST',
	data: {
		uid: data.uid,
		beginTime: data.beginTime,
		endTime: data.endTime,
		recover: 1
	}
})

//关键词查询场景
export const getSencesByTitle = (data) => request({
	url: '/search/getSencesByTitle',
	method: 'POST',
	data: {
		title: data.title
	}
})
//搜索oss文件列表
export const getEmoFile = (data) => request({
	url: '/emoAnalyse/getEmoFile',
	method: 'POST',
	data: {
		uid: data.uid,
		type: data.type
	}
})

export const insertTreatRecord = (data) => request({
	url: '/createscene/insertTreatment',
	method: 'POST',
	data: {
		uid: data.uid,
		sid: data.sid,
		duration: data.duration
	}
})