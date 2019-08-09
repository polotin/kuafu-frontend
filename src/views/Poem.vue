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
            <v-toolbar-title>词 韵</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <poem-component/>
        </v-content>
    </v-app>
</template>

<script>
    import PoemComponent from "../components/PoemComponent";
    import NavigationDrawer from "../components/NavigationDrawer";
    export default {
        name: "Poem",
        components: {NavigationDrawer, PoemComponent},
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