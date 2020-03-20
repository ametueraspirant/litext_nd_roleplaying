import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './css/tailwind.css';
import axios from 'axios';

function LoginForm(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const local_submit = event => {
		event.preventDefault();
		axios.post('/auth/local', {username: username, password: password})
		.then((req, res) => {
			if(res.status === 200){
				props.setUser({
					loggedin: true,
					username: res.data.username,
					password: res.data.password
				});
			};
		});
	};

	return(
		<div className = "flex flex-col">
			<h1>Log In</h1>
			<form>
				<h2>Username</h2>
				<input type = "text" onChange = {event => setUsername(event.target.value)}/>
				<h2>Password</h2>
				<input type = "password" onChange = {event => setPassword(event.target.value)}/>
				<div className = "flex flex-row">
					<input type = "submit" value = "Log in" onClick = {local_submit}/>
					<Link to = "/register">Sign up</Link>
				</div>
			</form>
			{/* <a href = "/auth/github">log in with github</a>
			<a href= "/auth/twitter">log in with twitter</a> */}
		</div>
	);
};

export default LoginForm;