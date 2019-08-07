<template>
    <v-tabs grow>
        <v-tab key="tab-timeline">时间线</v-tab>
        <v-tab key="tab-classify">分类</v-tab>
        <v-tab key="tab-other">其他</v-tab>
        <v-tab-item key="tab-timeline">
            <myth-timeline/>
        </v-tab-item>

        <v-tab-item key="tab-classify">
            <myth-classify/>
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