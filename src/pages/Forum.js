import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditForum } from './partials';

function Forum(props)
{
	const [forum, setForum] = useState({
		title: "",
		description: "",
		subforums: [],
		threads: []
	});

	useEffect(()=> {
		axios.get('/api/forum')
		.then(res=> {
			if(res.status === 200) {
				let newForum = res.data;
				setForum({
					title: newForum.title,
					description: newForum.description,
					subforums: newForum.subforums,
					threads: newForum.threads
				});
			}
		});
	}, []);

	const getForum = event=> {
		event.preventDefault();
		axios.get('/api/forum/view/test')
		.then(res=> {
			if(res.status === 200) {
				console.log(res);
			}
		})
	}

	return(
		<div>
			<button onClick={getForum}>test</button>
			{
				props.user.ismod &&
				<EditForum forum = {forum} setForum = {setForum} />
			}
		</div>
	);
}

export default Forum;