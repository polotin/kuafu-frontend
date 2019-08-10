<template>
    <v-container>
        <v-container>
            <v-layout wrap>
                <v-flex xs9>
                    <v-text-field placeholder="请输入查询内容" v-model="keyword" style="width: 95%;"></v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-btn @click.stop="findWiki" style="width: 100%; bottom: -10px;" color="primary">搜索</v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container>
            <v-card
                    class="mx-auto"
                    width="100%"
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{wiki.title}}</v-list-item-title>
                        <v-list-item-subtitle>
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
                            <v-img :aspect-ratio="16/9" :src="imgSrc" :contain="true" >
                            </v-img>
                        </v-carousel-item>
                    </v-carousel>
                    <v-carousel v-else hide-delimiters :show-arrows="false" height="100%">
                        <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
                        </v-img>
                    </v-carousel>
                </div>

                <div v-for="(item, index) in items">
                    <button v-if="item.is_button" @click="onButtonClick(index)"></button>
                        <div v-html="item.mold"></div>
                </div>

<!--                <book-query :name="items"></book-query>-->

                <v-card-text style="text-align: justify; text-indent: 2em;">
                    <p v-for="(paragraph, index) in wiki['summary']" :key="index" class="wiki-summary">
                        <span v-html="paragraph"/>
                    </p>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                            text
                            color="deep-purple accent-4"
                    >
                        Read
                    </v-btn>
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
    </v-container>
</template>

<script>
    import axios from 'axios';
    import BookQuery from "./BookQuery";

    export default {
        name: "WikiPedia",
        components: {BookQuery},
        data() {
            return {
                keyword: null,
                wiki: {},
                showProgressing: false,
            }
        },
        methods: {
            findWiki() {
                let self = this;
                self.showProgressing = true;
                let url = 'https://www.kuafu.online/wiki';
                axios.post(url, {
                    keyword: self.keyword
                })
                    .then(res => {
                        let data = res.data;
                        self.wiki = data;
                        self.showProgressing = false;
                        console.log(data);
                    })
                    .catch(e => {
                        self.showProgressing = false;
                        console.log(e);
                    })
            }
        }
    }
</script>

<style scoped>

</style>