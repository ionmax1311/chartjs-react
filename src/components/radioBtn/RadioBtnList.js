import React from "react";
import { RadioBtn } from "./config";
import RadioBtnItem from "./RadioBtnItem";
import "./radioBtn.css";

const RadioBtnList = ({ handleRadioBtn, selectedRadioBtn }) => {
	return (
		<ul className='radio-btn-list'>
			{RadioBtn.map((item) => (
				<RadioBtnItem
					key={item.id}
					name={item.name}
					handleRadioBtn={handleRadioBtn}
					selectedRadioBtn={selectedRadioBtn}
				/>
			))}
		</ul>
	);
};

export default RadioBtnList;
