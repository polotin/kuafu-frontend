<template>
    <v-container>
        <v-layout column align-center>
            <v-layout dense>
                <v-switch v-model="popout" class="ma-2" label="Popout"></v-switch>
                <v-switch v-model="inset" class="ma-2" label="Inset"></v-switch>
                <v-switch v-model="multiple" class="ma-2" label="Multiple"></v-switch>
            </v-layout>

            <v-expansion-panels
                    :inset="inset"
                    :multiple="multiple"
                    focusable
            >
                <v-expansion-panel
                        v-for="item in chapters"
                >
                    <v-expansion-panel-header
                            class="classify-panel-header"
                    >{{item}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "MythClassify",
        data: () => ({
            popout: false,
            inset: false,
            multiple: false,
            chapters: ["原始社会前期的神话", "《山海经》的神话（上）", "《山海经》的神话（下）",
                "先秦及汉初文献中的神话", "汉代的感生神话及其他", "仙话及佛典中的神话", "历史人物的神话",
                "魏晋六朝的神话（上）", "魏晋六朝的神话（下）", "唐五代的神话", "宋元的神话", "明清的神话"],
        }),
    }
</script>

<style scoped>
    .classify-panel-header {
        /*background: " ";*/
    }
</style>