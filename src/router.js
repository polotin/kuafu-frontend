import Vue from 'vue'
import Router from 'vue-router'
import Poem from './views/Poem.vue'
import Chart from './views/Chart.vue'
import Wiki from './views/Wiki.vue'
import Myth from './views/Myth.vue'
import MythList from './views/MythList.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'myth',
            component: Myth
        },
        {
            path: '/wiki',
            name: 'wiki',
            component: Wiki
        },
        {
            path: '/myth/list',
            name: 'myth-list',
            component: MythList
        },
        {
            path: '/poem',
            name: 'poem',
            component: Poem
        },
        {
            path: '/chart',
            name: 'chart',
            component: Chart
        },
    ]
})
