<template>
  <div class="small">
    <div v-if="loaded">
        <div  v-for="(data,index) in chartData" :key="index">
            <line-chart
                  v-if="loaded"
                  :chartdata="data" :width="400" :height="200"
                  />
          {{data}}
        </div>        
    </div>

    </div> 
  


 

   
</template>

<script>
  // import Chart from './Chart.js'
import LineChart from './Chart.vue'

  export default {
  components: { LineChart },

    data () {
      return {
        // datacollection: {
        //     labels: ['그렇다', '아니다'],
        //     datasets: [
        //       {
        //         label: '인원수',
        //         backgroundColor: '#f87979',
        //         data: [this.getRandomInt(), this.getRandomInt()]
        //       }, 
        //     ]
        //   },
        loaded: false,
        chartData:[],
      }
    },
    async mounted () {
      await this.fillData();
      this.makeitTrue();
    },
    created(){
      this.fillData();

    },
    methods: {
      makeitTrue(){
        this.loaded = true;

      },
      async fillData () {
        // this.datacollection = {
        //   labels: ['그렇다', '아니다'],
        //   datasets: [
        //     {
        //       label: '인원수',
        //       backgroundColor: '#fa9778',
        //       data: [this.getRandomInt(), this.getRandomInt()]
        //     }, 
        //   ]
        // }
       await fetch('/api/question/' + this.$route.params.surveyId).then(response => response.json()).then(
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
                        tempdata.push(data[i].no.toString());//임시로 answerID를 넣음, 실제 데이터자리
                    }
          
                    //차트데이터에 넣음
                    this.chartData.push({
                      labels : templabel,
                      datasets: [
                        {
                          label: '인원수',
                          backgroundColor: '#fa9778', //  f87979
                          data: tempdata
                        }, 
                      ]
                    })
                }
              )
            }
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
//       console.log('a')
//       const number = await fetch('/api/comments/count/1')
//       const number2 = await fetch('/api/comments/count/2')
//       console.log(number)
      
//       this.chartdata = {
//         '그렇다': number,
//         '아니다':number2
//         }
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
    margin:  20px auto;
  }
</style>