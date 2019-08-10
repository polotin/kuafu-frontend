<template>
    <v-container>

        <v-card
                width="100%"
                class="mx-auto"
        >

            <div v-if="show">
                <transition name="fade">
                    <floating-button :figure="figure"></floating-button>
                </transition>
            </div>
            <div v-else>
                <v-speed-dial
                        top
                        right
                        absolute
                >
                    <template v-slot:activator>
                        <v-btn
                                color="indigo accent-1"
                                relative
                                small
                                dark
                                fab
                                elevation=0
                                @click="resize"
                        >
                            <v-icon v-if="enlarge">mdi-fullscreen-exit</v-icon>
                            <v-icon v-else>mdi-fullscreen</v-icon>
                        </v-btn>
                    </template>
                </v-speed-dial>
            </div>

            <v-card-title style="font-size: 1.2rem;">神话人物关系图</v-card-title>
            <v-divider></v-divider>
            <v-chart v-if="enlarge" :options="relationMap2" @click="onClick"/>
            <v-chart v-else :options="relationMap1" @click="onClick"/>
        </v-card>

    </v-container>
</template>

<script>
    import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
    // 手动引入 ECharts 各模块来减小打包体积
    import 'echarts/lib/chart/graph'
    import 'echarts/lib/component/tooltip'
    import 'echarts-gl'
    import data from '../assets/relations'
    import FloatingButton from "./FloatingButton";

    export default {
        name: "ChartDemo",
        components: {
            FloatingButton,
            'v-chart': ECharts
        },
        data() {
            let graph = data.data;
            let categories = [];
            for (let i = 0; i < 9; i++) {
                categories[i] = {
                    name: '类目' + i
                };
            }
            graph.nodes.forEach(function (node) {
                node.itemStyle = null;
                node.value = node.symbolSize;
                node.symbolSize *= 1.2;
                node.label = {
                    normal: {
                        show: node.symbolSize > 2
                    }
                };
                node.category = node.attributes.modularity_class;
            });
            let relationMap = (width, top) => {
                return {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            if (params.data.source) {//注意判断，else是将节点的文字也初始化成想要的格式
                                return '关系：<b>' + params.data.relation + '</b>';
                            } else {
                                return params.name;
                            }
                        }
                    },
                    legend: [{
                        // selectedMode: 'single',
                        data: categories.map(function (a) {
                            return a.name;
                        })
                    }],
                    animationEasingUpdate: 'quinticInOut',
                    series: [
                        {
                            name: 'Les Miserables',
                            type: 'graph',
                            layout: 'circular',
                            top: top,
                            width: width,
                            circular: {
                                rotateLabel: true
                            },
                            data: graph.nodes,
                            links: graph.links,
                            categories: categories,
                            roam: true,
                            focusNodeAdjacency: true,
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                    shadowBlur: 10,
                                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                                }
                            },
                            label: {
                                position: 'right',
                                formatter: '{b}'
                            },
                            // edgeLabel: {
                            //     normal: {
                            //         show: true,
                            //         position: 'middle',
                            //         formatter: function (x) {
                            //             return x.data.relation;
                            //         }
                            //     }
                            // },
                            lineStyle: {
                                color: 'source',
                                curveness: 0.3
                            },
                            emphasis: {
                                lineStyle: {
                                    width: 5
                                }
                            }
                        }
                    ],
                    animationDuration: 2000
                };
            };
            return {
                show: false,
                figure: "",
                enlarge: false,
                relationMap1: relationMap(300, "0"),
                relationMap2: relationMap(800, "15%")
            }
        },
        methods: {
            onClick(event) {
                if (event.data.name) {
                    this.figure = event.data.name;
                    this.show = true;
                } else {
                    this.figure = "";
                    this.show = false;
                }
            },
            resize() {
                this.enlarge = !this.enlarge;
            }
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
        height: 600px;
        margin-top: 30px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .v-speed-dial {
        margin-top: 20px;
    }
</style>