import React from "react";
import InputX from "./InputX";
import InputY from "./InputY";

const Inputs = ({
	showDropdown,
	handleDropdown,
	valueInputX,
	setValueInputX,
	handleClickInputX,
	valueInputY,
	handleChangeInputY,
	handleInputsBtn,
	handleDeleteInputXItem,
}) => {
	return (
		<div>
			<InputX
				showDropdown={showDropdown}
				handleDropdown={handleDropdown}
				setValueInputX={setValueInputX}
				valueInputX={valueInputX}
				handleClickInputX={handleClickInputX}
				handleDeleteInputXItem={handleDeleteInputXItem}
			/>
			<InputY
				valueInputY={valueInputY}
				handleChangeInputY={handleChangeInputY}
			/>
			<button
				className='input-btn'
				type='button'
				onClick={handleInputsBtn}>
				Enter
			</button>
		</div>
	);
};

export default Inputs;
