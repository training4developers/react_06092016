import React from 'react';

export class BaseComponent extends React.Component {

	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

}

export class ItemForm extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = {
			newColor: ''
		};
		this.addItem = this.addItem.bind(this);
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
