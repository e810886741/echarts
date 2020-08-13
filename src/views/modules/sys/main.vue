<template>
  <div>
    <div style="background-color: transparent;min-width: 1850px;height: 150px;margin-top: -10px">
      <div class="mainTitle">
      </div>
      <div class="mainTable">
        <el-table
          :cell-class-name="addClass"
          class="customer-table"
          :show-header="false"
          :data="cokeGear"
          style="text-align: center"
          border>
          <el-table-column
            prop="title"
            :width="140"
            label="焦炭档位（历史）">
          </el-table-column>
          <el-table-column
            v-for="(item,index) in titleList"
            :prop="item.prop"
            :key="item.key"
            :width="65"
            :label="item.label">
            <template slot-scope="scope">
              <span v-if="scope.row.data[index].flag == 1" style="color: rgba(0,255,255,0.71)">{{scope.row.data[index].value}}</span>
              <span v-if="scope.row.data[index].flag == 2" style="color: #f46d43">{{scope.row.data[index].value}}</span>
              <span v-if="scope.row.data[index].flag == 3" style="color: white">{{scope.row.data[index].value}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="mainTable">
        <el-table
          :cell-class-name="addClass"
          class="customer-table"
          :show-header="false"
          :data="mineralGear"
          border>
          <el-table-column
            prop="title"
            :width="140"
            label="焦炭档位（历史）">
          </el-table-column>
          <el-table-column
            v-for="(item,index) in titleList"
            :prop="item.prop"
            :key="item.key"
            :width="65"
            :label="item.label">
            <template slot-scope="scope">
              <span v-if="scope.row.data[index].flag == 1" style="color: rgba(0,255,255,0.71)">{{scope.row.data[index].value}}</span>
              <span v-if="scope.row.data[index].flag == 2" style="color: #f46d43">{{scope.row.data[index].value}}</span>
              <span v-if="scope.row.data[index].flag == 3" style="color: white">{{scope.row.data[index].value}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div style="padding: 10px 20px 15px;
      min-height: 600px;
      min-width: 1800px;
      position: relative;
      overflow-y: hidden;
      overflow-x: hidden;">
      <div>
        <div class="mainDiv">
          <template>
            <div class="LineChartStyle">
              <LineChart></LineChart>
            </div>
            <div class="CustomPolarStyle">
              <div style="float: left;margin-top: 30px;">
                <span style="color: white;font-weight: bold;margin-left: 30px;">炉顶十字云图</span>
              </div>
              <CustomPolar style="margin-left: 9.75em;top: 0.9em"></CustomPolar>
            </div>
          </template>
        </div>
        <div class="mainDiv">
          <template>
            <div style="float: left;margin-top: 30px;">
              <span style="color: white;font-weight: bold;margin-left: 30px;">炉体热力图</span>
            </div>
            <div>
              <ECharts ref="ec" style="z-index: 100;" :style="EChartsStyle"></ECharts>
            </div>
          </template>
        </div>
        <div class="mainDiv">
          <template>
            <div class="FreeLineStyle">
              <FreeLine></FreeLine>
            </div>
            <div class="WarningTable" style="height: 337px;background-size: 600px 337px;margin-top: 10px;">
              <div style="float: left;margin-top: 30px;">
                <span style="color: white;font-weight: bold;margin-left: 30px;">高炉警报</span>
              </div>
              <div class="" style="height: 418px;margin-left: 10px">
                <el-table
                  label="高炉警报"
                  class="customer-table"
                  :data="timeBody"
                  :row-style="{height:'10px'}"
                  :cell-style="{padding:'5px'}"
                  border>
                  <el-table-column
                    prop="time"
                    :resizable="false"
                    width="200"
                    label="时间">
                  </el-table-column>
                  <el-table-column
                    prop="msg"
                    :resizable="false"
                    label="内容">
                    <template slot-scope="scope">
                      <span style="color: rgba(0,255,255,0.71)">{{scope.row.msg}}</span>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ECharts from './e_charts'
import LineChart from './line_chart'
import HightCharts from './hight_charts'
import FreeLine from './line'
import CustomPolar from './custom_polar'
import ScatterSimple from './scatter_simple'
import eChartsBackground from '../../../../static/image/eChartsBackground.png'
import background6 from '../../../../static/image/background_6.png'
export default {
  components: {ECharts, LineChart, HightCharts, FreeLine, CustomPolar, ScatterSimple},
  created () {
    this.setData()
  },
  data: function () {
    return {
      EChartsStyle: {
        backgroundImage: 'url(' + eChartsBackground + ')',
        backgroundRepeat: 'no-repeat'
      },
      LineChartStyle: {
        backgroundImage: 'url(' + background6 + ')',
        backgroundRepeat: 'no-repeat'
      },
      cokeGear: [],
      mineralGear: [],
      timeBody: [
        {time: '2019-10-21 13:00', msg: '电偶TE2323/3423近7天缓慢变差'},
        {time: '2019-10-21 11:00', msg: '电偶TE2323/3423当前温度489.67℃，超过阈值15%'},
        {time: '2019-10-21 10:30', msg: '电偶TE2323/3423当前温度389.67℃，超过阈值19%'},
        {time: '2019-10-21 18:00', msg: '风量当前值为1000，低于阈值50%'},
        {time: '2019-10-21 15:00', msg: '电偶TE2323/3423当前温度389.67℃，超过阈值19%'}
      ],
      AllData: [],
      allList: [
        {key: 1, feeName: 11},
        {key: 2, feeName: 22}
      ],
      titleList: [],
      listData: []
    }
  },
  methods: {
    changeOption () {
      this.$refs.ec.changeOption()
    },
    addClass ({row, column, rowIndex, columnIndex}) {
      if (columnIndex !== 0) {
        return 'resAndSug'
      }
    },
    setData () {
      this.cokeGear = []
      this.mineralGear = []
      this.titleList = []
      let getData = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2, 2, 3, 3, 5, 5, 7, 8, 9, 10, 11]]
      let cokeGearData1 = []
      let cokeGearData2 = []
      let data1 = {}
      let data2 = {}
      this.listData = []
      for (let j in getData[0]) {
        this.titleList.push({'prop': j, 'key': j, 'label': j})
        if (getData[0][j] === getData[1][j]) {
          cokeGearData1.push({value: getData[0][j], flag: 1})
        } else {
          cokeGearData1.push({value: getData[0][j], flag: 2})
        }
        cokeGearData2.push({value: getData[1][j], flag: 3})
      }
      data1['title'] = '当前'
      data1['data'] = cokeGearData1
      data2['title'] = '历史'
      data2['data'] = cokeGearData2
      this.cokeGear.push(data1)
      this.cokeGear.push(data2)
      this.mineralGear = this.cokeGear
    }
  }
}
</script>
<style>
  /* 去掉表格单元格边框 */
  .customer-table th{
    border:none;
  }
  .customer-table td,.customer-table th.is-leaf {
    border:none;
  }
  /* 设置表格最外边框 */
  .el-table--border, .el-table--group{
    border: none;
  }
  /* 设置头部边框 */
  .customer-table thead tr th.is-leaf{
    border-style: none;
  }
  .customer-table thead tr th:nth-last-of-type(2){
    border-right: none;
  }
  /* 设置表格最外层边框-底部边框 */
  .el-table--border::after, .el-table--group::after{
    width: 0;
  }
  .customer-table::before{
    width: 0;
  }
  .customer-table .el-table__fixed-right::before,.el-table__fixed::before{
    width: 0;
  }
  /* 设置表格滚动时头边框 */
  .el-table--border th.gutter:last-of-type {
    border: 1px solid #EBEEF5;
    border-left: none;
  }
  /* 设置表格字体颜色 */
  .el-table{
    text-align: center;
    background-color: transparent !important;
    color:white;
    height: 500px;
  }
  /* 设置table透明化 */
  .el-table,.el-table__expanded-cell {
    color:rgb(255, 255, 255);
    background-color: transparent !important;
  }
  /* 设置表头字体颜色 */
  .el-table th .cell{
    background-color: transparent;
    color:rgb(255,255,255);
  }
  /* 设置行、单元格背景透明 */
  .el-table th, .el-table tr{
    background-color:transparent !important;
  }
  /* 设置hover颜色 */
  .el-table tbody tr:hover>td {
    background-color: transparent !important
  }
  /* 禁用hover高亮 */
  .el-table tbody tr { pointer-events:none; }
  .el-table .resAndSug {
    background-color: #3f5c6d2c;
    border-color: #0E1B4F;
    border-style: solid;
    border-width: 2px;
    margin: 1px 1px 1px 1px;
  }
  .MyBackground {
    background-size:100% 100%;
    background:url('../../../../static/image/lineChartBackground.png') no-repeat;
  }
  .CustomPolarStyle {
    background:url('../../../../static/image/customPolarBackground.png') no-repeat;
    height: 337px;
    background-size: 578px 337px
  }
  .LineChartStyle {
    height: 400px;
    background:url('../../../../static/image/lineChartBackground.png') no-repeat;
    background-size: 600px 400px
  }
  .FreeLineStyle {
    background:url('../../../../static/image/freeLineBackground.png') no-repeat;
    height: 400px;
    background-size: 600px 400px
  }
  .WarningTable {
    height: 337px;
    background-size: 600px 337px;
    background:url('../../../../static/image/warningTableBackground.png') no-repeat;
  }
  .mainTitle {
    height: 44px;
    background-size: 300px 50px;
    background:url('../../../../static/image/top.png') no-repeat center top;
  }
  .mainTable {
    height: 52%;
    float: left;
    margin-left: 60px;
  }
  .mainDiv {
    width: 600px;
    float: left
  }
</style>
