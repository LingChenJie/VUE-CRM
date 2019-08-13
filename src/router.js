import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tobbar/HomeContainer.vue'
import MemberContainer from './components/tobbar/MemberContainer.vue'
import ShopcarContainer from './components/tobbar/ShopcarContainer.vue'
import SerachContainer from './components/tobbar/SerachContainer.vue'

// 创建路由对象
var router = new VueRouter({
    routes:[
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/serach', component: SerachContainer }
    ],
    linkActiveClass: 'mui-active'// 覆盖默认的路由高亮的类，默认的类叫link-active
})

// 把路由对象暴露出去
export default router;