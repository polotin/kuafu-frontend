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
            <v-toolbar-title>百 科</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <wiki-pedia/>
        </v-content>
    </v-app>
</template>

<script>
    import WikiPedia from "@/components/WikiPedia";
    import NavigationDrawer from "../components/NavigationDrawer";

    export default {
        components: {NavigationDrawer, WikiPedia},
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
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
