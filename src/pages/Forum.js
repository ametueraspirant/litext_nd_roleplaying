import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Forum(props)
{
	const [forum, setForum] = useState({
		title: "",
		description: "",
		subforums: [],
		threads: []
	});

	useEffect(()=> {

	}, []);

	// const getForum = event => {
	// 	event.preventDefault();
	// 	axios.get('/api/forum')
	// 	.then(res=> {
	// 		if(res.status === 200){
	// 			console.log("got the forum", res);
	// 		};
	// 	});
	// };

	return(
		<h1>{forum.title?forum.title:"no forum saved"}</h1>
		<h1>{forum.description?forum.description:"no forum saved"}</h1>
		<h1>{forum.subforums?forum.subforums:"no forum saved"}</h1>
		<h1>{forum.threads?forum.threads:"no forum saved"}</h1>
	);
}

export default Forum;