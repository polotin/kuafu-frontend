<template>
    <v-container>
        <v-container>
            <v-layout wrap>
                <v-flex xs9>
                    <v-text-field placeholder="请输入查询内容" v-model="keyword" style="width: 95%;" @click.stop="showSearchSuggestions"></v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-btn @click.stop="findWiki" style="width: 100%; bottom: -10px;" color="primary">搜索</v-btn>
                </v-flex>
            </v-layout>
            <search-suggestions v-show="showSuggestions" @tagdata="getKeywordFromTag"></search-suggestions>
        </v-container>

        <v-container>
            <v-card
                    class="mx-auto"
                    width="100%"
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{wiki.title}}</v-list-item-title>
                        <v-list-item-subtitle style="white-space: normal">
                            <span v-for="(category, cIndex) in wiki.categories" :key="cIndex"
                                  style="color: dodgerblue;">
                                #{{category}}&nbsp;
                            </span>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <div>
                    <v-carousel v-if="wiki.image != null && wiki.image.length > 0" hide-delimiters height="100%">
                        <v-carousel-item
                                v-for="(imgSrc, imgIndex) in wiki.image" :key="imgIndex">
                            <v-img :aspect-ratio="16/9" :src="imgSrc" :contain="true">
                            </v-img>
                        </v-carousel-item>
                    </v-carousel>
                    <v-carousel v-else hide-delimiters :show-arrows="false" height="100%">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                        </v-img>
                    </v-carousel>
                </div>

                <v-card-text style="text-align: justify; text-indent: 2em;">
                    <p v-for="(summary, index) in wiki.summary" :key="index" class="wiki-summary">
                        <span v-show="false">{{sIndex = 0}}</span>
                        <span v-for="(piece, pIndex) in summary.pieces" :key="pIndex">
                            <span v-if="piece != '#'">
                                {{piece}}
                            </span>
                            <span v-else style="color: dodgerblue" @click="showBook">《{{summary.books[sIndex++]}}》</span>
                        </span>
                    </p>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            text
                            color="deep-purple accent-4"
                    >
                        Bookmark
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>

        </v-container>

        <v-overlay :value="showProgressing" opacity="0.1">
            <v-progress-circular
                    :size="30"
                    width="3"
                    color="primary"
                    indeterminate
            ></v-progress-circular>
        </v-overlay>
        <back-totop></back-totop>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import store from "../store";
    import BackTotop from "./BackTotop";
    import SearchSuggestions from "./SearchSuggestions";

    export default {
        name: "WikiPedia",
        components: {SearchSuggestions, BackTotop},
        data() {
            return {
                keyword: null,
                wiki: store.state.wiki,
                showProgressing: false,
                showSuggestions: false,
            }
        },
        methods: {
            showSearchSuggestions() {
                this.showSuggestions = true;
            },
            getKeywordFromTag(data) {
                this.keyword = data;
            },
            findWiki() {
                let self = this;
                self.showProgressing = true;
                self.showSuggestions = false;
                let url = 'https://www.kuafu.online/wiki';
                axios.post(url, {
                    keyword: self.keyword
                })
                    .then(res => {
                        self.wiki = res.data;
                        self.$store.state.wiki = self.wiki;
                        self.showProgressing = false;
                    })
                    .catch(e => {
                        self.showProgressing = false;
                        console.log(e);
                    });
            },
            showBook(e) {
                let self = this;
                self.$router
                    .push({
                        path: '/books',
                        name: 'books',
                        query: {
                            bookName: e.target.innerText.replace('《','').replace('》','').trim()
                        }
                    });
            }
        },
        beforeDestroy() {
            let self = this;
            self.$store.state.wiki = self.wiki;
        }
    }
</script>

<style scoped>

</style>