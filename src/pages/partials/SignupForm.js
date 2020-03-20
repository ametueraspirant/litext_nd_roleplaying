import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './css/tailwind.css';
import axios from 'axios';

function SignupForm(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	
	return(
		<div className = "flex flex-col">
			<h1>Sign Up</h1>
			<form>
				<h2>Username</h2>
				<input type = "text" onChange = {event => setPassword(event.target.value)}/>
				<h2>Password</h2>
				<input type = "text" onChange = {event => setUsername(event.target.value)}/>
				<input type = "submit" value = "Sign Up"/>
				<Link to = "/login">Log In</Link>
			</form>
		</div>
	);
};

export default SignupForm;