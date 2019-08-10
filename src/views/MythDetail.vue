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
            <v-toolbar-title>神话史</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-card>
                <v-card-title style="color: dodgerblue">{{myth.title}}</v-card-title>
                <v-card-text v-html="myth.content" style="margin-top: 5px;"></v-card-text>
            </v-card>
        </v-content>
    </v-app>
</template>

<script>
    import {mythList} from "../js/myth";
    import NavigationDrawer from "../components/NavigationDrawer";

    export default {
        name: "MythDetail",
        components: {NavigationDrawer},
        data() {
            return {
                drawer: false,
                id: '',
                myth: {title: '', content: ''}
            }
        },
        created() {
            let self = this;
            self.id = self.$route.query.id;
            self.myth = mythList[self.id];
        }
    }
</script>

<style scoped>

</style>