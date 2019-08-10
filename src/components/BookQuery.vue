<template>
    <a v-on:click="clicked">
        {{ this.name }}
    </a>
</template>

<script>
    export default {
        name: "BookQuery",
        props: ['name'],
        data() {
            return {
                test: 'test'
            }
        },
        methods: {
            clicked: function () {
                alert(this.name);
            }
        }

    }
</script>

<style scoped>

</style>