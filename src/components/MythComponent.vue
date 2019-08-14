<template>
    <v-tabs grow>
        <v-tab key="tab-classify">篇章</v-tab>
        <v-tab key="tab-timeline">神话史</v-tab>
        <v-tab key="tab-other">故事</v-tab>

        <v-tab-item key="tab-classify">
            <myth-classify/>
        </v-tab-item>

        <v-tab-item key="tab-timeline">
            <myth-timeline/>
        </v-tab-item>

        <v-tab-item key="tab-other">
            <myth-other/>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    import MythTimeline from "./MythTimeline";
    import MythClassify from "./MythClassify";
    import MythOther from "./MythOther";
    export default {
        name: "MythComponent",
        components: {MythOther, MythClassify, MythTimeline}
    }
</script>

<style scoped>

</style>