import Vue from 'vue'
const Utils = {
    /*判断是否微信*/
    isWeixin(){
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.indexOf('micromessenger') != -1){
            return true;
        }else{
            return false;
        }
    },
    isTest(){
        // return false;    //false app
        return true;
    },

    // 获取当前的时间
    // flag为true则为当前时间 反之根据count调整时间
     getDate: function(count){
        function p(s) {
            return s < 10 ? '0' + s: s;
        }
        var myDate = new Date(count);
        var year=null;
        var month=null;
        var date=null;
        var h=null;
        var m=null;
        var s=null;
        // if(flag){
        //     //获取当前年
        //     year=myDate.getFullYear();
        //     //获取当前月
        //     month=myDate.getMonth()+1;
        //     //获取当前日
        //     date=myDate.getDate();
        //     h=myDate.getHours();       //获取当前小时数(0-23)
        //     m=myDate.getMinutes();     //获取当前分钟数(0-59)
        //     s=myDate.getSeconds();
        // }else{
            // date=myDate.getDate();
            // myDate.setDate(date+count);
            //获取当前年
            year=myDate.getFullYear();
            //获取当前月
            month=myDate.getMonth() + 1;
            //获取当前日
            date=myDate.getDate();
            //获取小时
            h=myDate.getHours();
            m=myDate.getMinutes();
            s=myDate.getSeconds();



        // }
        var now=year+'-'+p(month)+"-"+p(date)+' '+p(h)+':'+p(m)+':'+p(s);
        return now;
    },
    getData: function(count){
        function p(s) {
            return s < 10 ? '0' + s: s;
        }
        var myDate = new Date(count);
        var year=null;
        var month=null;
        var date=null;
        var h=null;
        var m=null;
        var s=null;
        year=myDate.getFullYear();
        month=myDate.getMonth()+1;
        date=myDate.getDate();
        var now=year+'-'+p(month)+"-"+p(date);
        return now;
    },

    /*storage setItem*/
    setItem(name,value){
        window.localStorage.setItem(name,value)
    },


    /*storage getItem*/
    getItem(name){
        return window.localStorage.getItem(name)
    },

    /*storage cleaer*/
    clearStorage(){
        window.localStorage.clear();
    },
    isArray(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    }
}

Vue.prototype.$utils = Utils;
export default Utils;
