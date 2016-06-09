import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

	render() {

		//return React.createElement('h1', null, 'Hello World!!!!');

		return <ul>
			<li>red</li>
			<li>gold</li>
			<li>white</li>
			<li>blue</li>
			<li>green</li>
			<li>saffron</li>
		</ul>;

	}

}

ReactDOM.render(<HelloWorld />, document.querySelector('main'));
