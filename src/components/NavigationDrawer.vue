<template>
    <v-container fluid>
        <v-list-item style="padding-left: 8px">
            <v-list-item-avatar>
                <v-img src="../assets/logo.svg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title class="title">
                    夸 父（KUAFU）
                </v-list-item-title>
                <v-list-item-subtitle>
                    <a @click="openInNewTab('github')">@ Github</a>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
                nav
                dense>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
                <v-list-item to="/">
                    <v-list-item-icon>
                        <v-icon>$vuetify.icons.myth</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>神 话</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/wiki">
                    <v-list-item-icon>
                        <v-icon>$vuetify.icons.wiki</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>百 科</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/poem">
                    <v-list-item-icon>
                        <v-icon>$vuetify.icons.books</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>诗 词</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item to="/chart">
                    <v-list-item-icon>
                        <v-icon>mdi-google-circles-extended</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>关 系 图</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <v-divider></v-divider>

        <v-list
                nav
                dense>

            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>参考书籍</v-list-item-title>
                    <v-list-item-subtitle style="margin-top: 10px">
                        <a @click="openInNewTab('book1')">《中国神话史》</a>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        <a @click="openInNewTab('book2')">《中国神话传说》</a>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>
                        <a @click="openInNewTab('book3')">《中国神话通论》</a>
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>数据来源</v-list-item-title>
                    <v-list-item-subtitle style="margin-top: 10px">搜韵诗词</v-list-item-subtitle>
                    <v-list-item-subtitle>上海图书馆</v-list-item-subtitle>
                    <v-list-item-subtitle>维基百科</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

        </v-list>
        <v-footer absolute>
            <div style="font-size: 13px">&copy; {{ new Date().getFullYear() }} <a @click="openInNewTab('lib')">上海图书馆开放数据应用开发竞赛</a></div>
        </v-footer>
    </v-container>
</template>

<script>
    export default {
        name: "NavigationDrawer",
        data() {
            return {}
        },
        methods: {
            openInNewTab(para) {
                switch (para) {
                    case "github":
                        window.open("https://github.com/polotin/kuafu-frontend");
                        break;
                    case "book1":
                        window.open("https://book.douban.com/subject/26665789/");
                        break;
                    case "book2":
                        window.open("https://book.douban.com/subject/7014927/");
                        break;
                    case "book3":
                        window.open("https://book.douban.com/subject/30434560/");
                        break;
                    case "lib":
                        window.open("http://opendata.library.sh.cn/");
                }

            }
        }
    }
</script>

<style scoped>
    .v-list-item__subtitle {
        margin-bottom: 5px;
    }
</style>