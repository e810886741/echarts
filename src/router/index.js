import Vue from 'vue'
import Router from 'vue-router'
import ECharts from '../views/modules/sys/e_charts'
import Test from '../views/modules/sys/line_chart'
import HightCharts from '../views/modules/sys/hight_charts'
import Main from '../views/modules/sys/main'
import CustomPolar from '../views/modules/sys/custom_polar'
import Line from '../views/modules/sys/line'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/ECharts',
      name: 'ECharts',
      component: ECharts
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/HightCharts',
      name: 'HightCharts',
      component: HightCharts
    },
    {
      path: '/CustomPolar',
      name: 'CustomPolar',
      component: CustomPolar
    },
    {
      path: '/Line',
      name: 'Line',
      component: Line
    }
  ]
})
