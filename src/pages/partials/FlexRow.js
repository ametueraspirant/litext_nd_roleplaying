import React from 'react';
import './css/tailwind.css';

function FlexRow(props) {
	return <div className = "flex flex-row">{props.children}</div>
}

export default FlexRow;