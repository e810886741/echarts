<template>
  <div>
    <div id="freeLine" style="display: table-cell;;width: 600px;height: 300px" ></div>
  </div>
</template>
<script>
export default {
  name: 'Histogram',
  data () {
    return {}
  },
  mounted () {
    this.drawHistogarm()
  },
  methods: {
    drawHistogarm () { // 初始化echarts自由折线图实例
      let option
      let histogram = this.$echarts.init(document.getElementById('freeLine'))
      option = {
        xAxis: {
          max: 2,
          show: false,
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          }
        },
        yAxis: {
          show: false,
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          }
        },
        series: [{
          data: [
            [0.01, 12],
            [0.03, 11],
            [0.01, 10],
            [0.03, 9],
            [0.01, 8],
            [0.01, 7],
            [0.03, 6],
            [0.01, 5],
            [0.01, 4],
            [0.03, 3],
            [0.01, 2],
            [0.03, 1],
            [0.1, 1.5],
            [0.2, 1.7],
            [0.3, 1.5],
            [0.4, 1.7],
            [0.5, 1.5],
            [0.6, 1.7],
            [0.7, 1.5],
            [0.8, 1.7],
            [0.9, 1.5],
            [1.0, 1.7],
            [1.1, 1.5],
            [1.21, 1],
            [1.19, 2],
            [1.21, 3],
            [1.19, 4],
            [1.21, 5],
            [1.21, 6],
            [1.19, 7],
            [1.21, 8],
            [1.21, 9],
            [1.19, 10],
            [1.21, 11],
            [1.19, 12]
          ],
          type: 'line',
          symbol: 'rectangle',
          symbolSize: 12,
          itemStyle: {
            normal: {
              color: '#FFD306',
              lineStyle: {
                color: '#FFD306'
              }
            }
          }
        }]
      }
      histogram.setOption(option)
    }
  }
}
</script>

<style scoped>
  #histogramChart {
    width: 500px;
    height: 500px;
  }
</style>
