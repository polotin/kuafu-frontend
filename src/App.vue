<template>
    <!--<Home/>-->

    <div id="app">
        <router-view/>
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
        data: () => ({
            //
        }),
    };
</script>
