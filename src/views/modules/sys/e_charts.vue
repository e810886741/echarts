<template>
  <div  >
    <div id="myChart" style="height: 720px;width: 600px;top: 20px;left: 10px;"></div>
    <!-- v-on:click="getOp($event)" -->
  </div>
</template>
<script>
export default {
  name: 'ECharts',
  data: function () {
    return {
      xDecline: 1.5, // X轴递减基数
      yDecline: 13, // Y轴递减基数
      noise: {},
      data: [], // 热力图数据
      xData: [], // X轴数据
      yData: [], // Y轴数据
      x: null,
      y: null,
      z: null,
      option: {
        grid: {
          x: 80 // 图表左上角到左边界的距离
        },
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
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 19
          },
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          }
        }],
        yAxis: [],
        visualMap: {
          type: 'continuous',
          dimension: 2, // 依赖数据，data[2]
          min: 0,
          max: 700,
          calculable: false,
          realtime: false,
          pieces: [{min: 0, max: 700, color: '#FFFFFF'}],
          inRange: {
            color: ['#fee090', '#fdae61', '#f46d43', '#d73027']
          },
          outOfRange: {// 定义在选中范围外的视觉元素。
            color: ['#ccc']
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
  watch: {

  },
  mounted () {
    this.changeOption()
  },
  methods: {
    getOp (event) {
      this.changeOption()
      console.log(event)
    },
    // 改变热力图数据
    changeOption () {
      this.$http.get(
        '/static/data.json',
        {},
        {emulateJSON: true}
      ).then(function (res) {
        // 重新绘制热力图
        this.decline(res.data.data)
        this.option.series = []
        let dataCode = {
          silent: true,
          name: 'Gaussian',
          type: 'heatmap',
          data: [],
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1
            }
          },
          yAxisIndex: 0,
          progressive: 1000,
          animation: false
        }
        dataCode.data = this.data
        this.option.series.push(dataCode)
        dataCode = {
          type: 'scatter',
          hoverAnimation: true,
          symbolSize: 15,
          yAxisIndex: 0,
          data: res.data.data,
          // large: true,
          // largeThreshold: 5,
          itemStyle: {
            normal: {
              color: 'red'
            }
          }
        }
        this.option.series.push(dataCode)
        this.option.xAxis.data = this.xData
        let yA = {
          type: 'category',
          axisLabel: {
            interval: 1
          },
          data: this.yData,
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          }
        }
        let floor = []
        for (let y = 2; y <= 30; y++) {
          floor.push(y + '层')
        }
        let yA2 = {
          type: 'category',
          data: floor,
          position: 'right',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: { // 网格线
            show: false
          },
          axisLabel: {
            interval: 1,
            formatter: '{value}',
            margin: 30,
            textStyle: {
              align: 'right',
              baseline: 'middle',
              color: '#FEC97A'
            }
          }
        }
        let yA3 = {
          boundaryGap: true,
          type: 'category',
          data: this.yData,
          splitLine: { // 网格线
            show: false
          },
          axisTick: {
            inside: true,
            length: 20,
            lineStyle: {
              width: 1.5,
              type: 'dashed',
              color: '#FEC97A'
            },
            interval: function (index, value) {
              if (index < 5) {
                return false
              } if (index === 6) {
                return false
              } if (index > 7 && index < 10) {
                return false
              } if (index === 11) {
                return false
              } if (index === 13) {
                return false
              } if (index > 16 && index < 21) {
                return false
              } if (index === 23) {
                return false
              } if (index > 32 && index < 35) {
                return false
              } if (index > 35 && index < 27) {
                return false
              } if (index > 37 && index < 41) {
                return false
              } else {
                return true
              }
            }
          },
          position: 'left',
          offset: 40,
          axisLine: {
            lineStyle: {
              width: 1.5,
              type: 'dashed',
              color: '#FEC97A'
            }
          },
          axisLabel: {
            interval: 0,
            textStyle: {
              color: '#FEC97A'
            },
            formatter: function (value, index) { // Y轴的自定义刻度值，对应上图
              if (index < 5) {
                return ''
              } if (index === 6) {
                return ''
              } if (index > 7 && index < 10) {
                return ''
              } if (index === 11) {
                return ''
              } if (index === 13) {
                return ''
              } if (index > 16 && index < 21) {
                return ''
              } if (index === 23) {
                return ''
              } if (index > 32 && index < 35) {
                return ''
              } if (index > 35 && index < 27) {
                return ''
              } if (index > 37 && index < 40) {
                return ''
              } else {
                return value
              }
            }
          }
        }
        // this.option.yAxis.data = this.yData
        this.option.yAxis.push(yA)
        this.option.yAxis.push(yA2)
        this.option.yAxis.push(yA3)
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption(this.option, true) // true,覆盖之前的数据;false,添加新数据
      })
    },
    // 绘制热力图
    decline (dataList) {
      let resultData = []
      this.xData = []
      this.yData = []
      for (let y = 0; y <= 40; y++) {
        this.yData.push(y + 'm')
        let rdy = []
        for (let x = 0; x <= 360; x++) {
          rdy.push(0)
        }
        resultData.push(rdy)
        rdy = []
      }
      for (let x = 0; x <= 360; x++) {
        this.xData.push(x)
      }
      // let i in dataList
      for (let i = 0; i < 10; i++) {
        for (let y = 0; y <= 40; y++) {
          for (let x = 0; x <= 360; x++) {
            let minuend = this.xDecline * Math.abs(dataList[i][0] - x) + this.yDecline * Math.abs(dataList[i][1] - y)
            let newValue
            if (minuend < dataList[i][2]) {
              newValue = dataList[i][2] - minuend
            }
            if (newValue > resultData[y][x]) {
              resultData[y][x] = newValue
            }
          }
        }
      }
      this.data = []
      for (let y = 0; y <= 40; y++) {
        for (let x = 0; x <= 360; x++) {
          this.data.push([x, y, resultData[y][x]])
        }
      }
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
