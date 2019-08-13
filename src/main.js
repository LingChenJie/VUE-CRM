// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入路由模块
import router from './router.js'

// 导入 app 根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    data: {

    },
    render: c => c(app),
    router
})

