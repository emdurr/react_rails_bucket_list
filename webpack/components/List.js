import React from 'react';

const List = ({ id, complete, name, handleComplete, deleteList }) => (
	<div className='col s12'>
		<div className='col m8'>
			<div style={ complete ? {textDecoration: 'line-through' } : {}} className='center'>
 				{name}
			</div>
		</div>
		<div className='col m2'>
			<input
				id={`item-${id}`}
				type="checkbox"
				defaultChecked={complete}
				onClick={ () => handleComplete(id) }
			/>
			<label htmlFor={`item-${id}`}>Complete?</label>
		</div>
		<div onClick={ () => deleteList(id) } style={{cursor: 'pointer' }} className='center bdr col m1'>
		X
		</div>
	</div>
);

export default List;