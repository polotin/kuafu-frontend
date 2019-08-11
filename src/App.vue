<template>
    <!--<Home/>-->

    <div id="app">
        <router-view v-if="isRouterAlive"/>
    </div>
</template>

<script>

    import Home from "@/views/Home";
    import Wiki from "@/views/Wiki";

    export default {
        name: 'App',
        components: {
            Home,
            Wiki
        },
        provide() {
            return {
                reload: this.reload
            }
        },
        data: () => ({
            isRouterAlive: true
        }),
        methods: {
            reload() {
                this.isRouterAlive = false;
                this.$nextTick(() => {
                    this.isRouterAlive = true
                });
            }
        }
    };
</script>
