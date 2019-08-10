<template>
    <v-app>
        <v-navigation-drawer
                width="300"
                v-model="drawer"
                temporary
                app>
            <navigation-drawer/>
        </v-navigation-drawer>
        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{bookName}}</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <p v-if="noBook">{{tip}}</p>
            <v-container v-else>
                <v-card v-for="(book, index) in bookList" :key="index" width="100%" style="margin-top: 10px;"
                        @click="showLibraryPage(book.bid)">
                    <v-card-title>
                        {{book.title}}
                    </v-card-title>
                    <v-card-text>
                        <p>
                            {{book.provision}}
                        </p>
                        <p>
                            {{book.response}}
                        </p>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-content>

        <v-overlay :value="showProgressing" opacity="0.1">
            <v-progress-circular
                    :size="30"
                    width="3"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import NavigationDrawer from "../components/NavigationDrawer";

    export default {
        name: "BookList",
        components: {NavigationDrawer},
        data() {
            return {
                drawer: false,
                bookName: '',
                bookList: [],
                noBook: false,
                tip: '',
                showProgressing: false,
            }
        },
        methods: {
            showLibraryPage(bid) {
                let self = this;
                self.$router
                    .push({
                        path: 'books/book',
                        query: {
                            bid: bid
                        }
                    })
            }
        },
        created() {
            let self = this;
            self.showProgressing = true;
            self.bookName = self.$route.query.bookName;
            let url = 'https://www.kuafu.online/books';
            axios.post(url, {
                keyword: self.bookName
            })
                .then(res => {
                    let data = res.data.result;
                    if (data.length == 0) {
                        self.tip = '未查询到《' + self.bookName + '》相关信息';
                        self.noBook = true;
                    } else {
                        self.bookList = data;
                        self.noBook = false;
                    }
                    self.showProgressing = false;
                })
                .catch(err => {
                    self.tip = '查询出错';
                    self.noBook = true;
                    self.showProgressing = false;
                })
        }
    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>