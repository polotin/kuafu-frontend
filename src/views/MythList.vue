<template>
    <v-app>
        <v-navigation-drawer
                width="300"
                v-model="drawer"
                temporary
                app>
            <navigation-drawer/>
        </v-navigation-drawer>
        <v-app-bar app dense color="#1E90FF">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{titleMap[type]}}</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <myth-list-component :mythList="mythList"/>
        </v-content>
    </v-app>
</template>

<script>
    import NavigationDrawer from "../components/NavigationDrawer";
    import MythListComponent from "../components/MythListComponent";
    import {axios} from 'axios';
    import {primitiveMyth} from '../js/primitive';

    export default {
        name: "MythList",
        components: {MythListComponent, NavigationDrawer},
        data() {
            return {
                drawer: false,
                type: '',
                mythList: [],
                titleMap: {
                    'Primitive' : '原始社会前期的神话',
                    'Shanhaiching-1' : '《山海经》的神话（上）',
                    'Shanhaiching-2' : '《山海经》的神话（下）',
                    'Preqin' : '先秦及汉初文献中的神话',
                    'Han' : '汉代的感生神话及其他',
                    'Buddhas' : '仙话及佛典中的神话',
                    'Personage' : '历史人物的神话',
                }
            }
        },
        methods: {},
        created() {
            let self = this;
            self.type = self.$route.query.type;
            // let url = '' + '?type=' + self.type;
            // axios.get(url)
            //     .then(res=> {
            //         let data = res.data;
            //         self.mythList = data;
            //     });
            if (self.type == 'Primitive') {
                self.mythList = primitiveMyth;
            }
        }
    }
</script>

<style scoped>

</style>