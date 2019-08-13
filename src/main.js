// 入口文件
import Vue from 'vue'
// 导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入 vue-resource
import VueResource from 'vue-resource'
// 安装 vue-resource
Vue.use(VueResource)

// 导入 mint-ui 相关组件
import { Header, Swipe, SwipeItem  } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 导入 mint-ui 样式
import 'mint-ui/lib/style.css'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

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

