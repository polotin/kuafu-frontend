<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-timeline dense>
        <v-timeline-item
                v-for="(node, nodeIndex) in nodes"
                :key="nodeIndex"
                large
                color="orange"
        >
            <template v-slot:icon>
                <span style="font-weight: bold;"
                      :style="{
                      'font-size':(node.node.length<3?node.node.length<2?'25':'17':'10') + 'px',
                      'font-family': node.font}">
                    {{node.node}}
                </span>
            </template>
            <v-card width="95%">
                <!--:color="nodeColors[nodeIndex/nodeColors.length]"-->
                <v-card-title class="headline">{{node.title}}</v-card-title>
                <v-card-text>
                    {{node.intro}}
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>
<script>
    import {nodes, nodeColors} from '../js/timeline'

    export default {
        name: "MythTimeline",
        data() {
            return {
                nodes: [],
                nodeColors: []
            }
        },

        mounted() {
            this.nodes = JSON.parse(nodes);
            this.nodeColors = nodeColors;
        }
    }
</script>

<style scoped>

</style>