import React from 'react';
import ReactDOM from 'react-dom';

const colors = ['red','gold','white','blue','green','saffron'];

class ItemList extends React.Component {

	static get propTypes() {
		return {
			items: React.PropTypes.array.isRequired
		};
	}

	constructor() {
		this.state = {
			newColor: ''
		};
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			newColor: e.target.value
		});
	}

	render() {

		return <div>
			<ul>
				{this.props.items.map(item => <li key={item}>{item}</li>)}
			</ul>
			<form>
				<label>New Color:
					<input type='text' value={this.state.newColor} onChange={this.onChange} />
			</form>
		</div>;

	}
}

ReactDOM.render(<ItemList items={colors} />, document.querySelector('main'));
