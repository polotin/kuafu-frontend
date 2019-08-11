<template>
    <v-container>

        <v-card
                class="mx-auto"
                width="100%"
        >
            <v-img
                    :src="bgimg"
                    :gradient="sidebarOverlayGradiant"
                    height="100%"
            >
                <v-list-item-content class="card-title">
                    <v-list-item-title style="font-size: large; margin-bottom: 10px">天 问（节选）</v-list-item-title>
                    <v-list-item-subtitle>
                        屈 原
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-divider style="border-color: rgba(255,255,255,0.5)"></v-divider>
                <div @click.stop="showTranslations" class="overflow-y-auto" style="height: 450px; padding-bottom: 20px">
                    <v-card-text v-if="translations" class="tian-wen">
                        <p>邃古之初，谁传道之？</p>
                        <p>上下未形，何由考之？</p>
                        <p>冥昭瞢暗，谁能极之？</p>
                        <p>冯骥惟像，何以识之？</p>
                        <p>明明暗暗，惟时何为？</p>
                        <p>阴阳三合，何本何化？</p>
                        <p>圜则九重，孰营度之？</p>
                        <p>惟兹何功。孰初作之？</p>
                    </v-card-text>
                    <v-card-text v-else class="tian-wen-trans">
                        <p>邃古之初，谁传道之？</p>
                        <div class="translat">请问，关于远古的开头，谁个能够传授？</div>
                        <p>上下未形，何由考之？</p>
                        <div class="translat">那时天地未分，能亘古什么来考究？</div>
                        <p>冥昭瞢暗，谁能极之？</p>
                        <div class="translat">那时混混沌沌，谁个能够弄清？</div>
                        <p>冯骥惟像，何以识之？</p>
                        <div class="translat">有什么在回旋浮动，如何可以分明？</div>
                        <p>明明暗暗，惟时何为？</p>
                        <div class="translat">无敌的黑暗生出光明，这样的为的何故？</div>
                        <p>阴阳三合，何本何化？</p>
                        <div class="translat">阴阳二气，渗合而生，他们的来历又从何处？</div>
                        <p>圜则九重，孰营度之？</p>
                        <div class="translat">穹窿的天盖共有九层，是谁动手经营？</div>
                        <p>惟兹何功。孰初作之？</p>
                        <div class="translat">这样一个工程，何等伟大，谁个是最初的工人?</div>
                    </v-card-text>
                </div>
            </v-img>

        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "PoemCard",
        data() {
            return {
                translations: true,
                bgimg: require('../assets/tianwen.jpg'),
                sidebarOverlayGradiant: "rgba(20, 20, 20, 0.6), rgba(20, 20, 20, 0.6)"
            }
        },
        methods: {
            showTranslations() {
                this.translations = !this.translations;
            }
        }
    }
</script>

<style scoped>
    .card-title {
        width: 100%;
        padding-top: 20px;
        text-align: center;
        font-family: "Songti SC", serif;
        font-weight: bolder;
        color: #fff;
    }

    .tian-wen {
        text-align: center;
        font-family: ZhuanShu, "Songti SC", sans-serif;
        font-size: 1.5em;
        font-weight: normal;
    }

    .tian-wen p {
        color: white;
        margin-top: 25px;
    }

    .tian-wen-trans {
        text-align: center;
        font-family: "Songti SC", serif;
        font-weight: bold;
    }

    .tian-wen-trans p {
        font-size: 1.2em;
        margin-bottom: 5px;
        color: white;
    }

    .translat {
        margin-bottom: 10px;
        color: #e0dee2;
    }
    .myscroll {
        overflow-y: auto;
    }
</style>