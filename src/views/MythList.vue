<template>
    <v-app>
        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>{{titleMap[type]}}</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <myth-list-component :mythList="mythList"/>
        </v-content>
        <back-totop></back-totop>
    </v-app>
</template>

<script>
    import MythListComponent from "../components/MythListComponent";
    import axios from 'axios';
    import BackTotop from "../components/BackTotop";

    export default {
        name: "MythList",
        components: {BackTotop, MythListComponent},
        data() {
            return {
                type: '',
                mythList: [],
                titleMap: {
                    'Primitive': '原始社会前期的神话',
                    'Shanhaiching-1': '《山海经》的神话（上）',
                    'Shanhaiching-2': '《山海经》的神话（下）',
                    'Preqin': '先秦及汉初文献中的神话',
                    'Han': '汉代的感生神话及其他',
                    'Buddhas': '仙话及佛典中的神话',
                    'Personage': '历史人物的神话',
                }
            }
        },
        mounted() {
            let self = this;
            self.type = self.$route.query.type;

            let url = 'https://www.kuafu.online/mythnstory';
            axios.post(url, {
                keyword: self.type,
            })
                .then(res => {
                    if (res.data === "ERROR") {
                        alert(res.data);
                    }
                    self.mythList = res.data.nodes;
                })
                .catch(e => {
                    console.log(e);
                })
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        },
    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>