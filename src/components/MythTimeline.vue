<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-timeline dense>
        <v-timeline-item
                v-for="(node, nodeIndex) in nodes"
                :key="nodeIndex"
                fill-dot
                :color="nodeColors[Math.round(Math.random()*(nodeColors.length-1))]"
        >
            <template v-slot:icon>
                <span style="font-weight: bold;"
                      :style="{
                      'font-size':(node.node.length<3?node.node.length<2?'25':'15':'10') + 'px',
                      'font-family': node.font}">
                    {{node.node}}
                </span>
            </template>
            <v-card width="95%" @click.stop="showMythList(node.type)">
                <v-card-title style="font-size: 1.25em;">{{node.title}}</v-card-title>
                <v-card-text style="text-align: justify; text-indent: 2em;">
                    {{node.intro}}
                </v-card-text>
            </v-card>
        </v-timeline-item>
        <back-totop></back-totop>
    </v-timeline>
</template>
<script>
    import {nodes, nodeColors} from '../js/timeline';
    import BackTotop from "./BackTotop";

    export default {
        name: "MythTimeline",
        components: {BackTotop},
        data() {
            return {
                nodes: [],
                nodeColors: []
            }
        },
        mounted() {
            this.nodes = JSON.parse(nodes);
            this.nodeColors = nodeColors;
        },
        methods: {
            showMythList(type) {
                let self = this;
                self.$router
                    .push({
                        path: '/myth/list',
                        nam: 'mythList',
                        query: {
                            type: type
                        }
                    });
            }
        }
    }
</script>

<style scoped>

</style>