import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './css/tailwind.css';
import axios from 'axios';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const local_submit = event => {
	event.preventDefault();
	axios.post('/auth/local')
		.then(res => {
			if(res.status === 200){
				props.updateUser({
					loggedin: true,
					username: res.data.username
				})
			}
		})
};

function LoginForm(props) {
	return(
		<div className = "flex flex-col">
			<h1>Log In</h1>
			<form>
				<h2>Username</h2>
				<input type = "text" onChange = {event => setPassword(event.target.value)}/>
				<h2>Password</h2>
				<input type = "text" onChange = {event => setUsername(event.target.value)}/>
				<div className = "flex flex-row">
					<input type = "submit" value = "Log in" onClick = {local_submit}/>
					<Link to = "/register">Sign up</Link>
				</div>
			</form>
			<Link to = "/auth/github">log in with github</Link>
			<Link to = "/auth/twitter">log in with twitter</Link>
		</div>
	);
};

export default LoginForm;