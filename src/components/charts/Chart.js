import React, { useState } from "react";
import ChartBar from "./ChartBar";
import { Data_X, Data_Y } from "../../config";
import Inputs from "../inputs/Inputs";
import ChartLine from "./ChartLine";
import ChartPie from "./ChartPie";
import RadioBtnList from "../radioBtn/RadioBtnList";
import "./chart.css";
import ChartDoughnut from "./ChartDoughnut";

const Chart = () => {
	const [valueInputX, setValueInputX] = useState([
		Data_X[0],
		Data_X[1],
		Data_X[2],
	]);
	const [valueInputY, setValueInputY] = useState([
		Data_Y[0].value,
		Data_Y[1].value,
		Data_Y[2].value,
	]);
	const [showDropdown, setShowdropdown] = useState("false");
	const [selectedRadioBtn, setSelectedRadioBtn] = useState("Bar Chart");
	const [dataX, setDataX] = useState([Data_X[0], Data_X[1], Data_X[2]]);
	const [dataY, setDataY] = useState([Data_Y[0], Data_Y[1], Data_Y[2]]);
	const data = {
		labels: dataX.map((data) => data.name),
		datasets: [
			{
				label: "Value",
				data: dataY.map((data) => data.value),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"#ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	};

	const handleDropdown = (e) => {
		if (e.target.className !== "input-item") {
			setShowdropdown(!showDropdown);
		}
	};

	const handleRadioBtn = (e) => {
		setSelectedRadioBtn(e.currentTarget.value);
	};

	const handleClickInputX = (e) => {
		const newInputXValue = [
			...valueInputX,
			{ id: Date.now(), name: e.target.innerText },
		];
		setValueInputX(newInputXValue);
		setDataX(newInputXValue);
	};

	const handleDeleteInputXItem = (id) => {
		const newValue = valueInputX.filter((el) => id !== el.id);
		setValueInputX(newValue);
		setDataX(newValue);
	};

	const handleChangeInputY = (e) => {
		const newInputYValue = e.target.value.split(",");
		if (e.target.value.match(/^[0-9,]*$/) != null) {
			setValueInputY(newInputYValue);
		}
	};

	const handleInputsBtn = () => {
		const newValue = valueInputY.reduce((acc, next, i) => {
			const elem = { id: i, value: next };
			return [...acc, elem];
		}, []);
		setDataY(newValue);
	};

	return (
		<div className='chart'>
			<Inputs
				showDropdown={showDropdown}
				handleDropdown={handleDropdown}
				setValueInputX={setValueInputX}
				valueInputX={valueInputX}
				handleClickInputX={handleClickInputX}
				valueInputY={valueInputY}
				handleChangeInputY={handleChangeInputY}
				handleInputsBtn={handleInputsBtn}
				handleDeleteInputXItem={handleDeleteInputXItem}
			/>
			{selectedRadioBtn === "Bar Chart" ? (
				<ChartBar
					chartData={data}
					options={{ maintainAspectRatio: false }}
				/>
			) : selectedRadioBtn === "Line Chart" ? (
				<ChartLine
					chartData={data}
					options={{ maintainAspectRatio: false }}
				/>
			) : selectedRadioBtn === "Doughnut Chart" ? (
				<ChartDoughnut
					chartData={data}
					options={{ maintainAspectRatio: false }}
				/>
			) : (
				<ChartPie
					chartData={data}
					options={{ maintainAspectRatio: false }}
				/>
			)}

			<RadioBtnList
				handleRadioBtn={handleRadioBtn}
				selectedRadioBtn={selectedRadioBtn}
			/>
		</div>
	);
};

export default Chart;
