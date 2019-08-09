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
        </v-card>

        <back-totop></back-totop>
    </v-container>
</template>

<script>
    import BackTotop from "./BackTotop";

    let material_colors = ["red", "pink", "purple", "deep-purple",
        "indigo", "blue", "light-blue", "cyan", "teal",
        "green", "light-green", "lime", "amber", "orange",
        "deep-orange", "brown", "blue-grey", "grey"];
    let tales = ["世界的构成", "造物主", "盘古与盘瓠", "女娲的功绩", "婚姻之神的女娲", "女娲与伏羲", "天梯",
        "伏羲与燧人", "廪君与盐水女神", "填海、追日", " 断首、触山", "归墟五神山", "发现药草的神农",
        "炎帝和他的后裔", "炎帝诸女", "黄帝和昆仑山", "视肉、离朱", "神国最高统治者", "黄炎之争", "炎帝与灶神",
        "炎帝与灶神", "战神蚩尤", "黄帝神话的仙话化", "黄帝制器", "蚕桑的神话", "牛郎织女", "牛女神话的近亲和旁支",
        "少昊鸟国", "少昊神话的西移", "颛顼“绝地天通”", "人神之间的颛顼", "疫神帝颛顼", "《山海经》所有怪物",
        "帝俊的出现", "创造发明者", "使四鸟", "帝俊、帝喾和舜", "始祖的诞生", "尧射日及其他", "沉湮的丹朱神话",
        " 舜服野象"];
    export default {
        name: "MythOther",
        components: {BackTotop},
        data() {
            return {
                story: tales,
                rows: Math.ceil(tales.length / 3),
                colors: material_colors,
                color_num: material_colors.length - 1,
            }
        },
    }
</script>

<style scoped>

</style>