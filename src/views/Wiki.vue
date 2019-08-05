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
                        <v-list-item-title @click.stop="backHome">Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title @click.stop="toWiki">wiki</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app dense color="#1E90FF">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>夸父-维基百科</v-toolbar-title>
        </v-app-bar>


        <v-content>
        </v-content>
    </v-app>
</template>

<script>
    import WikiPedia from "@/components/WikiPedia";

    export default {
        components: {WikiPedia},
        data() {
            return {
                drawer: false,
            }
        },
        methods: {
            backHome() {
                this.$router.push({
                    path: '/',
                })
            },
            toWiki() {
                this.$router.push({
                    path: '/wiki',
                })
            }

        }
    };
</script>
