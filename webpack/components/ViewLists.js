import React from 'react';
import List from './List';

const ViewLists = ({ lists }) => {
	let items = lists.map( list => {
		return (
			<List key={list.id} {...list} />
		);
	});
	return(
		<div className="row">
			{ items }
		</div>
	)
};

export default ViewLists	;