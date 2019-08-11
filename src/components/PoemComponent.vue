<template>
    <v-container>
        <v-container>
            <v-layout wrap>
                <v-flex xs9>
                    <v-text-field placeholder="请输入查询内容" v-model="keyword" style="width: 95%;"></v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-btn @click.stop="findPoems" style="width: 100%; bottom: -10px;" color="primary">搜索</v-btn>
                </v-flex>
            </v-layout>
        </v-container>

        <poem-card v-show="showCard"></poem-card>

        <v-container class="poem-card" v-for="(poem, index) in result" :key="index" @click.stop="showPoem(poem)">
            <v-card width="100%">
                <v-card-text>
                    <div></div>
                    <p class="title text--primary">{{poem.Title}}</p>
                    <p>[{{poem.Dynasty}}] {{poem.Author}}</p>
                    <p>
                        <span v-for="(clause, clauseIndex) in poem.Clauses" :key="clauseIndex">
                            <span v-if="clause.indexOf(keyword) !== -1">
                                <span v-html="clause"></span>
                            </span>
                        </span>
                    </p>
                </v-card-text>
            </v-card>
        </v-container>

        <v-dialog v-model="dialog" width="100%">
            <v-card scrollable min-height="100%">
                <p style="height: 10px"></p>
                <p class="title text--primary card-title">{{currentPoem.Title}}</p>
                <p class="card-author"><span style="color: dodgerblue;">{{currentPoem.Author}}</span>·{{currentPoem.Dynasty}}
                </p>
                <v-divider></v-divider>
                <v-container style="margin-top: 10px">
                    <p v-for="(clause, index) in currentPoem.Clauses" :key="index" class="card-clause">
                        <span v-html="clause"></span>
                    </p>
                </v-container>
            </v-card>
        </v-dialog>

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
    import PoemCard from "./PoemCard";

    export default {
        name: "PoemComponent",
        components: {PoemCard},
        data() {
            return {
                keyword: null,
                result: [],
                dialog: false,
                currentPoem: {},
                showProgressing: false,
                showCard: true
            }
        },
        methods: {
            findPoems() {
                let self = this;
                self.showProgressing = true;
                self.showCard = false;
                let url = 'https://www.kuafu.online/poems';
                axios.post(url, {
                    keyword: self.keyword
                })
                    .then(res => {
                        let data = res.data;
                        self.result = data.result;
                        self.showProgressing = false;
                    })
                    .catch(e => {
                        self.showProgressing = false;
                        console.log(e);
                    })
            },
            showPoem(poem) {
                let self = this;
                self.currentPoem = poem;
                self.dialog = true;
            },
            toAuthorInfo() {
                let self = this;
                let chName = self.currentPoem.Author;
                self.$router
                    .push({
                        path: '/author',
                        name: 'author',
                        params: {
                            chName: chName
                        }
                    });
            }
        }
    }
</script>

<style scoped>
    .card-title {
        width: 100%;
        text-align: center;
    }

    .card-author {
        width: 100%;
        text-align: center;
    }

    .card-clause {
        width: 100%;
        text-align: center;
    }
</style>