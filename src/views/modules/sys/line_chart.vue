<template>
  <div style="background-color: transparent;">
    <div id="histogramChart" style="background-color: transparent;width: 400px;height: 360px;margin-left: 100px;top: 30px">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Histogram',
  data () {
    return {}
  },
  mounted () {
    // 在mounted生命周期函数中实例化echarts对象
    this.drawHistogarm()
  },
  methods: {
    drawHistogarm () {
      // 初始化echarts实例
      let histogram = this.$echarts.init(document.getElementById('histogramChart'))
      let option = {
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: '炉顶十字测温',
          textStyle: {// 设置文字样式
            color: 'white'
          }
        },
        xAxis: [{
          axisLabel: {
            textStyle: {
              color: '#f46d43'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          type: 'category',
          boundaryGap: true,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
          axisTick: { // y轴刻度线
            show: false,
            interval: 0,
            length: 5,
            alignWithLabel: true
          },
          splitLine: { // 网格线
            show: false
          }
        },
        {
          axisLabel: {
            textStyle: {
              color: 'rgba(0,255,255,0.71)'
            },
            formatter: function (value) {
              return '\n' + value
            }
          },
          position: 'bottom',
          axisLine: {
            show: false
          },
          type: 'category',
          boundaryGap: true,
          data: ['14', '15', '16', '17', '18', '19', '7', '20', '21', '22', '23', '24', '25'],
          axisTick: { // y轴刻度线
            show: false,
            length: 25,
            alignWithLabel: true
          },
          splitLine: { // 网格线
            show: false
          }
        }],
        yAxis: {
          axisLabel: {
            textStyle: {
              color: 'white'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          max: 1000,
          interval: 200,
          type: 'value',
          axisTick: { // y轴刻度线
            show: false
          },
          splitLine: { // 网格线
            show: false
          }
        },
        series: [{
          name: '0° - 180°',
          xAxisIndex: 0,
          data: [130, 65, 75, 90, 110, 410, 830, 480, 80, 70, 58, 50, 190],
          type: 'line',
          symbol: 'circle',
          symbolSize: 8, // 拐点圆的大小
          itemStyle: {
            normal: {
              color: '#FFA500', // 改变折线颜色,
              lineStyle: {
                color: '#FFA500' // 改变折线颜色
              }
            }
          }
        },
        {
          name: '90° - 270°',
          xAxisIndex: 1,
          data: [180, 60, 70, 90, 110, 520, 830, 500, 80, 70, 60, 50, 220],
          type: 'line',
          symbol: 'circle',
          symbolSize: 8, // 拐点圆的大小
          itemStyle: {
            normal: {
              color: '#87CEFA', // 改变折线颜色,
              lineStyle: {
                color: '#87CEFA' // 改变折线颜色
              }
            }
          }
        }
        ],
        legend: {
          x: 'right', // 可设定图例在左、右、居中
          y: 'top', // 可设定图例在上、下、居中
          padding: [20, 0, 0, 0], // 可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          data: ['0° - 180°', '90° - 270°'],
          textStyle: {
            color: 'white'
          }
        }
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
