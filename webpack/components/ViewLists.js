import React from 'react';
import List from './List';

const ViewLists = ({ lists, handleComplete, deleteList }) => {
	let items = lists.map( list => {
		return (
			<List key={list.id} {...list} handleComplete={handleComplete} deleteList={deleteList} />
		);
	});
	return(
		<div className="row">
			{ items }
		</div>
	)
};

export default ViewLists;