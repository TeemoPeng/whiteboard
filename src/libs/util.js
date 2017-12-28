import globalurl from './url.js'
export default {
	data: {
		// AudioContext
		audio_context: null,
		// Recorder
		recorder: null,
		// 408状态
		state408: "0" // 0：未进入,1：已经存在
	},
	getTestObj : function(){
		return {
			"isTest" : false//是否测试，true表示是，false表示否
		};
	},
	getAppScene : function(){//获取应用场景
		return 'wx';//'app'表示为APP应用场景,'wx'表示为微信应用场景
	},
	// ---------------全部变量 当页面刷新后数据会初始化begin---------------
	setData: function(key, value){
		this.data[key]=value;
	},
	getData: function(key){
		return this.data[key];
	},
	// ---------------全部变量 当页面刷新后数据会初始化end---------------

	// 获取当前的时间
	// flag为true则为当前时间 反之根据count调整时间
	getDate: function(flag, count){
		function p(s) {
			return s < 10 ? '0' + s: s;
		}
		var myDate = new Date();
		var year=null;
		var month=null;
		var date=null;
		var h=null;
		var m=null;
		var s=null;
		if(flag){
			//获取当前年
			year=myDate.getFullYear();
			//获取当前月
			month=myDate.getMonth()+1;
			//获取当前日
			date=myDate.getDate();
			h=myDate.getHours();       //获取当前小时数(0-23)
			m=myDate.getMinutes();     //获取当前分钟数(0-59)
			s=myDate.getSeconds();
		}else{
			date=myDate.getDate();
			myDate.setDate(date+count);
			//获取当前年
			year=myDate.getFullYear();
			//获取当前月
			month=myDate.getMonth()+1;
			//获取当前日
			date=myDate.getDate();
		}
		var now=year+'-'+p(month)+"-"+p(date);
		return now;
	},

	// 滚动条滚动到指定位置
	scrollTo: function(value){
		var top=document.body.scrollTop;
		var timer=null;
		timer=setInterval(function(){
			if(top<value){
				top+=10;
				window.scrollTo(0, top);
				if(top>=value){
					clearInterval(timer);
					timer=null;
				}
			}else{
				top-=10;
				window.scrollTo(0, top);
				if(top<=value){
					clearInterval(timer);
					timer=null;
				}
			}
		},1);
	},
	// --------------将数据保存在DOM存储中，只有当页面被关闭数据才会清空begin--------------
	setSessionData: function(key, value){
		// 序列化
		var val='';
		if(value!=null){
			val=JSON.stringify(value);
		}
		if(key!='' && val !=''){
			window.sessionStorage.setItem(key, val);
		}
	},
	getSessionData: function(key){
		return JSON.parse(window.sessionStorage.getItem(key));
	},
	removeSessionData: function(key){
		window.sessionStorage.removeItem(key);
	},
	// --------------将数据保存在DOM存储中，只有当页面被关闭数据才会清空end--------------

	// --------------数据请求begin--------------
	// loginAccount: 老师账号
	// data: 请求数据
	// callback: 回调函数，对请求后的数据进行处理
	// vue：Vue实例对象
	request: function(req, callback, vue){
		var self=this;
		if(req.url.indexOf('app/token')==-1){
			req.data['token']=this.getSessionData('token');
		}
		$.ajax({
			url: req.url,
			data: req.data,
			dataType: req.dateType,
			type: req.type,
			async: req.async!=undefined ? req.async: true,
			cache: req.cache!=undefined ? req.cache: true,
			processData: req.processData!=undefined ? req.processData: true,
			contentType: req.contentType!=undefined ? req.contentType: "application/x-www-form-urlencoded",
			success: function(result){
				if(result.status==409 || result.statusCode==409){// token无效
					self.token(self.getSessionData('userName'));
					self.request(req, callback);
				}else if(result.status==408 || result.statusCode==408){// 被别处登陆踢下
					if(self.data.state408=="0"){
						self.data.state408="1";
						if(vue && typeof vue=='object'){
							vue.$router.push('/msg');
						}
					}
				}else{
					callback(result);
				}
			}
		})
	},
	// --------------数据请求end--------------

	// --------------token请求begin--------------
	// loginAccount: 老师账号
	token: function(loginAccount){
		var self=this;
		var timestamp = new Date().getTime();
		var sign = MD5(''+loginAccount+timestamp);
		this.request(
		{
			url: globalurl.host+globalurl.url.token,
			data: {"loginAccount": loginAccount, "timestamp": timestamp, "sign": sign},
			dataType: 'json',
			type: 'POST',
			async: false,
		}, function(data){
			if(data.status == '200'){
				self.removeSessionData('token');
				self.setSessionData('token', data.result);
				console.log(data.result);
			}else if(data.status == '667'){
				self.setSessionData('token', data.message);
				if(confirm('您的账号在其他设备上登录，是否踢除其他登录用户？')){
					self.request({
						url: globalurl.host+globalurl.url.kiot,
						data: {"loginAccount": self.getSessionData("userName")},
						dataType: 'json',
						type: 'POST',
						async: false
					}, function(data){
						//Object {message: "success", result: "SEQVyIY50gTnKRqixMMsJMg70qq7AzBEp3JDJPZYqEoHSqU5eGJbSNPgxb4oNhC7LbjRe7rM2z05JY2iY3BrsQ==", 
						// status: 200, timestamp: 1495185091150}
						self.removeSessionData('token');
						self.setSessionData('token', data.result);
					})
				}else{//回到登录页面
					var type=self.getAppScene();
					if(type=='app'){
						window.js.logout();
					}else{
						WeixinJSBridge.call('closeWindow');
					}
				}
			}else{
				self.removeSessionData('token');
				self.setSessionData('token', data.result);
			}
		})
	}
	// --------------token请求end--------------
}