<template>
    <v-container>
        <v-container>
            <v-layout wrap>
                <v-flex xs9>
                    <v-text-field :placeholder="keyword? keyword:'请输入查询内容'" v-model="keyword" style="width: 95%;"
                                  @click.stop="showSearchSuggestions"></v-text-field>
                </v-flex>
                <v-flex xs3>
                    <v-btn @click.stop="findPoems" style="width: 100%; bottom: -10px;" color="primary">搜索</v-btn>
                </v-flex>
            </v-layout>
            <search-suggestions v-show="showSuggestions" @tagdata="getKeywordFromTag"></search-suggestions>
        </v-container>

        <poem-card v-show="showCard"></poem-card>

        <v-container class="poem-card" v-for="(poem, index) in result" :key="index" @click.stop="showPoem(poem)">
            <v-card width="100%">
                <v-card-text>
                    <div></div>
                    <p class="card-title-list">{{poem.Title}}</p>
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
            <v-card scrollable min-height="100%" style="padding: 6px 16px">
                <p style="height: 10px"></p>
                <p class="card-title">{{currentPoem.Title}}</p>
                <p class="card-author">
                    {{currentPoem.Dynasty}}·{{currentPoem.Author}}
                </p>
                <v-divider></v-divider>
                <v-container style="margin-top: 10px; padding: 12px 0;" @click.stop="showTranslations">
                    <p v-for="(clause, index) in currentPoem.Clauses" :key="index" class="card-clause">
                        <span v-html="clause"></span>
                        <br>
                        <span v-if="translations" v-text="currentPoem.Pinyins[index]" class="pinyin"></span>
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
        <back-totop></back-totop>
    </v-container>
</template>

<script>
    import axios from 'axios';
    import PoemCard from "./PoemCard";
    import SearchSuggestions from "./SearchSuggestions";
    import BackTotop from "./BackTotop";

    export default {
        name: "PoemComponent",
        components: {SearchSuggestions, PoemCard, BackTotop},
        data() {
            return {
                showSuggestions: false,
                keyword: null,
                result: [],
                dialog: false,
                currentPoem: {},
                showProgressing: false,
                showCard: true,
                translations: false,
            }
        },
        methods: {
            showSearchSuggestions() {
                this.showSuggestions = true;
            },
            getKeywordFromTag(data) {
                this.keyword = data;
            },
            findPoems() {
                let self = this;
                self.showProgressing = true;
                self.showCard = false;
                self.showSuggestions = false;
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
            showTranslations() {
                this.translations = !this.translations;
            }
        }
    }
</script>

<style scoped>
    .card-title-list {
        color: rgba(0, 0, 0, 0.87);
        white-space: normal;
        font-weight: bold;
        font-size: 1.2em;
    }

    .card-title {
        width: 100%;
        text-align: center;
        white-space: normal;
        font-weight: bold;
        font-size: 1.2em;
    }

    .card-author {
        width: 100%;
        text-align: center;
    }

    .card-clause {
        width: 100%;
        text-align: center;
    }

    .pinyin {
        text-align: center;
        font-family: "Songti SC", serif;
        color: #1e90ff;
    }
</style>