<template>
  <div>
    <div id="ScaSim" style="display: table-cell;;width: 600px;height: 300px;z-index: 2000" ></div>
  </div>
</template>

<script>
export default {
  name: 'scatter_simple',
  data () {
    return {}
  },
  mounted () {
    this.drawHistogarm()
  },
  methods: {
    drawHistogarm () { // 初始化echarts自由折线图实例
      let option
      let histogram = this.$echarts.init(document.getElementById('ScaSim'))
      option = {
        xAxis: {},
        yAxis: {},
        series: [{
          symbolSize: 20,
          data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [4.0, 4.26],
            [12.0, 10.84],
            [7.0, 4.82],
            [5.0, 5.68]
          ],
          itemStyle: {
            normal: {
              color: '#FC0517'
            }
          },
          type: 'scatter'
        }]
      }
      histogram.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
