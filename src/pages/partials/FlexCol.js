import React from 'react';
import './css/tailwind.css';

function FlexCol(props) {
	return <div className = "flex flex-col">{props.children}</div>
}

export default FlexCol;