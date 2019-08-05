<template>
    <v-tabs grow>
        <v-tab key="tab-poems">词韵</v-tab>
        <v-tab>Chart</v-tab>
        <v-tab key="tab-wiki">维基百科</v-tab>
        <v-tab-item key="tab-poems">
            <poem-component/>
        </v-tab-item>

        <v-tab-item>
            s
        </v-tab-item>

        <v-tab-item key="tab-wiki">
            <wiki-pedia></wiki-pedia>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import WikiPedia from "./WikiPedia";
    import PoemComponent from "./PoemComponent";

    export default {
        name: "HomeComponent",
        components: {PoemComponent, WikiPedia},
        data() {
            return {
                grow: true
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>