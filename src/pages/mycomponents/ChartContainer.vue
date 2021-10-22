<template>
  <div class="small" >
    <!-- <div v-for="chart in tags" :key="chart"> -->

      <chart :chart-data="datacollection2"></chart>
    <!-- </div> -->
    <!-- <button @click="fillData2()">Randomize</button> -->
  </div>
</template>

<script>
  import Chart from './Chart.js'

  export default {
    components: {
      Chart
    },
    data () {
      return {
        datacollection: [
          // {
          //   labels:[11,22,33],
          //   data:[
          //     {
          //       label: 'aa',
          //       backgroundColor: '#f87979',
          //       data: [11,22,33]
          //     }
          //   ]
          // },
          

        ],
        datacollection2:{}
      }
    },
    mounted () {
      this.fillData2()
    },
    methods: {
      fillData(){
          for(let i = 0; i < 3; i++){
            this.datacollection.push({
              labels:[11*i,22,33],
                data:[
                  {
                    label: 'aa',
                    backgroundColor: '#f87979',
                    data: [11,22*i,33]
                  }
                ]
            })
          }
      },
      fillData2 () {
        this.datacollection2 = {
          labels: ['그렇다', '아니다', '모르겠다'],
          datasets: [
            {
              // label: 'aa',
              // backgroundColor: '#f87979',
              // data: [11,22,33]
              label: '응답수',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(),]
            }, 
            // {
            //   label: '아니다',
            //   backgroundColor: '#f87979',
            //   data: [this.getRandomInt(), this.getRandomInt()]
            // },
            // {
            //   label: '모르겠다',
            //   backgroundColor: '#f87979',
            //   data: [this.getRandomInt(), this.getRandomInt()]
            // },
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>

<style>
  .small {
    width: 300px;
    margin:  50px auto;
  }
</style>