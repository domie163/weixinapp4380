import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import ershoushuji from '@/views/modules/ershoushuji/list'
    import news from '@/views/modules/news/list'
    import discussershoushuji from '@/views/modules/discussershoushuji/list'
    import systemintro from '@/views/modules/systemintro/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import auctionershoushuji from '@/views/modules/auctionershoushuji/list'
    import chat from '@/views/modules/chat/list'
    import tongzhigonggao from '@/views/modules/tongzhigonggao/list'
    import tushuleixing from '@/views/modules/tushuleixing/list'
    import orders from '@/views/modules/orders/list'
    import storeup from '@/views/modules/storeup/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/ershoushuji',
        name: '二手书籍',
        component: ershoushuji
      }
      ,{
	path: '/news',
        name: '图书资讯',
        component: news
      }
      ,{
	path: '/discussershoushuji',
        name: '二手书籍评论',
        component: discussershoushuji
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/auctionershoushuji',
        name: '二手书籍出价记录',
        component: auctionershoushuji
      }
      ,{
	path: '/chat',
        name: '平台客服',
        component: chat
      }
      ,{
	path: '/tongzhigonggao',
        name: '通知公告',
        component: tongzhigonggao
      }
      ,{
	path: '/tushuleixing',
        name: '图书类型',
        component: tushuleixing
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
