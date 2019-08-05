<template>
    <v-tabs>
        <v-tab href="tab-1">维基百科 demo</v-tab>

        <v-tab-item value="tab-1">
            <v-container>
                <v-text-field placeholder="请输入查询内容" v-model="keyword"></v-text-field>
                <v-btn @click.stop="findPoems">搜索</v-btn>
                <p>{{result}}</p>
            </v-container>
        </v-tab-item>

    </v-tabs>
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
            findPoems() {
                let self = this;
                let url = 'https://www.kuafu.online/poems';

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