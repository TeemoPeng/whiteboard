import Vue from 'vue'
import Utils from '@/libs/utils'
import Promise from 'promise'
import Url from '@/libs/url'
const NativeSDK = {
  wxShare() {
    wx.wxShare('');
  },

  /*
      http请求
      reload:  //1取后台数据 0 取缓存数据

  */
  // httpRequest(options){
  //     return new Promise((resolve,reject)=>{
  //         wx.httpRequest(Url.host.nativeHost + options.url,JSON.stringify(options.params),options.method,options.reload);
  //         window.httpRequestCallback = function(url,result){
  //             const res = {
  //                 url:url,
  //                 result:result
  //             }
  //             resolve(res)
  //         }
  //     })
  // },


  /*拍照，返回本地图片路径*/
  snapshot() {
    return new Promise((resolve, reject) => {
      wx.snapshot();
      window.snapshotCallback = function(localPath) {
        resolve(localPath)
      }
    })
  },

  /*选取相片*/
  selectPhoto() {
    return new Promise((resolve, reject) => {
      wx.selectPhoto();
      window.selectPhotoCallback = function(path) {
        resolve(path);
      }
    })
  },

  /*
   * 录音
   * path 本地路径
   * duration 录音时长
   */
  record() {
    return new Promise((resolve, reject) => {
      wx.record();
      window.recordCallback = function(path, duration) {
        const obj = {
          path: path,
          duration: duration
        }
        resolve(obj);
      }
    })
  },

  /*获取app版本号*/
  getVersionCode() {
    return new Promise((resolve, reject) => {
      resolve(wx.getVersionCode())
    })
  },
  /*获取版本类型 测试版or正式版 1为测试版 0为正式版*/
  getVersionType(){
    return new Promise((resolve, reject)=>{
      resolve(wx.isTest());
    })
  },
  /*检查最新版本*/
  checkNewVersion(){
      wx.checkNewVersion();
  },

  /*  设置横屏或是竖屏
   * 0 竖屏
   * 1 横屏
   */
  setRequestedOrientation(orient) {
    return wx.setRequestedOrientation(orient)
  },

  /*获取缓存大小*/
  getCacheSize() {
    return wx.getCacheSize();
  },

  /*清除缓存*/
  clearCache() {
    wx.clearCache()
  },

  /*图片预览*/
  showPhoto(options) {
    wx.showPhoto(JSON.stringify(options.photos), options.index);
  },

  /*上传文件*/
  upload(path) {
    const self = this;
    return new Promise((resolve, reject) => {
      wx.fileUpload(path);
      window.fileUploadCallback = function(res) {
        resolve(res)
      }
    });
  },

  /*截屏*/
  captureScreen(){
      const self = this;
      return new Promise((resolve,reject)=>{
          wx.captureScreen();
          window.captureScreenCallback = function(res){
              resolve(res)
          }
      });
  },

  logout(){
    wx.logout();
  }
}

Vue.prototype.$native = NativeSDK;
