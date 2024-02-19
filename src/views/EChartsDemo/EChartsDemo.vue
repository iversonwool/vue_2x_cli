<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {
      isShow: true,
      xData: [
        "20125",
        "25458",
        "14568",
        "52145",
        "12584",
        "36511",
        "25481",
        "78954",
        "54771",
        "12548",
        "96584",
        "25489",
        "99999",
        "22321",
      ],
      y1Data: [
        18203,
        23489,
        29034,
        104970,
        131744,
        154854,
        256582,
        356984,
        541284,
        125487,
        243658,
        364789,
        876832,
        773621,
      ],
      y2Data: [
        19325,
        23438,
        31000,
        121594,
        134141,
        145874,
        145632,
        254786,
        125641,
        214563,
        265321,
        352145,
        364732,
        563472,
      ],
    };
  },
  mounted() {
    this.hello()
    this.initECharts()
  },
  methods: {
    hello() {
      console.log('hello')
    },
    initECharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("xxx111"));
      // 大于一屏幕4个时，计算option个数及对应属性（timeLineData、series、xData......）进行合并
      let timeLineData = [];
      let optionArr = [];
      let len = Math.ceil(this.xData.length / 4);
      for (var i = 1; i <= len; i++) {
        timeLineData.push(i);
        let obj = {
          title: {
            text: "设备第" + i + "页",
          },
          series: [
            { data: this.y1Data.splice(0, 4) }, // 系列一的数据
            { data: this.y2Data.splice(0, 4) }, // 系列二的数据
          ],
          xAxis: {
            type: "category",
            data: this.xData.splice(0, 4),
          },
        };
        optionArr.push(obj);
      }
      console.log("optionArr", optionArr);
      var option = {
        baseOption: {
          timeline: {
            // `timeline.data` 中的每一项，对应于 `options`
            // show:false,
            autoPlay: true,
            bottom: -23,
            controlStyle: {
              show: false,
            },
            data: timeLineData,
          },
          title: {
            text: "设备异常图",
          },
          legend: {
            data: ["高温", "cpu"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category",
            data: this.xData,
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
          },

          series: [
            {
              name: "高温",
              type: "bar",
              data: this.y1Data,
              barWidth: "15%",
              label: {
                show: true,
                position: "top",
              },
            },
            {
              name: "cpu",
              type: "bar",
              data: this.y2Data,
              barWidth: "15%",
              label: {
                show: true,
                position: "top",
              },
            },
          ],
        },
        options: optionArr,
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
};
</script>

<template>
  <div id="xxx111" style="height: 700px; width: 80%" v-show="isShow"></div>
</template>
