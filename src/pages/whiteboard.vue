<template>
    <div style="height: 100%">
        <!--
            tool: pencil,eraser,text,line,rectangle,ellipse
        -->
        <whiteboard 
            tool='pencil' 
            v-show='isShow' 
            :background-image='imgUrl' 
            :show-tool-bar='true' 
            socket-host='http://localhost:8080'
            @showBoard='showBoard' 
            @save='saveImg'>                
        </whiteboard>
    </div>
</template>
<script type="text/javascript">
    import {XButton,Group} from 'vux'
    import whiteboard from '@/components/white-board'
    import VueSocketio from 'vue-socket.io'
    import imgUrl from '@/assets/imgs/paper.jpg'
    import { Loading } from 'vux'
    export default{
        data(){
            return{
                isShow:true,
                imgUrl:imgUrl,
                showMenu:false,
                socket:null
            }
        },
        components:{
            XButton,
            Group,
            whiteboard
        },
        created(){
            const self = this;    
            //设置背景图片          
            if((function(){try{return wx,true}catch(e){}}())){
                self.imgUrl = wx.setBackgroundImage();
            } 
                 
        },
        activated(){
            const self = this;
        },
        sockets:{
            connect: function(){
                console.log('socket connected');
            },
            customEmit: function(val){
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)');
            }
        },
        methods:{
            saveImg(data){
                const self = this;
                console.log('imgUrl',data);
                if((function(){try{return wx,true}catch(e){}}())){
                    wx.saveBase64(data);
                }
            },
            clickButton(){

            },
            showBoard(show){
                this.isShow = !this.isShow;
            },
        }
    }
</script>
<style scoped></style>