<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-timeline>
        <v-timeline-item
                v-for="n in 4"
                :key="n"
                large
        >
            <template v-slot:icon>
                <span>上古</span>
            </template>
            <v-card class="elevation-2">
                <v-card-title class="headline">Lorem ipsum</v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name: "MythTimeline"
    }
</script>

<style scoped>

</style>