<template>
    <div>
        <v-speed-dial
                v-model="fab"
                top
                right
                :direction="direction"
                :transition="transition"
        >
            <template v-slot:activator>
                <v-btn
                        v-model="fab"
                        color="blue darken-2"
                        small
                        dark
                        fab
                >
                    <v-icon v-if="fab">$vuetify.icons.close</v-icon>
                    <div v-else style="font-family: 'Roboto', sans-serif; font-size: 18px">{{figure[0]}}</div>
                </v-btn>
            </template>
            <v-btn
                    fab
                    dark
                    x-small
                    color="green"
            >
                <v-icon @click="showWiki">$vuetify.icons.wiki</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    x-small
                    color="indigo"
            >
                <v-icon>$vuetify.icons.books</v-icon>
            </v-btn>
            <v-btn
                    fab
                    dark
                    x-small
                    color="red"
            >
                <v-icon>$vuetify.icons.myth</v-icon>
            </v-btn>
        </v-speed-dial>

        <v-dialog v-model="dialog" width="100%">
            <v-card
                    class="mx-auto"
                    width="100%"
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{wiki.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <!--                <v-card-text style="text-align: justify; text-indent: 2em;">-->
                <!--                    <p v-for="(paragraph, index) in wiki['summary']" :key="index" class="wiki-summary">-->
                <!--                        {{paragraph}}-->
                <!--                    </p>-->
                <!--                </v-card-text>-->
                <v-card-text style="text-align: justify; text-indent: 2em;">
                    <p v-for="(summary, index) in wiki.summary" :key="index" class="wiki-summary">
                        <span v-show="false">{{sIndex = 0}}</span>
                        <span v-for="(piece, pIndex) in summary.pieces" :key="pIndex">
                            <span v-if="piece != '#'">
                                {{piece}}
                            </span>
                            <span v-else style="color: dodgerblue"
                                  @click="showBook">《{{summary.books[sIndex++]}}》</span>
                        </span>
                    </p>
                </v-card-text>
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
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "FloatingButton",
        props: {
            figure: {
                type: String,
                default: ""
            },
            required: true
        },
        data: () => ({
            direction: 'left',
            fab: false,
            fling: false,
            hover: false,
            tabs: null,
            transition: 'slide-x-transition',
            dialog: false,

            wiki: {},
            showProgressing: false,

        }),
        methods: {
            showWiki() {
                let self = this;
                self.wiki = {};
                self.dialog = true;
                self.showProgressing = true;

                let url = 'https://www.kuafu.online/wiki';
                axios.post(url, {
                    keyword: self.figure
                })
                    .then(res => {
                        let data = res.data;
                        self.wiki = data;
                        self.showProgressing = false;
                        if (data === "ERROR") {
                            alert(data + "，请重新输入/选择查询内容！");
                        }
                    })
                    .catch(e => {
                        self.showProgressing = false;
                        console.log(e);
                    })
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
        }
    }
</script>

<style scoped>
    .v-speed-dial {
        position: absolute;
        margin-top: 20px;
    }

    .v-btn--floating {
        position: relative;
    }
</style>