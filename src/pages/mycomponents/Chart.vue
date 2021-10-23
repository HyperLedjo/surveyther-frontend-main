<script>
import { Bar } from 'vue-chartjs'

export default {
 extends: Bar,
          props: ['chartdata'],

	data: function () {
		return {
      datacollection:this.chartdata ,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function(tooltipItems, data) {
							return '$' + tooltipItems.yLabel;
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
}
		}
	},
	mounted () {
		// this.chartData is created in the mixin
		this.renderChart(this.datacollection, this.options)
	}
}
</script>