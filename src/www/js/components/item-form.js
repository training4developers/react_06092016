import React from 'react';

export class ItemForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			newColor: ''
		};
		this.onChange = this.onChange.bind(this);
		this.addItem = this.addItem.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addItem() {
		this.props.onAddItem(this.state.newColor);
		this.setState({
			newColor: ''
		});
	}

	render() {
		return <form>
			<label>New Color:
				<input type='text' name='newColor' value={this.state.newColor} onChange={this.onChange} />
			</label>
			<button type='button' onClick={this.addItem}>Add Item</button>
		</form>;
	}

}
