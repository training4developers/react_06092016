import React from 'react';

export const ItemList = props => <ul>
		{props.items.map(item => <li key={item}>{item}</li>)}
	</ul>;
