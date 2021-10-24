<script>
import { HorizontalBar } from 'vue-chartjs'

export default {
 extends: HorizontalBar, //HorizontalBar
          props: ['chartdata'],

	data: function () {
		return {
      datacollection:this.chartdata ,
			options: {
				scales: {
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
				},
				legend: {
					display: true
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function(tooltipItems, data) {
							return tooltipItems.xLabel + '명';
						}
					}
				},
				responsive: false,
				maintainAspectRatio: false,
				// height: '200',
				// width:'300',
}
		}
	},
	mounted () {
		// this.chartData is created in the mixin
		this.renderChart(this.datacollection, this.options)
	}
}
</script>