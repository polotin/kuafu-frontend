<template>
    <v-list
            nav
            dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item>
                <v-list-item-title @click.stop="backHome">
                    <v-icon small>$vuetify.icons.books</v-icon>
                    &nbsp;&nbsp;首页
                </v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title @click.stop="toWiki">
                    <v-icon small>$vuetify.icons.wiki</v-icon>
                    &nbsp;&nbsp;百科
                </v-list-item-title>
            </v-list-item>

            <v-list-item>
                <v-list-item-title @click.stop="toMyth">
                    <v-icon small>$vuetify.icons.myth</v-icon>
                    &nbsp;&nbsp; 神话
                </v-list-item-title>
            </v-list-item>
        </v-list-item-group>
    </v-list>
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
                })
                this.$emit('hideIfNotLeave')
            },
            toWiki() {
                this.$router.push({
                    path: '/wiki',
                })
                this.$emit('hideIfNotLeave')
            },
            toMyth() {
                this.$router.push({
                    path: '/myth',
                })
                this.$emit('hideIfNotLeave')
            }
        }
    }
</script>

<style scoped>

</style>