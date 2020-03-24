import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Forum(props)
{
	const [post, getPost] = useState
	const getForum = event => {
		event.preventDefault();
		axios.get('/api/forum')
		.then(res=> {
			if(res.status === 200){
				console.log("got the forum", res);
			};
		});
	};

	return(
		<button onClick = {getForum}>test</button>
	);
}

export default Forum;