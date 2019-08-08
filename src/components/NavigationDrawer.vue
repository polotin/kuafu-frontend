<template>
    <v-container
            fluid
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    夸 父（KUAFU）
                </v-list-item-title>
                <v-list-item-subtitle>
                    @Github
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
                nav
                dense>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
                <v-list-item @click.stop="backHome">
                    <v-list-item-icon>
                        <v-icon>$vuetify.icons.books</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>首 页</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click.stop="toWiki">
                    <v-list-item-icon>
                        <v-icon>$vuetify.icons.wiki</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>百 科</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item @click.stop="toMyth">
                    <v-list-item-icon>
                        <v-icon>$vuetify.icons.myth</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>神 话</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "NavigationDrawer",
        data() {
            return {}
        },
        methods: {
            backHome() {
                this.$router.push({
                    path: '/',
                });
                this.$emit('hideIfNotLeave')
            },
            toWiki() {
                this.$router.push({
                    path: '/wiki',
                });
                this.$emit('hideIfNotLeave')
            },
            toMyth() {
                this.$router.push({
                    path: '/myth',
                });
                this.$emit('hideIfNotLeave')
            }
        }
    }
</script>

<style scoped>

</style>