<template>
    <v-container>
        <v-card v-for="(myth, index) in mythList" :key="index" style="margin-top: 10px;"
                @click.stop="showMythDetail(myth.id, myth.type)">
            <v-card-title style="font-size: 1.25em">{{myth.title}}</v-card-title>
            <v-card-text style="text-align: justify; text-indent: 2em;" v-html="myth.intro">
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "MythListComponent",
        props: {
            mythList: {type: Array}
        },
        methods: {
            showMythDetail(id, type) {
                let self = this;
                self.$router.push({
                    path: '/myth/detail',
                    query: {
                        id: id,
                        type: type
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>