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
            <p class="display-1 text--primary">{{wiki.title}}</p>
            <p>
                <span v-for="(category, cIndex) in wiki.categories" :key="cIndex" style="color: dodgerblue;">
                    #{{category}}&nbsp;
                </span>
            </p>
            <p>
                {{wiki['summary']}}
            </p>
            <div>
                <v-carousel v-if="wiki.image != null && wiki.image.length > 0" hide-delimiters >
                    <v-carousel-item
                            v-for="(imgSrc, imgIndex) in wiki.image" :key="imgIndex" :src="imgSrc">
                    </v-carousel-item>
                </v-carousel>
            </div>
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