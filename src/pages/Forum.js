import React, { useState, useEffect } from "react";
import axios from 'axios';
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
	console.log(props.user.ismod);
		if(!props.match.params.id) {
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
		} else {
			let _id = props.match.params.id;
			axios.get('/api/forum/view/' + _id)
			.then(res=> {
				if(res.status === 200) {
					// let newForum = res.data;
					// setForum({
					// 	title: newForum.title,
					// 	description: newForum.description,
					// 	subforums: newForum.subforums,
					// 	threads: newForum.threads
					// });
					console.log(res);
				}
			});
		}
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
			<h1>{forum.title?forum.title:"no forum saved"}</h1>
			<h1>{forum.description?forum.description:"no forum saved"}</h1>
			<h1>{forum.subforums?forum.subforums:"no forum saved"}</h1>
			<h1>{forum.threads?forum.threads:"no forum saved"}</h1>
			<h1>is anything rendering?</h1>

			{
				props.user.ismod &&
				<EditForum user = {props.user} forum = {forum} setForum = {setForum} />
			}
		</div>
	);
}

export default Forum;