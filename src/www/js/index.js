import React from 'react';
import ReactDOM from 'react-dom';

import { ItemList } from './components/item-list';
import { ItemForm } from './components/item-form';

const colors = ['red','gold','white','blue','green','saffron','brown'];

class ItemTool extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentView: 'list',
			items: props.items.concat()
		};
		this.addItem = this.addItem.bind(this);
		this.showAddItem = this.showAddItem.bind(this);
	}

	addItem(newColor) {
		this.setState({
			items: this.state.items.concat(newColor),
			currentView: 'list'
		});
	}

	showAddItem() {
		this.setState({
			currentView: 'form'
		});
	}

	render() {

		if (this.state.currentView === 'list') {
			return <div>
				<ItemList items={this.state.items} />
				<button onClick={this.showAddItem}>Add Item</button>
			</div>;
		} else {
			return <ItemForm onAddItem={this.addItem} />;
		}

	}
}

ReactDOM.render(<ItemTool items={colors} />, document.querySelector('main'));
