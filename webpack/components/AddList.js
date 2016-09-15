import React from 'react';

const AddList = ({ handleAdd }) => {
	let input;
	return(
		<div className="center">
			<input required placeholder="Add List" ref={ node => { input = node } } />
			<button className="btn" onClick={ () => { 
				handleAdd(input.value)
				input.value = ''; 
			}}>
				Add
			</button>
		</div>
	)
}

export default AddList;