<template>
    <v-app>
        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>神话史</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <v-card>
                    <v-card-title style="color: dodgerblue;margin-top: 10px;">{{myth.title}}</v-card-title>
                    <v-card-text v-html="myth.content" style="margin-top: 5px; text-align: justify; text-indent: 2em;"></v-card-text>
                </v-card>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import {mythList} from "../js/myth";

    export default {
        name: "MythDetail",
        data() {
            return {
                drawer: false,
                id: '',
                myth: {title: '', content: ''}
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        },
        created() {
            let self = this;
            self.id = self.$route.query.id;
            self.myth = mythList[self.id];
        }
    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>