import React from "react";

const RadioBtnItem = ({ name, handleRadioBtn, selectedRadioBtn }) => {
	return (
		<li>
			<label key={name}>
				<input
					type='radio'
					checked={selectedRadioBtn === name}
					value={name}
					name={name}
					onChange={handleRadioBtn}
				/>
				<span>{name}</span>
			</label>
		</li>
	);
};

export default RadioBtnItem;
