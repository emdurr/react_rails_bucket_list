import React from 'react';
import AddList from '../components/AddList';
import ViewLists from '../components/ViewLists';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleComplete = this.handleComplete.bind(this);
		this.deleteList = this.deleteList.bind(this);
		this.state = { lists: [] };
	}

	componentWillMount() {
	 $.ajax({
	 	url: `/api/lists`,
	 	type: 'GET',
	 	dataType: 'JSON'
	 }).done( lists => {
	 	this.setState({ lists });
	 })
	}

	handleAdd(name) {
		$.ajax({
			url: `/api/lists`,
			type: 'POST',
			dataType: 'JSON',
			data: { list: { name }}
		}).done( list => {
			this.setState({
				lists: [
					{...list },
					...this.state.lists
				]
			})
		})
	}

	handleComplete(id) {
		$.ajax({
			url: `/api/lists/${id}`,
			type: 'PUT',
			dataType: 'JSON'
		}).done( item => {
			let items = this.state.lists;
			let index = items.findIndex( i => i.id === item.id );
			this.setState({
				lists: [
					...items.slice(0, index),
					{...items[index], complete: item.complete},
					...items.slice(index + 1, items.length)
				]
			});
		});
	}

	deleteList(id) {
		$.ajax({
			url: `/api/lists/${id}`,
			type: 'DELETE',
			dataType: 'JSON'
		}).done( () => {
			this.setState({
				lists: this.state.lists.filter( t => t.id !== id )
			});
		});
	}

	render() {
		return(
			<div className='container'>
				<AddList handleAdd={this.handleAdd} />
				<br />
				<ViewLists lists={this.state.lists} handleComplete={this.handleComplete} deleteList={this.deleteList} />
			</div>
		)
	}
}

export default App;

