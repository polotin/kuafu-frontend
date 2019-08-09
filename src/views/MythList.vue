<template>
    <v-app>
        <v-navigation-drawer
                width="300"
                v-model="drawer"
                temporary
                app>
            <navigation-drawer/>
        </v-navigation-drawer>
        <v-app-bar app dense color="#1E90FF">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>夸父-神话</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <myth-list-component/>
        </v-content>
    </v-app>
</template>

<script>
    import NavigationDrawer from "../components/NavigationDrawer";
    import MythListComponent from "../components/MythListComponent";
    export default {
        name: "MythList",
        components: {MythListComponent, NavigationDrawer},
        data() {
            return {
                drawer: false
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>