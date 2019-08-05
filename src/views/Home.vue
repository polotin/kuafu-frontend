<template>
    <v-app>
        <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary>
            <v-list
                    nav
                    dense
            >
                <v-list-item-group active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title @click="toWiki">wiki</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense color="#1E90FF">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>夸父</v-toolbar-title>
        </v-app-bar>


        <v-content>
            <home-component/>
        </v-content>
    </v-app>
</template>

<script>
    import HomeComponent from "@/components/HomeComponent";

    export default {
        components: {HomeComponent},
        data() {
            return {
                drawer: false,
            }
        },
        methods: {toWiki(){
            this.$router.push('/wiki')
            }}
    };
</script>
