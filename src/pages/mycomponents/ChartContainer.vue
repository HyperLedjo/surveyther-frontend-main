<template>
  <div class="small">
    <div v-if="loaded">
        <div  v-for="(chart) in this.chartData" :key="chart">
          <chart  :chart-data="chart"></chart>
              {{chart}}
        </div>

    </div>
    <!-- <chart :chart-data="datacollection"></chart> -->
    <!-- <button @click="makeitTrue()">Randomize</button> -->
  </div>



  <!-- <div class="container small">
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div> -->
</template>

<script>
  import Chart from './Chart.js'

  export default {
    components: {
      Chart
    },
    data () {
      return {
        datacollection: {
            labels: ['그렇다', '아니다'],
            datasets: [
              {
                label: '인원수',
                backgroundColor: '#f87979',
                data: [this.getRandomInt(), this.getRandomInt()]
              }, 
            ]
          },
        loaded: false,
        chartData:[
          {
            labels: ['그렇다', '아니다'],
            datasets: [
              {
                label: '인원수',
                backgroundColor: '#f87979',
                data: [this.getRandomInt(), this.getRandomInt()]
              }, 
            ]
          },

          // {
          //   labels: ['그렇다22', '아니다22 가까와야핟ㄴ다!!!'],
          //   datasets: [
          //     {
          //       label: '인원수22',
          //       backgroundColor: '#f87979',
          //       data: [this.getRandomInt(), this.getRandomInt()]
          //     }, 
          //   ]
          // },
          
        ]
      }
    },
    mounted () {
      this.fillData();
      this.makeitTrue();
    },
    created(){
      this.fillData();

    },
    methods: {
      makeitTrue(){
        this.loaded = true;

      },
      fillData () {
        // this.datacollection = {
        //   labels: ['그렇다', '아니다'],
        //   datasets: [
        //     {
        //       label: '인원수',
        //       backgroundColor: '#f87979',
        //       data: [this.getRandomInt(), this.getRandomInt()]
        //     }, 
        //   ]
        // }
        fetch('/api/question/' + this.$route.params.surveyId).then(response => response.json()).then(
          data => {
            for(let i = 0; i < data.length; i++){
              fetch('/api/answer/' + data[i].no).then(response => response.json()).then(
                data =>{
                  // 만약 서베이를 보유하고있다면
                  // if(this.isMySurvey){
                    //임시로 라벨들과 해당 데이터를 저장할 배열 선언
                    let templabel = [];
                    let tempdata = [];
                    //읽어온 값을 배열에 넣어줌
                    for(let i = 0; i < data.length; i++){
                        templabel.push(data[i].content);
                        tempdata.push(data[i].no);//임시로 answerID를 넣음, 실제 데이터자리
                    }
                    //차트데이터에 넣음
                    this.chartData.push({
                      label : templabel,
                      datasets: [
                        {
                          label: '인원수',
                          backgroundColor: '#f87979',
                          data: tempdata
                        }, 
                      ]
                    })
                  // }
                }
              )
            }
      // this.chartDataLoaded = true;
          }
        );

      },
      watch: {
  chartData () {
    this.$data._chart.update()
    }
  },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }

// import LineChart from './Chart.js'

// export default {
//   name: 'LineChartContainer',
//   components: { LineChart },
//   data: () => ({
//     loaded: false,
//     chartdata: null
//   }),
//   async mounted () {
//     this.loaded = false
//     try {
//       const { userlist } = await fetch('/api/comments/count/1')
//       this.chartdata = userlist
//       this.loaded = true
//     } catch (e) {
//       console.error(e)
//     }
//   }
// }
</script>

<style>
  .small {
    max-width: 250px;
    margin:  30px auto;
  }
</style>