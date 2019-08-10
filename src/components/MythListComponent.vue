<template>
    <v-container>
        <v-card v-for="(myth, index) in mythList" :key="index" style="margin-top: 10px;" @click.stop="showMythDetail(myth.id)">
            <v-card-title class="headline">{{myth.title}}</v-card-title>
            <v-card-text>
                {{myth.intro}}
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
            showMythDetail(id) {
                let self = this;
                self.$router.push({
                    path: '/myth/detail',
                    query: {
                        id: id
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>