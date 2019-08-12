<template>
    <v-app>
        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container style="padding: 12px 24px">
                <v-card style="margin-top: 10px;" >
                    <v-system-bar
                            :color="color"
                            window
                    >
                    </v-system-bar>
                    <chapter-myth-component :mythListInChapter="mythListInChapter"/>
                </v-card>
            </v-container>
        </v-content>
        <back-totop></back-totop>
    </v-app>
</template>

<script>
    import {allChapter} from '../js/chapters';
    import ChapterMythComponent from "../components/ChapterMythComponent";
    import BackTotop from "../components/BackTotop";

    export default {
        name: "ChapterMyth",
        components: {BackTotop, ChapterMythComponent},
        data() {
            return {
                chapter: '',
                mythListInChapter: [],
                title: "",
                color: "",
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        },
        created() {
            let self = this;
            self.title = self.$route.query.title;
            self.color = self.$route.query.color;
            self.chapter = self.$route.query.chapter;

            switch(self.chapter) {
                case "kai-pi":
                    self.mythListInChapter = allChapter['kai-pi'];
                    break;
                case "huang-yan":
                    self.mythListInChapter = allChapter['huang-yan'];
                    break;
                case "yao-shun":
                    self.mythListInChapter = allChapter['yao-shun'];
                    break;
                case "yi-yu":
                    self.mythListInChapter = allChapter['yi-yu'];
                    break;
                default:
                    self.mythListInChapter = allChapter['kai-pi'];
            }
        }

    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>