<template>
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
                                img="./img/fabric.png"
                                :color="active ? 'primary' : colors[Math.round(Math.random()*(color_num-1))]"
                                class="d-flex align-center"
                                style="background-repeat: repeat; background-size: initial;"
                                height="100"
                                @click="toggle"
                        >
                            <v-scroll-y-transition>
                                <div
                                        v-if="active"
                                        style="color: white"
                                        class="font-weight-bold flex-grow-1 text-center"
                                >
                                    {{story[3*(r-1) + n-1]}}
                                </div>
                                <v-card-text
                                        v-else
                                        class="flex-grow-1 text-center"
                                >
                                    {{story[3*(r-1) + n-1]}}
                                </v-card-text>
                            </v-scroll-y-transition>
                        </v-card>
                    </v-item>
                </v-flex>
            </v-layout>
        </v-container>
    </v-item-group>
</template>

<script>
    let material_colors = ["red", "pink", "purple", "deep-purple",
        "indigo", "blue", "light-blue", "cyan", "teal",
        "green", "light-green", "lime", "amber", "orange",
        "deep-orange", "brown", "blue-grey", "grey"];
    export default {
        name: "MythOther",
        data() {
            return {
                story: ["世界的构成", "造物主", "盘古与盘瓠", "女娲的功绩", "婚姻之神的女娲", "女娲与伏羲", "天梯"],
                rows: 3,
                colors: material_colors,
                color_num: material_colors.length - 1,
            }
        },
    }
</script>

<style scoped>

</style>