import Vue from 'vue'
import $ from 'jquery'
import Promise from 'promise'
import Utils from '@/libs/utils'
import Url from '@/libs/url'
import Student from '@/libs/student'
import event from '@/libs/event'

window.login = function(result){
    const userName = JSON.parse(window.localStorage.getItem('userInfo')).username;
    const PWD = JSON.parse(window.localStorage.getItem('userInfo')).password;
    window.localStorage.setItem('userId',result.data.userId);
    window.localStorage.setItem('accessToken',result.data.accessToken);
    const data = {
        username:userName,
        userId:window.localStorage.getItem('userId'),
        password:PWD,
        accessToken:window.localStorage.getItem('accessToken')
    }
    wx.login(JSON.stringify(data));

    event.$emitOnce('login');
};
Vue.prototype.$ajax = function(options){
    options.vue.$vux.loading.show()
    const iswx = Utils.isWeixin();
    const isTest = Utils.isTest();

    if(iswx || isTest){
        //微信端\浏览器端用$.ajax
        return new Promise((resolve,reject)=>{
            // alert(Utils.getItem('accessToken'))
            $.ajax({
                url:options.url,
                type:options.method,
                data:options.params,
                dataType:'json',
                reload:options.reload,
                contentType: "application/json",
                connection:'keep-alive',
                headers:{
                    'X-Auth-Token' : Utils.getItem('accessToken')
                },
                success(data){
                    options.vue.$vux.loading.hide();
                    resolve(data)
                },
                error(status){
                   options.vue.$vux.loading.hide();

                    if(status.responseJSON.statusCode =='403'){
                        //403后重新登录
                        var user = JSON.parse(window.localStorage.getItem('userInfo'))

                        Student.login(options.vue,user).then(res=>{
                            if(res.statusCode == '200'){
                                Utils.setItem('accessToken',data.data.accessToken);
                            }
                        }).catch(()=>{
                            $.ajax({
                                url:options.url,
                                type:options.method,
                                data:options.params,
                                dataType:'json',
                                reload:options.reload,
                                contentType: "application/json",
                                connection:'keep-alive',
                                headers:{
                                    'X-Auth-Token' : Utils.getItem('accessToken')
                                },
                                success(data){
                                    options.vue.$vux.loading.hide();
                                    resolve(data)
                                }
                            });
                            reject(data)
                        })
                    }else{
                        reject(status)
                    }
                }

            })
        })
    }else{
        //app 中用wx.httpRequest (原生提供)
        return ((options)=>{
            return new Promise((resolve,reject)=>{
                wx.httpRequest(options.url,JSON.stringify(options.params),options.method,options.reload,options.name,options.related,options.chsName);
                // options.vue.$vux.loading.hide();
                const name = options.name;
                //提供全局方法名给原生调用：
                window[name] = function(result){
                    if(result.statusCode == '403'){
                        event.$once('login',  ((options)=>{
                            return function(){
                                //重新获取数据：
                                wx.httpRequest(options.url,JSON.stringify(options.params),options.method,options.reload,options.name,options.related,options.chsName);
                                // options.vue.$vux.loading.hide();
                                const newName = options.name;
                                window[newName] = function(result){
                                    resolve(result)
                                }
                            }
                        })(options));
                        //403后重新登录
                        wx.httpRequest(Url.host.mainHost + '/student/login',window.localStorage.getItem('userInfo'),'post',options.reload,'login','','登录');
                        options.vue.$vux.loading.hide();

                    }else if(result.statusCode == 200){
                        resolve(result)
                        options.vue.$vux.loading.hide();
                    } else{
                        reject({responseJSON: result})
                        options.vue.$vux.loading.hide();
                    }
                }
            });
        })
        (options)
    }

}
