<template>
    <v-container>

        <v-card
                width="100%"
                class="mx-auto"
        >
            <transition name="fade">>
                <floating-button v-if="show" :figure="figure"></floating-button>
            </transition>

            <v-card-title>les miserables</v-card-title>
            <v-divider></v-divider>
            <v-chart :options="relationMap" @click="onClick"/>
        </v-card>

    </v-container>
</template>

<script>
    import ECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

    // 手动引入 ECharts 各模块来减小打包体积
    import 'echarts/lib/chart/graph'
    import 'echarts/lib/component/tooltip'
    import 'echarts-gl'
    import data from '../assets/chart_data'
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
                node.symbolSize /= 1.5;
                node.label = {
                    normal: {
                        show: node.symbolSize > 10
                    }
                };
                node.category = node.attributes.modularity_class;
            });
            return {
                show: false,
                figure: "",
                relationMap: {
                    tooltip: {
                        trigger: 'item',
                        formatter: function (params) {
                            if (params.data.source) {//注意判断，else是将节点的文字也初始化成想要的格式
                                return '<b>_' + params.data.relation + '_</b>';
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
                            top:"30%",
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
                }
            }
        },
        methods: {
            onClick(event) {
                console.log(event.data.name);
                if (event.data.name) {
                    this.figure = event.data.name;
                    this.show = true;
                } else {
                    this.figure = "";
                    this.show = false;
                }
            },
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
        height: 550px;
        margin-top: 30px;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>