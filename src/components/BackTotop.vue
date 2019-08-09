<template>
    <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            small
            color="error"
            @click="toTop"
    >
        <v-icon>$vuetify.icons.top</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "BackTotop",
        data: () => ({
            fab: false
        }),
        methods: {
            onScroll(e) {
                if (typeof window === 'undefined') return;
                const top = window.pageYOffset || e.target.scrollTop || 0;
                this.fab = top > 30;
            },
            toTop() {
                this.$vuetify.goTo(0);
            }
        }
    }
</script>

<style scoped>

</style>