<template>
    <v-app>
        <v-navigation-drawer
                width="300"
                v-model="drawer"
                app
                temporary>
            <navigation-drawer/>
        </v-navigation-drawer>
        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>书</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <iframe id="mainiframe" width="100%;" allowfullscreen="true" height="100%" frameborder="0" :src="bookUrl"
                    onload="changeFrameHeight()"></iframe>
        </v-content>
    </v-app>
</template>

<script>
    import NavigationDrawer from "../components/NavigationDrawer";

    export default {
        name: "Book",
        components: {NavigationDrawer},
        data() {
            return {
                drawer: false,
                bookUrl: '',
                bid: '',
                html: ''
            }
        },
        methods: {
            changeFrameHeight() {
                let ifm = document.getElementById("mainiframe");
                ifm.height = document.documentElement.clientHeight;
            }
        },
        created() {
            let self = this;
            self.bid = self.$route.query.bid;
            self.bookUrl = 'https://library.sh.cn/#/index/pBookDetails?bid=' + self.bid + '&type=zbook';
        },

    }
    window.onresize = function () {
        changeFrameHeight();
    }
    function changeFrameHeight() {
        let ifm = document.getElementById("mainiframe");
        ifm.height = document.documentElement.clientHeight;
    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>