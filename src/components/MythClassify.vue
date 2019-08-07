<template>
    <v-container>
        <!--        <v-layout column align-center>-->
        <!--            <v-layout dense>-->
        <!--                <v-switch v-model="popout" class="ma-2" label="Popout"></v-switch>-->
        <!--                <v-switch v-model="inset" class="ma-2" label="Inset"></v-switch>-->
        <!--                <v-switch v-model="multiple" class="ma-2" label="Multiple"></v-switch>-->
        <!--            </v-layout>-->

        <!--            <v-expansion-panels-->
        <!--                    :inset="inset"-->
        <!--                    :multiple="multiple"-->
        <!--                    focusable-->
        <!--            >-->
        <!--                <v-expansion-panel-->
        <!--                        v-for="item in chapters"-->
        <!--                >-->
        <!--                    <v-expansion-panel-header-->
        <!--                            class="classify-panel-header"-->
        <!--                    >{{item}}-->
        <!--                    </v-expansion-panel-header>-->
        <!--                    <v-expansion-panel-content>-->
        <!--                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut-->
        <!--                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco-->
        <!--                        laboris nisi ut aliquip ex ea commodo consequat.-->
        <!--                    </v-expansion-panel-content>-->
        <!--                </v-expansion-panel>-->
        <!--            </v-expansion-panels>-->
        <!--        </v-layout>-->

        <v-card
                max-width="100%"
                class="mx-auto"
        >

            <v-container
                    class="pa-2"
                    fluid
                    grid-list-md
            >
                <v-layout column>

                    <v-flex
                            v-for="(item, i) in items"
                            :key="i"
                    >
                        <v-card
                                img="./img/arches.png"
                                :color="item.color"
                                style="background-repeat: repeat; background-size: initial;"
                                dark
                        >
                            <v-list-item three-line>
                                <v-list-item-content class="align-self-start">
                                    <v-list-item-title
                                            class="headline mb-2"
                                            v-text="item.title"
                                    ></v-list-item-title>

                                    <v-list-item-subtitle v-text="item.artist"></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-avatar
                                        size="125"
                                        tile
                                >
                                    <v-img :src="item.src"></v-img>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>

    </v-container>
</template>

<script>
    let material_colors = ["red", "pink", "purple", "deep-purple",
        "indigo", "blue", "light-blue", "cyan", "teal",
        "green", "light-green", "lime", "amber", "orange",
        "deep-orange", "brown", "blue-grey", "grey"];
    let myth_periods = ["开辟篇", "黄炎篇", "尧舜篇", "羿禹篇", "夏殷篇", "周秦篇"];
    let pics = [require('../assets/myth_period4.jpg'), require('../assets/myth_period1.jpg'), require('../assets/myth_period5.jpg'),
        require('../assets/myth_period2.jpg'), require('../assets/myth_period6.jpg'), require('../assets/myth_period3.jpg')];
    let items = [];
    for (let i = 0; i < myth_periods.length; i++) {
        let item = {
            color: material_colors[i],
            src: pics[i],
            title: myth_periods[i],
            artist: 'A Tale As Old As Time'
        };
        items.push(item);
    }
    export default {
        name: "MythClassify",
        data: () => ({
            popout: false,
            inset: false,
            multiple: false,
            // chapters: ["原始社会前期的神话", "《山海经》的神话（上）", "《山海经》的神话（下）",
            //     "先秦及汉初文献中的神话", "汉代的感生神话及其他", "仙话及佛典中的神话", "历史人物的神话",
            //     "魏晋六朝的神话（上）", "魏晋六朝的神话（下）", "唐五代的神话", "宋元的神话", "明清的神话"],
            items: items,
        }),
    }
</script>

<style scoped>
    .classify-panel-header {
        /*background: " ";*/
    }
</style>