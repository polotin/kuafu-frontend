<template>
    <v-container>
        <v-card>
            <v-item-group mandatory>
                <v-container grid-list-md>
                    <v-layout wrap v-for="r in rows"
                              :key="r">
                        <v-flex
                                v-for="n in 3"
                                :key="n"
                                xs4
                                md4
                        >
                            <v-item v-slot:default="{ active, toggle }">
                                <v-card
                                        :img="active? './img/gray-floral.png' : './img/fabric.png'"
                                        :color="active ? 'blue darken-4' : colors[Math.round(Math.random()*(color_num-1))]"
                                        :elevation="active ? 20 : 2"
                                        class="d-flex align-center"
                                        style="background-repeat: repeat; background-size: initial;"
                                        height="100"
                                        @click="toggle"
                                        @click.stop="showStoryContent(story[3*(r-1) + n-1])"
                                >
                                    <v-scroll-y-transition>
                                        <div
                                                v-if="active"
                                                style="color: white"
                                                class="font-weight-bold flex-grow-1 text-center"
                                        >
                                            {{titles[3*(r-1) + n-1]}}
                                        </div>
                                        <v-card-text
                                                v-else
                                                class="flex-grow-1 text-center"
                                        >
                                            {{titles[3*(r-1) + n-1]}}
                                        </v-card-text>
                                    </v-scroll-y-transition>
                                </v-card>
                            </v-item>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-item-group>
        </v-card>

        <v-dialog v-model="dialog" width="100%">
            <v-card
                    class="mx-auto"
                    width="100%"
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title style="font-size: 1.25em">{{dialog_story.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-card-text style="text-align: justify; text-indent: 2em; height: 400px">
                    <p v-html="dialog_story.content"></p>
                </v-card-text>
            </v-card>
        </v-dialog>

        <back-totop></back-totop>
    </v-container>
</template>

<script>
    import BackTotop from "./BackTotop";
    import {allStories, material_colors, story_titles} from "../js/stories";


    export default {
        name: "MythOther",
        components: {BackTotop},
        data() {
            return {
                dialog: false,
                titles: story_titles,
                story: allStories,
                rows: Math.ceil(allStories.length / 3),
                colors: material_colors,
                color_num: material_colors.length - 1,
                dialog_story: allStories[0]
            }
        },
        methods: {
            showStoryContent(story) {
                if(story==null){
                    alert("神话数据库完善中...");
                    return;
                }
                let self = this;
                self.dialog_story = story;
                self.dialog = true;
            }
        }
    }
</script>

<style scoped>

</style>