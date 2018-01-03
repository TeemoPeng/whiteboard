import Vue from 'vue'
import Router from 'vue-router'

// 首页
const Index = resolve => require(['@/pages/index.vue'], resolve)
const Whiteboard = resolve => require(['@/pages/whiteboard.vue'], resolve)
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
        }, 
        {
            path:'/room/:id',
            name:'room',
            component:Whiteboard
        }   
    ]
})
