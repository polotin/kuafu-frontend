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
            <v-toolbar-title>图 表</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <chart-demo/>
        </v-content>
    </v-app>
</template>

<script>
    import ChartDemo from "../components/ChartDemo";
    import NavigationDrawer from "../components/NavigationDrawer";

    export default {
        name: "Chart",
        components: {ChartDemo, NavigationDrawer},
        data() {
            return {
                drawer: false,
            }
        },
    }
</script>

<style scoped>
    .v-app-bar {
        background: linear-gradient(135deg, rgb(32, 186, 230), rgb(110, 6, 173));
    }
</style>