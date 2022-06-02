import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartDoughnut = ({ chartData }) => {
	return <Doughnut data={chartData} />;
};

export default ChartDoughnut;
