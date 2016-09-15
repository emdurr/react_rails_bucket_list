import React from 'react';
import AddList from '../components/AddList';
import ViewLists from '../components/ViewLists';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
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

	render() {
		return(
			<div className='container'>
				<AddList handleAdd={this.handleAdd} />
				<ViewLists lists={this.state.lists} />
			</div>
		)
	}
}

export default App;

