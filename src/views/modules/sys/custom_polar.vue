<template>
  <div id="CustomPolar" style="height: 300px;width: 300px;"></div>
</template>
<script>
export default {
  name: 'CustomPolar',
  data: function () {
    return {
      app: {},
      noise: {},
      // data: [[0, 0, 0] == data: [[days[0], hours[0], visualMap]
      data: [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]],
      hours: [],
      days: [],
      x: null,
      y: null,
      z: null,
      option: {
        legend: {
          data: ['Punch Card']
        },
        polar: {},
        textStyle: {
          color: '#f8f8f8' // 值域文字颜色
        },
        tooltip: {
          trigger: 'item',
          confine: true
          // formatter: (p) => { // 自定义提示信息
          //   let dataCon = p.data
          //   let txtCon = '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(137,189,218,1);\'></span>' + dataCon[1] + ':' + dataCon[2]
          //   return txtCon
          // }
        },
        angleAxis: {
          show: false,
          type: 'category',
          data: [],
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#ddd',
              type: 'dashed'
            }
          },
          axisLine: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          data: [],
          axisLabel: {
            interval: 4
          },
          z: 100,
          axisLine: {
            show: false
          }
        },
        visualMap: {
          show: false,
          type: 'continuous',
          dimension: 2, // 依赖数据，data[2]
          min: 0,
          max: 15,
          calculable: true,
          realtime: false,
          inRange: {
            color: ['#fee090', '#fdae61', '#f46d43', '#d73027']
          },
          align: 'bottom',
          text: ['', ''],
          hoverLink: false,
          top: 'bottom',
          left: '35%',
          orient: 'horizontal',
          textStyle: {
            color: '#f8f8f8' // 值域文字颜色
          }
        },
        series: []
      }
    }
  },
  mounted () {
    for (let z = 0; z <= 25; z++) {
      this.days.push(z.toString())
    }
    for (let i = 0; i < 16; i++) {
      this.hours.push(i.toString())
      for (let j = 0; j < 25; j++) {
        let co = [j, i, 25 - j]
        this.data.push(co)
      }
    }
    this.$nextTick(() => {
      let dataCode = {
        silent: true,
        name: 'Gaussian',
        type: 'custom',
        coordinateSystem: 'polar',
        data: [],
        itemStyle: {
          color: '#d14a61'
        },
        renderItem: function (params, api) {
          let values = [api.value(0), api.value(1)]
          let coord = api.coord(values)
          let size = api.size([1, 1], values)
          return {
            type: 'sector',
            shape: {
              cx: params.coordSys.cx,
              cy: params.coordSys.cy,
              r0: coord[2] - size[0] / 2,
              r: coord[2] + size[0] / 2,
              startAngle: -(coord[3] + size[1] / 2),
              endAngle: -(coord[3] - size[1] / 2)
            },
            style: api.style({
              fill: api.visual('color')
            })
          }
        },
        emphasis: {
          itemStyle: {
            borderColor: '#333',
            borderWidth: 1
          }
        },
        progressive: 1000,
        animation: false
      }
      dataCode.data = this.data
      this.option.series.push(dataCode)
      this.option.series.push(dataCode)
      dataCode = {
        symbolSize: 10,
        visualMap: false,
        coordinateSystem: 'polar',
        animationDelay: function (idx) {
          return idx * 5
        },
        data: [
          [10, 10, 0],
          [15, 10, 0],
          [10, 20, 5],
          [15, 15, 10],
          [10, 15, 0],
          [20, 25, 15]
        ],
        large: true,
        largeThreshold: 5,
        itemStyle: {
          color: '#ff0000'
        },
        type: 'scatter'
      }
      this.option.series.push(dataCode)
      this.option.angleAxis.data = this.hours
      this.option.radiusAxis.data = this.days
      this.initChart()
    })
  },
  methods: {
    initChart () {
      let CustomPolar = this.$echarts.init(document.getElementById('CustomPolar'))
      CustomPolar.setOption(this.option)
    }
  }
}
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
