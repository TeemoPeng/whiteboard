<template>
    <div style="height: 100%">
        <x-button type='primary' @click.native='showBoard'>show white board</x-button>
        <whiteboard v-show='isShow' :background-image='imgUrl' @showBoard='showBoard' @save='save'></whiteboard>
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
                showMenu:false
            }
        },
        components:{
            XButton,
            Group,
            whiteboard
        },
        created(){
            const self = this;
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