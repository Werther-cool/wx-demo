//index.js
const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
};
//获取应用实例
var app = getApp()
Page({
	data: {
		motto: 'Hello World',
		time: "2017年07月22日18:38:00",
		isShow: false,
		userInfo: {},
		pages: ['view', 'scroll-view', 'swiper'],
		// iconSize: [20, 30, 40, 50, 60, 70],
		// iconColor: [
		//   'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
		// ],
		iconType: [
			'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
		],
		defaultSize: 'default',
		primarySize: 'default',
		warnSize: 'default',
		disabled: false,
		plain: false,
		loading: false,
    focus:false,
     array: ['美国', '中国', '巴西', '日本'],
      multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
date: '2016-09-01',
years: years,
   year: date.getFullYear(),
   months: months,
   month: 2,
   days: days,
   day: 2,
   year: date.getFullYear(),
   value: [9999, 1, 1],
	},

	//事件处理函数
	bindViewTap: function() {
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	changeShow: function() {
		console.log(this.data.isShow);
		this.setData({
			isShow: !this.data.isShow
		})
	},
	onLoad: function() {
		console.log('onLoad')
		var that = this
		//调用应用实例的方法获取全局数据
		app.getUserInfo(function(userInfo) {
			//更新数据
			that.setData({
				userInfo: userInfo
			})
		})
	},
	setDisabled: function(e) {
		this.setData({
			disabled: !this.data.disabled
		})
	},
	setPlain: function(e) {
		this.setData({
			plain: !this.data.plain
		})
	},
	setLoading: function(e) {
		this.setData({
			loading: !this.data.loading
		})
	},
  formSubmit: function(e) {
   console.log('form发生了submit事件，携带数据为：', e.detail.value)
 },
 bindButtonTap:function () {
   this.setData({
    focus: true
  })
},
bindPickerChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    index: e.detail.value
  })
},
bindTimeChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    time: e.detail.value
  })
},
bindDateChange: function(e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
    date: e.detail.value
  })
},

})
