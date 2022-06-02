import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartBar = ({ chartData }) => {
	return <Bar data={chartData} />;
};

export default ChartBar;
