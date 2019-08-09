<template>
    <v-app>
        <v-navigation-drawer
                width="300"
                v-model="drawer"
                app
                temporary>
            <navigation-drawer @hideIfNotLeave="hideIfNotLeave"/>
        </v-navigation-drawer>

        <v-app-bar app dense dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>首 页</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <home-component/>
        </v-content>
    </v-app>
</template>

<script>
    import HomeComponent from "../components/HomeComponent";
    import NavigationDrawer from "../components/NavigationDrawer";

    export default {
        components: {NavigationDrawer, HomeComponent},
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            //fix：例如在首页的侧滑菜单点击“首页”，侧滑菜单不关闭的问题
            hideIfNotLeave() {
                this.drawer = false;
            }
        }
    };
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>
