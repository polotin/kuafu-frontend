<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                app
                temporary>
            <navigation-drawer @hideIfNotLeave="hideIfNotLeave"/>
        </v-navigation-drawer>

        <v-app-bar app dense color="#1E90FF">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>首页</v-toolbar-title>
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
