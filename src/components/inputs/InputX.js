import React from "react";
import { Data_X } from "../../config";
import "./input.css";

const InputX = ({
	showDropdown,
	handleDropdown,
	valueInputX,
	handleClickInputX,
	handleDeleteInputXItem,
}) => {
	return (
		<div className='input-wrap' onClick={handleDropdown}>
			<span className='input-label'>X axis labels</span>
			<div className='input'>
				{valueInputX.length > 0 ? (
					valueInputX.map((el) => (
						<span
							className='input-item'
							key={el.id}
							onClick={() => handleDeleteInputXItem(el.id)}>
							{el.name}
							<span className='input-item-remove'>x</span>
						</span>
					))
				) : (
					<span>Add value...</span>
				)}
			</div>

			<div
				className={
					!showDropdown ? "input-dropdown show" : "input-dropdown"
				}>
				{Data_X.map((item) => (
					<span
						className={
							valueInputX.find(({ name }) => name === item.name)
								? "disabled"
								: ""
						}
						key={item.id}
						value={item.name}
						onClick={handleClickInputX}>
						{item.name}
					</span>
				))}
			</div>
			<span
				className={
					!showDropdown ? "input-arrow active" : "input-arrow"
				}>
				&#9660;
			</span>
		</div>
	);
};

export default InputX;
