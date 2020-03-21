import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './css/tailwind.css';
import axios from 'axios';
import passport from "passport";

function SignupForm(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	const local_submit = event => {
		event.preventDefault();
		axios.post('/auth/local/register', { username: username, password: password })
		.then(res => {
			if(!res.data.errmsg) {
				props.setuser({
					loggedin: true,
					username: res.data.username,
					password: res.data.password
				});
			};
		})
		.catch(err => {
			console.log(err);
		})
	};

	return(
		<div className = "flex flex-col">
			<h1>Sign Up</h1>
			<form>
				<h2>Username</h2>
				<input type = "text" onChange = {event => setUsername(event.target.value)}/>
				<h2>Password</h2>
				<input type = "password" onChange = {event => setPassword(event.target.value)}/>
				<input type = "submit" value = "Sign Up" onClick = {local_submit}/>
				<Link to = "/login">Log In</Link>
			</form>
		</div>
	);
};

export default SignupForm;