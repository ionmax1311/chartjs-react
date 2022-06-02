import React from "react";

const InputY = ({ valueInputY, handleChangeInputY }) => {
	return (
		<div className='input-wrap'>
			<label className='input-label'>
				Y axis labels
				<input
					className='input'
					type='text'
					value={valueInputY}
					onChange={handleChangeInputY}
				/>
			</label>
		</div>
	);
};

export default InputY;
