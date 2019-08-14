<template>
    <v-app>
        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="goBack">
                <v-icon>mdi-arrow-left</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title>{{myth.title}}</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <v-card>
                    <v-card-title class="card-title">
                        {{myth.title}}
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="margin-top: 5px; text-align: justify; text-indent: 2em;">
                        <p v-for="(paragraph, index) in myth.content" :key="index" class="wiki-summary">
                            <span v-show="false">{{sIndex = 0}}</span>
                            <span v-for="(piece, pIndex) in paragraph.pieces" :key="pIndex">
                            <span v-if="piece != '#'">
                                {{piece}}
                            </span>
                            <span v-else style="color: dodgerblue"
                                  @click="showBook">《{{paragraph.books[sIndex++]}}》</span>
                        </span>
                        </p>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-content>
        <back-totop></back-totop>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import BackTotop from "../components/BackTotop";

    export default {
        name: "MythDetail",
        components: {BackTotop},
        data() {
            return {
                drawer: false,
                id: '',
                type: '',
                myth: {title: '', content: ''}
            }
        },
        created() {
            let self = this;
            self.type = self.$route.query.type;
            self.id = self.$route.query.id;
            let url = 'https://www.kuafu.online/mythnstory';
            axios.post(url, {
                keyword: {type: self.type, id: self.id},
            })
                .then(res => {
                    if (res.data === "ERROR") {
                        alert(res.data);
                    }
                    let data = res.data;
                    self.myth.title = data.title;
                    self.myth.content = data.content;
                })
                .catch(e => {
                    console.log(e);
                })
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            showBook(e) {
                let self = this;
                self.$router
                    .push({
                        path: '/books',
                        name: 'books',
                        query: {
                            bookName: e.target.innerText.replace('《', '').replace('》', '').trim()
                        }
                    });
            }
        },
    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }

    .card-title {
        width: 100%;
        text-align: center;
        white-space: normal;
        font-size: 1.25em;
    }
</style>