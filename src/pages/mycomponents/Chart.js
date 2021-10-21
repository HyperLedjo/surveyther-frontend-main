
import { Line, mixins, Bar, HorizontalBar } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: HorizontalBar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    // console.log("chart.js called")
    this.renderChart(this.chartData, this.options)
  }
}

// import { Line } from 'vue-chartjs'

//         export default {
//             extends: Line,
//             name: "LineChart",
//             props:['data','options'],
//             mounted () {
//                 this.renderChart({
//                     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nowember', 'Desember'],
//                     datasets: [
//                         {
//                             label: 'Commits on GitHub',
//                             backgroundColor: '#f87979',
//                             data: [20, 12, 40, 29, 15, 42, 35, 80, 40, 20, 12, 11]
//                         }
//                     ]
//                 }, {responsive: true, maintainAspectRatio: false})
//             }
//         }

