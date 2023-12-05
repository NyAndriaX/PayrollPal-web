import React, { useState } from "react";
import Chart from "react-apexcharts";

const ComponentLineChartDashboardCompany = () => {
	const [chartOptions, setChartOptions] = useState({
		chart: {
			id: "basic-bar",
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
		},
		colors: ["#a4a6b3"],
		stroke: {
			show: true,
			curve: "smooth",
			lineCap: "butt",
			colors: undefined,
			width: 1,
			dashArray: 0,
		},
		markers: {
			size: 4,
		},
		title: {
			text: "Résumé du nombre de jours travaillés",
			align: "left",
			margin: 10,
			offsetX: 0,
			offsetY: 0,
			floating: false,
			style: {
				fontSize: "14px",
				fontWeight: "bold",
				fontFamily: "Multer",
				color: "#263238",
			},
		},
		subtitle: {
			text: "Mars 2020",
			align: "left",
			margin: 10,
			offsetX: 0,
			offsetY: 20,
			floating: false,
			style: {
				fontSize: "12px",
				fontWeight: "normal",
				fontFamily: "Multer",
				color: "#9699a2",
			},
		},
		responsive: [
			{
				breakpoint: undefined,
				options: {},
			},
		],
	});

	const [chartSeries, setChartSeries] = useState([
		{
			name: "series-1",
			data: [30, 40, 45, 50, 49, 60, 70, 91],
		},
	]);

	return (
		<div className="content-table">
			<Chart
				options={chartOptions}
				series={chartSeries}
				type="line"
				style={{ width: "100%" }}
				height={300}
			/>
		</div>
	);
};

export default ComponentLineChartDashboardCompany;
