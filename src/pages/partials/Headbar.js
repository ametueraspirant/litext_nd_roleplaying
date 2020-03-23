import React from "react";
import { Link } from 'react-router-dom';
import './css/tailwind.css';
import backimg from '../../blackpaper.png';
import axios from 'axios';

function Headbar(props)
{
	const logOut = event => {
		event.preventDefault();
		axios.post('/api/logout')
		.then(res => {
			if(res.status === 200) {
				props.setUser({
					username: "",
					password: "",
					loggedin: false
				});
			};
		});
	};

	return(
		<div className = "bg-blue-900 p-10 flex flex-row justify-between" style = {{backgroundImage: backimg}}>
			<Link className = "text-2xl font-semibold" to = "/">Home</Link>
			{
				props.user.loggedin ?
				<div className = "flex flex-row">
					<Link className = "text-2xl font-semibold pr-8" to = "/forum">forum</Link>
					<Link className = "text-2xl font-semibold pr-8" to = "/profile">profile</Link>
					<button className = "text-2xl font-semibold" onClick = {logOut}>log out</button>
				</div>
				:
				<div className = "flex flex-row">
					<Link className = "text-2xl font-semibold pr-8" to = "/forum">forum</Link>
					<Link className = "text-2xl font-semibold" to = "/login">log in</Link>
				</div>
			}	
		</div>
	);
}

export default Headbar;