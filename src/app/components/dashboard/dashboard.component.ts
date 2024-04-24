import { Component, OnInit, ViewChild } from '@angular/core';
// import * as Chart from 'chart.js';
// import { Chart } from 'chart.js';
import { Chart } from "chart.js";
// import * as CanvasJS from 'canvasjs';

// import * as { Chart } from 'chart.js/auto';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	newWins: number = 230;
	newWinsRate: number = 25;

	trialWins: number = 9.86;
	trialWinsrate: number = 25;

	newMRR: number = 25690;
	newMRRrate: number = 8.7;


	chartOptions = {
		animationEnabled: true,
		axisX: {
			title: " ",
			tickThickness: 0,
			interval: 1,
			labelAngle: -45,
			valueFormatString: " ",
			labels: ["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sept-Oct", "Nov-Dec"],
		},
		axisY: {
			title: " ",
			lineThickness: 0,
			tickThickness: 0,
			interval: 20,
			minimum: -60,
			maximum: 60,
		},
		toolTip: {
			shared: true,
		},
		legend: {
			verticalAlign: "center",
			horizontalAlign: "right",
			reversed: true,
		},
		data: [
			{
				name: " ",
				showInLegend: true,
				type: "stackedColumn100",
				color: "lightblue",
				dataPoints: [
					{ y: 30 },
					{ y: 40 },
					{ y: -30 },
					{ y: 60 },
				],
			},
			{
				name: " ",
				showInLegend: true,
				type: "stackedColumn100",
				color: "orange",
				dataPoints: [
					{ y: 40 },
					{ y: 28 },
					{ y: 18 },
					{ y: 12 },
				],
			},
			{
				name: " ",
				showInLegend: true,
				type: "stackedColumn100",
				color: "yellow",
				dataPoints: [
					{ y: 15 },
					{ y: 17 },
					{ y: 20 },
					{ y: 18 },
				],
			},
		],
	};

	chartOptions1 = {
		animationEnabled: true,
		data: [{
			type: "doughnut",
			yValueFormatString: "#,###.##'%'",
			indexLabel: "{name}",
			dataPoints: [
				{ y: 5, name: "Referal" },
				{ y: 10, name: "Direct" },
				{ y: 85, name: "Organic search" }
			]
		}]
	}

	chartOptions3 = {
		// theme: "dark2",
		animationEnabled: true,
		axisX: {
			// title:"Life Expectancy (in Years)"
		},
		axisY: {
			includeZero: true
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function (e: any) {
				if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				}
				else {
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [
			{
				type: "bubble",
				zValueFormatString: "##.##",
				showInLegend: true,
				legendText: "United states",
				legendMarkerType: "circle",
				legendMarkerColor: "pink",
				toolTipContent: "<b><span style='\"'color: {pink};'\"'>{name}</span></b>",
				dataPoints: [
					{ x: 69.656, y: 2.202, z: 1366.417756, name: "United states", color: "pink" },
				]
			},
			{
				type: "bubble",
				zValueFormatString: "##.##",
				showInLegend: true,
				legendText: "Australia",
				legendMarkerType: "circle",
				legendMarkerColor: "red",
				toolTipContent: "<b><span style='\"'color: {color};'\"'>{name}</span></b>",
				dataPoints: [
					{ x: 182.9, y: 1.657, z: 125.365745, name: "Australia", color: "red" },
				]
			},
			{
				type: "bubble",
				zValueFormatString: "##.##",
				showInLegend: true,
				legendText: "United Kingdom",
				legendMarkerType: "circle",
				legendMarkerColor: "orange",
				toolTipContent: "<b><span style='\"'color: {color};'\"'>{name}</span></b>",
				dataPoints: [
					{ x: 89.20487805, y: 1.65, z: 66.647112, name: "United Kingdom", color: "orange" },
				]
			},
			{
				type: "bubble",
				zValueFormatString: "##.##",
				showInLegend: true,
				legendText: "Canada",
				legendMarkerType: "circle",
				legendMarkerColor: "lightblue",
				toolTipContent: "<b><span style='\"'color: {color};'\"'>{name}</span></b>",
				dataPoints: [
					{ x: 142.04878049, y: 1.4684, z: 37.593384, name: "Canada", color: "lightblue" }
				]
			},
		]
	}

	constructor() { }

	ngOnInit() {
	}

}
