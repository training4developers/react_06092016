import React from 'react';
import ReactDOM from 'react-dom';

import { ItemList } from './components/item-list';
import { ItemForm } from './components/item-form';

const colors = ['red','gold','white','blue','green','saffron','brown'];

class ItemTool extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			items: props.items.concat()
		};
		this.addItem = this.addItem.bind(this);
	}

	addItem(newColor) {
		this.setState({
			items: this.state.items.concat(newColor)
		});
	}

	render() {

		return <div>
			<ItemList items={this.state.items} />
			<ItemForm onAddItem={this.addItem} />
		</div>;

	}
}

ReactDOM.render(<ItemTool items={colors} />, document.querySelector('main'));
