<template>
    <div style="height: 100%">
        <x-button type='primary' @click.native='showBoard'>show white board</x-button>
        <whiteboard ref='whiteboard' v-show='isShow' :background-image='imgUrl' @showBoard='showBoard' @save='save'></whiteboard>
        <x-button @click.native='goRoom("room1")'>room1</x-button>
        <x-button @click.native='goRoom("room2")'>room2</x-button>
        <x-button @click.native='goRoom("room3")'>room3</x-button>
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
                isShow:false,
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
        mounted(){
            const self = this;
            const whiteboard = self.$refs.whiteboard;

            //初始化白板
            whiteboard.init({
                socketHost:'http://192.168.8.31:8080',
                backgroundImage:self.imgUrl
            })
        },
        activated(){
            const self = this;
        },
        sockets:{
            connect: function(){
                console.log('socket connected')
            },
            customEmit: function(val){
                console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
            }
        },
        methods:{
            goRoom(id){
                const self = this;
                self.socket = io('http://192.168.8.31:8080');
                self.socket.emit('join',id);
            },
            save(data){
                const self = this;
                console.log('imgUrl',data);
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