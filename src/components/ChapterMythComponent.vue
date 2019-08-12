<template>
    <div>
        <v-expansion-panels>
            <v-expansion-panel
                    v-for="(item, index) in mythListInChapter"
                    :key="index"
            >
                <v-expansion-panel-header>{{item.title}}</v-expansion-panel-header>
                <v-expansion-panel-content
                        v-for="(story, index) in item.content"
                        :key="index"
                >
                    <a @click="showStoryContent(story)">{{story.title}}</a>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>


        <v-dialog v-model="dialog" width="100%">
            <v-card
                    class="mx-auto"
                    width="100%"
            >
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="headline">{{astory.title}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-card-text style="text-align: justify; text-indent: 2em;">
<!--                    <p v-for="(summary, index) in wiki.summary" :key="index" class="wiki-summary">-->
<!--                        <span v-show="false">{{sIndex = 0}}</span>-->
<!--                        <span v-for="(piece, pIndex) in summary.pieces" :key="pIndex">-->
<!--                            <span v-if="piece != '#'">-->
<!--                                {{piece}}-->
<!--                            </span>-->
<!--                            <span v-else style="color: dodgerblue"-->
<!--                                  @click="showBook">《{{summary.books[sIndex++]}}》</span>-->
<!--                        </span>-->
<!--                    </p>-->
                    <p>{{astory.content}}</p>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "ChapterMythComponent",
        data: () => ({
            astory: {},
            dialog: false,
        }),
        props: {
            mythListInChapter: {type: Array}
        },
        methods: {
            showStoryContent(astory) {
                let self = this;
                self.dialog = true;
                self.astory = astory;
            }
        }
    }
</script>

<style scoped>

</style>