<template>
    <v-expansion-panels>
        <v-expansion-panel light class="elevation-0">
            <v-expansion-panel-header>搜索建议</v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-chip-group
                        column
                        active-class="primary--text"
                >
                    <v-chip v-for="tag in tags" :key="tag" small @click="toInput(tag)">
                        {{ tag }}
                    </v-chip>
                </v-chip-group>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>

</template>

<script>
    export default {
        name: "SearchSuggestions",
        data: () => ({
            tags: [
                '女娲', '伏羲', '句芒', '廪君', '舜', '重', '黎', '精卫', '夸父', '刑天', '共工',  '太子长琴','神农', '炎帝', '祝融',
                '吴回', '伯陵', '黄帝', '尧','颛顼', '玄珠', '奇相', '蚩尤', '嫘祖', '西王母',  '牛郎', '织女',
                '少昊', '帝俊', '帝喾', '蓐收', '羿', '倍伐', '台骀', '穷奇', '老童',
                '梼杌 ', '鲧', '穷鬼', '穷蝉', '玄冥', '禺强', '彭祖', '羲和', '晏龙', '琴瑟', '姜嫄',
                '后稷', '娥皇', '女英',  '丹朱', '商均', '瞽叟', '㪙手', '河伯',
                '嫦娥', '宓妃','东王公', '逢蒙', '相繇', '后土'
            ],
        }),
        methods: {
            toInput(tag){
                this.$emit('tagdata', tag);
            }
        }
    }
</script>

<style scoped>

</style>