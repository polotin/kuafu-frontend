<template>
    <v-container>
        <v-text-field placeholder="请输入查询内容" v-model="keyword"></v-text-field>
        <v-btn @click.stop="findWiki">搜索</v-btn>
        <p>{{result}}</p>
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "WikiPedia",
        data() {
            return {
                keyword: null,
                result: ''
            }
        },
        methods: {
            findWiki() {
                let self = this;
                let url = 'https://www.kuafu.online/wiki';

                axios.post(url, {
                    keyword: self.keyword
                })
                    .then(res => {
                        let data = res.data;
                        self.result = data;
                        console.log(data);
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }
        }
    }
</script>

<style scoped>

</style>