import React from 'react';
import ReactDOM from 'react-dom';

class CarTable extends React.Component {

	render() {

		return <table className='table table-striped'>
			<thead>
				<tr>
					<th>Make</th>
					<th>Model</th>
					<th>Year</th>
					<th>Color</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>;

	}

}

ReactDOM.render(<CarTable />, document.querySelector('main'));
