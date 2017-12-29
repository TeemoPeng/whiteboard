<template>
<div id="app">
  <!-- <keep-alive> -->
    <router-view></router-view>
  <!-- </keep-alive> -->
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created: function() {
    const self = this;
    window.notificationCallback = function(e) {
      const operation = JSON.stringify(e);
      if (operation.indexOf('refreshHomework') != -1) {
        //老师布置了新作业
        self.$router.push({
          path: '/work'
        })

      } else if (operation.indexOf('refreshMessge') != -1) {
        //家校通新消息
        self.$router.push({
          path: '/ysxx'
        })

      } else if (operation.indexOf('viewMyHomework') != -1) {
        //老师批阅了作业，查看作业报告
        self.$router.push({
          'name': 'analyze',
          params: {
            chatId: 'work&' + e.operation.homeworkId
          }
        })
      } else if (operation.indexOf('viewMyOpinion') != -1) {
        //查看意见反馈
        self.$router.push({
          path: '/yjfk'
        })
      }
      else if(operation.indexOf('refreshJoinGroup') != -1){
          self.$router.push({
            path: '/xkfz'
          })
      }
    };

    window.reConnect = function(){
        self.$router.go(0)
    };
    const token = this.$utils.getItem('accessToken');
    if (token) this.$router.push('/index');
  },
  methods: {}
}
</script>

<style>
html,body{height: 100%;width: 100%;overflow: hidden;background: #ebeced;font-family: '微软雅黑'}
.clear {
  clear: both;
}

.weui-dialog__hd {
  padding: 0!important;
}
#app{height: 100%;}


button,
textarea,
select,
option,
input {
  outline: none;
}
/*头部*/

header {
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 0.88rem;
  background-color: #71c1f9;
  text-align: center;
}

header img {
  position: absolute;
  left: .25rem;
  top: .26rem;
  width: .37rem;
  height: .35rem;
}

header p {
  font-size: 0.4rem!important;
  line-height: 0.88rem;
  color: #fff;
}

.header_r {
  position: absolute;
  top: 50%;
  right: 0.2rem;
  margin-top: -0.21rem;
  font-size: 0.32rem;
  color: #fff;
}

.goback {
  position: absolute;
  top: 50%;
  left: 0.15rem;
  margin-top: -0.225rem;
  display: inline-block;
  width: 0.45rem;
  height: 0.45rem;
  /*background-image: url('../static/images/left.png');*/
  background-size: 100% 100%;
}

.weui-check__label {
  background-color: #71c1f9;
  color: #fff;
  font-size: 0.3rem;
}

.weui-check__label:active {
  background-color: #71c1f9!important;
}

.weui-toast {
  width: 2.2rem!important;
  min-height: auto!important;
  /*top: 3.5rem;*/
}

.weui-cell_access .weui-cell__ft {
  overflow: hidden;
}

.vux-datetime-confirm {
  color: #71c1f9!important;
}

.loginToast .weui-toast__content {
  font-size: .315rem!important;
}

.swiperSetH .vux-swiper {
  height: 86.8vh!important;
}
</style>
