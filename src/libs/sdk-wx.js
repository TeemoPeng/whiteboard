import Vue from 'vue'
import Utils from '@/libs/utils'
import Url from '@/libs/url'
import wx from 'weixin-js-sdk'
import $ from 'jquery'
import Promise from 'promise'

/*
    * 参考文档：https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115
*/

const wxSDK = {
    appId:'',
    timestamp:'',
    nonceStr:'',
    signature:'',

    /*初始化*/
    init(){   
        wx.config({
            debug: false,
            appId: this.appId,
            timestamp: this.timestamp,
            nonceStr: this.nonceStr,
            signature: this.signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'onVoicePlayEnd',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ]
        });        
    },

    /**检查是否支持weix jdk*/
    checkJsApi(){
        return new Promise((resolve,reject)=>{
            wx.checkJsApi({
                jsApiList: [
                    'getNetworkType',
                    'previewImage',
                    'onMenuShareTimeline'
                ],
                success: function (res) {
                    resolve(res);
                },
                error:function(res){
                    reject(res)
                }
            });
        });
            
    },

    /*获取网络类型*/
    getNetworkType(){
        let result = 'sb';
        return new Promise((resolve,reject)=>{
            wx.getNetworkType({
                success: function (res) {
                    resolve(res.networkType)
                },
                fail: function (res) {
                   reject(JSON.stringify(res))
                }
            });
        });            
    },

    /*====================================  分享接口  有bug ====================================================*/
    /* 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口    */
    onMenuShareTimeline(shareData){
        wx.ready(function(){
            wx.onMenuShareTimeline({
                title: shareData.title,
                link: shareData.link,
                imgUrl: shareData.imgUrl,
                success: function (res) {
                    alert('success')
                },
                cancel: function (res) {
                    alert('cancel')
                }
            });
        });            
    },

    /*发送给朋友*/
    onMenuShareAppMessage(shareData){
        wx.onMenuShareAppMessage({
            title: shareData.title, // 分享标题
            desc: shareData.desc, // 分享描述
            link: shareData.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: shareData.imgUrl, // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function (res) { 
                
                // 用户确认分享后执行的回调函数
            },
            cancel: function () { 
                
                // 用户取消分享后执行的回调函数
            }
        });
    },


    /*====================================  图像接口  ====================================================*/
    /*选择图片*/
    chooseImage(options){
        return new Promise((resolve,reject)=>{
            wx.chooseImage({
                count: options.count, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片                
                    resolve(res);
                }
            });
        });
            
    },

    /*预览图片*/
    previewImage(options){
        return new Promise((resolve,reject)=>{
            wx.previewImage({
                current: options.current, // 当前显示图片的http链接
                urls: options.urls // 需要预览的图片http链接列表
            });
            resolve(options)
        });            
    },

    /*上传图片*/
    uploadImage(options){
        return new Promise((resolve,reject)=>{
            wx.uploadImage({
                localId: options.localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: options.isShowProgressTips, // 默认为1，显示进度提示
                success: function (res) {
                    // var serverId = res.serverId; // 返回图片的服务器端ID
                    resolve(res)
                },
                error:function(res){
                    reject(res)
                }
            });
        });            
    },

    /*下载图片*/
    downloadImage(options){
        return new Promise((resolve,reject)=>{
            wx.downloadImage({
                serverId: options.serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    // var localId = res.localId; // 返回图片下载后的本地ID
                    resolve(res)
                },
                error:function(res){
                    reject(res)
                }
            });
        });
    },

    /*=============================================     音频接口    ===============================*/

    /*开始录音*/
    startRecord(){
        return new Promise((resolve,reject)=>{
            wx.startRecord();
        })
    },

    /*停止录音*/
    stopRecord(){
        return new Promise((resolve,reject)=>{
            wx.stopRecord({
                success: function (res) {
                    resolve(res);
                    var localId = res.localId;
                },
                error:function(res){
                    reject(res);
                }
            });
        })
    },

    /*监听录音自动停止*/
    onVoiceRecordEnd(){
        return new Promise((resolve,reject)=>{
            wx.onVoiceRecordEnd({
                // 录音时间超过一分钟没有停止的时候会执行 complete 回调
                complete: function (res) {
                    resolve(res)
                    var localId = res.localId; 
                }
            });
        });
    },

    /*播放语音接口*/
    playVoice(localId){
        return new Promise((resolve,reject)=>{
            wx.playVoice({
                localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
            });            
        })
    },

    /*暂停播放录音*/
    pauseVoice(localId){
        return new Promise((resolve,reject)=>{
            wx.pauseVoice({
                localId: localId // 需要暂停的音频的本地ID，由stopRecord接口获得
            });
        })
    },

    /*停止播放录音*/
    stopVoice(localId){
        return new Promise((resolve,reject)=>{
            wx.stopVoice({
                localId: localId // 需要停止的音频的本地ID，由stopRecord接口获得
            });
        });
    },

    /*监听语音播放完毕接口*/
    onVoicePlayEnd(){
        return new Promise((resolve,reject)=>{
            wx.onVoicePlayEnd({
                success: function (res) {
                    var localId = res.localId; // 返回音频的本地ID
                    resolve(res)
                },
                error:function(res){
                    reject(res);
                }
            });
        });
    },

    /*上传语音接口*/
    uploadVoice(localId){
        return new Promise((resolve,reject)=>{
            wx.uploadVoice({
                localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    var serverId = res.serverId; // 返回音频的服务器端ID
                    resolve(res)
                },
                error:function(res){
                    reject(res)
                }
            });
        });
    },

    /*下载语音接口*/
    downloadVoice(serverId){
        return new Promise((resolve,reject)=>{
            wx.downloadVoice({
                serverId: serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    var localId = res.localId; // 返回音频的本地ID
                    resolve(res)
                },
                error:function(res){
                    reject(res)
                }
            });
        })
    },

    /*==================================    地理位置    ================================*/

    /*获取地理位置接口*/
    getLocation(){
        return new Promise((resolve,reject)=>{
            wx.getLocation({
                type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: function (res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    var speed = res.speed; // 速度，以米/每秒计
                    var accuracy = res.accuracy; // 位置精度
                    resolve(res)
                }
            });
        })
    },

    /*打开地理位置*/    
    openLocation(options){
        return new Promise((resolve,reject)=>{
            wx.openLocation({
                latitude: options.latitude, // 纬度，浮点数，范围为90 ~ -90
                longitude: options.longitude, // 经度，浮点数，范围为180 ~ -180。
                name: options.name, // 位置名
                address: options.address, // 地址详情说明
                scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
                infoUrl: options.infoUrl, // 在查看位置界面底部显示的超链接,可点击跳转,
                success:function(res){
                    // alert(JSON.stringify(res))                    
                }
            });
        })
    },


    /*=====================================     微信扫一扫    ===========================*/
    scanQRCode(needResult){
        return new Promise((resolve,reject)=>{
            wx.scanQRCode({
                needResult: needResult, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                success: function (res) {
                    // var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                    resolve(res)
                }
            })                
        })
    },

    /*=====================================     微信支付    ===========================*/
    chooseWXPay(){
        return new Promise((resolve,reject)=>{

            //请求后台，获取timestamp,nonceStr,signType,paySign
            let payData = {};
            $.ajax({
                url:'',
                data:{

                },
                type:'get',
                dataType:'json',
                async:false,
                contentType:'application/x-www-form-urlencoded',
                success:function(res){
                    const obj = {
                        timestamp:'',
                        nonceStr:'',
                        package:'',
                        signType:'',
                        paySign:''
                    };
                    payData = obj;
                }
            });

            wx.chooseWXPay({
                timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: '', // 支付签名随机串，不长于 32 位
                package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: '', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: '', // 支付签名
                success: function (res) {
                    // 支付成功后的回调函数
                    resolve(res);
                },
                error:function(res){
                    reject(res);
                }
            });                
        });            
    }

}

/*
    获取appInfo
*/
const iswx = Utils.isWeixin();

if(iswx){
    $.ajax({
        url:'http://m.kiway.cn/yqyd/wx/getJSSDKConfig',
        data:{
            paramUrl:window.location.href.split('#/')[0]//'http://m.kiway.cn/yqyd'
        },
        type:'get',
        dataType:'json',
        async:false,
        contentType: "application/x-www-form-urlencoded",
        success:function(res){
            if(res.StatusCode == '200'){
               wxSDK.appId = res.data.appID;
               wxSDK.timestamp = res.data.timestamp;
               wxSDK.nonceStr = res.data.nonceStr;
               wxSDK.signature = res.data.signature;
            }
        }
    })
}

/*
    初始化weixin jdk
*/
wxSDK.init();
    
Vue.prototype.$wx = wxSDK;
