<template>
    <v-container>
        <v-card
                width="100%"
                class="mx-auto"
        >
            <v-card-title>les miserables</v-card-title>
            <v-divider></v-divider>
            <v-chart :options="relationMap"/>
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

    alert(data.data.nodes.length + ", " + data.data.links.length);

    export default {
        name: "ChartDemo",
        components: {
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
                relationMap: {
                    tooltip: {},
                    legend: [{
                        // selectedMode: 'single',
                        data: categories.map(function (a) {
                            return a.name;
                        })
                    }],
                    animationDuration: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series: [
                        {
                            name: 'Les Miserables',
                            type: 'graph',
                            layout: 'circular',
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
        }
    }
</script>

<style scoped>
    .echarts {
        width: 100%;
        height: 500px;
    }
</style>