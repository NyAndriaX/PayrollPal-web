import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { useDayDumpData } from "../../../../context/freelance/dayDump/dayDumpContext";
import { useFormatedDate } from "../../../../hooks/useFormatedDate";

const ComponentLineChartDayDumpFreelance = () => {
	const { dayDumpData } = useDayDumpData();
	const { alldayDump } = dayDumpData;

	const [chartOptions, setChartOptions] = useState({
		chart: {
			id: "basic-bar",
		},
		xaxis: {
			categories: [], // Les jours iront ici
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
			text: "Depuis la création de votre compte",
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
	});

	const [chartSeries, setChartSeries] = useState([
		{
			name: "Nombre de jours travaillés",
			data: [], // Les données iront ici
		},
	]);

	useEffect(() => {
		// Formatage des données pour le graphique
		const formattedData = alldayDump.map((entry) => ({
			x: useFormatedDate(entry.createdAt),
			y: entry.nbrDeJours,
		}));

		// Séparation des données pour les axes x et y
		const xData = formattedData.map((entry) => entry.x);
		const yData = formattedData.map((entry) => entry.y);

		// Mise à jour des états du graphique
		setChartOptions((prevOptions) => ({
			...prevOptions,
			xaxis: {
				...prevOptions.xaxis,
				categories: xData,
				max: Math.max(...xData, 30),
			},
		}));
		setChartSeries((prevSeries) => [
			{
				...prevSeries[0],
				data: yData,
			},
		]);
	}, [alldayDump]);

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
export default ComponentLineChartDayDumpFreelance;
