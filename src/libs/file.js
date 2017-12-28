import Vue from 'vue'
import Utils from '@/libs/utils'
import Url from '@/libs/url'
import Promise from 'promise'
import {Loading,LoadingPlugin} from 'vux'

const File = {
    hostIp:Url.host.mainHost,      //  host 
    fileUrl:'/common/file',       //  上传文件后台接口 

    /*上传文件*/
    upload(options){
        const self = this;
        const iswx = Utils.isWeixin();
        const isTest = Utils.isTest(); 

        options.vue.$vux.loading.show({
            text:'正在上传...'
        })          
        return new Promise((resolve,reject)=>{
            var formData = new FormData();
            formData.append('file', document.getElementById(options.fileId).files[0]);

            $.ajax({
                url: self.hostIp + self.fileUrl,
                type: 'POST',
                cache: false,
                data: formData,
                processData: false,
                contentType: false
            }).done(function(res) {
                options.vue.$vux.loading.hide();
                resolve(res)
            }).fail(function(res) {
                options.vue.$vux.loading.hide();
                options.vue.$vux.toast.show({type:'text',text:'上传失败',position:'bottom'});
                reject(res)
            });                         
        })          
    },
}

Vue.prototype.$file = File;