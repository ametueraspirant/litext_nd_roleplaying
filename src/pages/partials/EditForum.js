import React from 'react';
import './css/tailwind.css';
import axios from 'axios';

function EditForum(props) {
	if(props.user.ismod)
	{
		return(
			<h1>edit</h1>
		);
	} else {
		return(
			<h1>noedit</h1>
		);
	}
};

export default EditForum;