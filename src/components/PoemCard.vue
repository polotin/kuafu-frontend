<template>
    <v-container>
        <v-card
                class="mx-auto"
                width="100%"
                style="background:linear-gradient(0deg, #FFF 0%,transparent 100%),
                linear-gradient(0deg, #FFF 0%,transparent 100%),
                linear-gradient(135deg, rgba(96, 96, 96, 0.21) 0%, rgba(96, 96, 96, 0.21) 50%,rgba(45, 45, 45, 0.21) 50%, rgba(45, 45, 45, 0.21) 100%),
                linear-gradient(0deg, rgba(220, 220, 220, 0.2) 0%, rgba(220, 220, 220, 0.2) 31%,rgba(200, 200, 200, 0.2) 31%, rgba(200, 200, 200, 0.2) 100%),
                linear-gradient(0deg, rgba(124, 124, 124, 0.26) 0%, rgba(124, 124, 124, 0.26) 15%,rgba(218, 218, 218, 0.26) 15%, rgba(218, 218, 218, 0.26) 100%),
                linear-gradient(45deg, rgba(157, 157, 157, 0.14) 0%, rgba(157, 157, 157, 0.14) 46%,rgba(26, 26, 26, 0.14) 46%, rgba(26, 26, 26, 0.14) 100%),
                linear-gradient(45deg, rgba(180, 180, 180, 0.1) 0%, rgba(180, 180, 180, 0.1) 45%,rgba(62, 62, 62, 0.1) 45%, rgba(62, 62, 62, 0.1) 100%),
                linear-gradient(135deg, rgba(33, 33, 33, 0.22) 0%, rgba(33, 33, 33, 0.22) 59%,rgba(164, 164, 164, 0.22) 59%, rgba(164, 164, 164, 0.22) 100%),
                linear-gradient(135deg, rgba(24, 24, 24, 0.11) 0%, rgba(24, 24, 24, 0.11) 71%,rgba(245, 245, 245, 0.11) 71%, rgba(245, 245, 245, 0.11) 100%),
                linear-gradient(0deg, rgba(5, 5, 5, 0.15) 0%, rgba(5, 5, 5, 0.15) 91%,rgba(50, 50, 50, 0.15) 91%, rgba(50, 50, 50, 0.15) 100%),
                linear-gradient(90deg, rgb(198, 198, 198),rgb(158, 158, 158));"
        >
            <v-list-item-content class="card-title">
                <v-list-item-title style="font-size: large; margin-bottom: 10px">天 问（节选）</v-list-item-title>

                <v-list-item-subtitle>
                    屈 原
                </v-list-item-subtitle>
            </v-list-item-content>

            <v-divider></v-divider>
            <div @click.stop="showTranslations">
                <v-card-text v-if="translations" class="tian-wen">
                    <p>邃古之初，谁传道之？</p>
                    <p>上下未形，何由考之？</p>
                    <p>冥昭瞢暗，谁能极之？</p>
                    <p>冯骥惟像，何以识之？</p>
                    <p>明明暗暗，惟时何为？</p>
                    <p>阴阳三合，何本何化？</p>
                    <p>圜则九重，孰营度之？</p>
                    <p>惟玆和功。孰初作之？</p>
                </v-card-text>
                <v-card-text v-else class="tian-wen-trans">
                    <p>邃古之初，谁传道之？</p>
                    <div class="text--primary">请问，关于远古的开头，谁个能够传授？</div>
                    <p>上下未形，何由考之？</p>
                    <div class="text--primary">那时天地未分，能亘古什么来考究？</div>
                    <p>冥昭瞢暗，谁能极之？</p>
                    <div class="text--primary">那时混混沌沌，谁个能够弄清？</div>
                    <p>冯骥惟像，何以识之？</p>
                    <div class="text--primary">有什么在回旋浮动，如何可以分明？</div>
                    <p>明明暗暗，惟时何为？</p>
                    <div class="text--primary">无敌的黑暗生出光明，这样的为的何故？</div>
                    <p>阴阳三合，何本何化？</p>
                    <div class="text--primary">阴阳二气，渗合而生，他们的来历又从何处？</div>
                    <p>圜则九重，孰营度之？</p>
                    <div class="text--primary">穹窿的天盖共有九层，是谁动手经营？</div>
                    <p>惟玆和功。孰初作之？</p>
                    <div class="text--primary">这样一个工程，何等伟大，谁个是最初的工人?</div>
                </v-card-text>
            </div>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "PoemCard",
        data() {
            return {
                translations: false
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
        text-align: center;
        font-family: "Songti SC", serif;
        font-weight: bolder;
    }

    .tian-wen {
        text-align: center;
        font-family: ZhuanShu, "Songti SC", sans-serif;
        font-size: larger;
        font-weight: normal;
    }

    .tian-wen p{
        color: black;
    }

    .tian-wen-trans{
        text-align: center;
        font-family: "Songti SC", serif;
        font-weight: bold;

    }

    .tian-wen-trans p{
        font-size: 1.2em;
        margin-bottom: 5px;
    }

    .text--primary{
        margin-bottom: 10px;
    }
</style>