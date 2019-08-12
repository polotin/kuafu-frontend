import Vue from 'vue'
import Router from 'vue-router'
import Poem from './views/Poem.vue'
import Chart from './views/Chart.vue'
import Wiki from './views/Wiki.vue'
import Myth from './views/Myth.vue'
import MythList from './views/MythList.vue'
import MythDetail from './views/MythDetail.vue'
import BookList from './views/BookList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'myth',
            component: Myth,
            meta: {
                title: "夸父-神话故事"
            }
        },
        {
            path: '/wiki',
            name: 'wiki',
            component: Wiki,
            meta:{
                keepAlive:true,
                title: "夸父-神话百科"
            }
        },
        {
            path: '/myth/list',
            name: 'myth-list',
            component: MythList
        },
        {
            path: '/myth/detail',
            name: 'myth-detail',
            component: MythDetail
        },
        {
            path: '/poem',
            name: 'poem',
            component: Poem,
            meta: {
                title: "夸父-诗词中的中国神话"
            }
        },
        {
            path: '/chart',
            name: 'chart',
            component: Chart,
            meta: {
                title: "夸父-神话人物关系图谱"
            }
        },
        {
            path: '/books',
            name: 'books',
            component: BookList
        }
    ]
})
