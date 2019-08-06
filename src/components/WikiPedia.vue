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
                            <v-img :aspect-ratio="16/9" :src="imgSrc">
                            </v-img>
                        </v-carousel-item>
                    </v-carousel>
                </div>

                <v-card-text v-html="wiki['summary']">
<!--                    {{wiki['summary']}}-->
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

        <!--<v-dialog v-model="dialog" width="100%">-->
        <!--<v-card scrollable min-height="100%">-->
        <!--<p style="height: 10px"></p>-->
        <!--<p class="title text&#45;&#45;primary card-title">{{currentPoem.Title}}</p>-->
        <!--<p class="card-author">{{currentPoem.Author}}·{{currentPoem.Dynasty}}</p>-->
        <!--<v-divider></v-divider>-->
        <!--<v-container style="margin-top: 10px">-->
        <!--<p v-for="(clause, index) in currentPoem.Clauses" :key="index" class="card-clause">-->
        <!--<span v-html="clause"/>-->
        <!--</p>-->
        <!--</v-container>-->
        <!--</v-card>-->
        <!--</v-dialog>-->

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

    export default {
        name: "WikiPedia",
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