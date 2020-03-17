import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import './css/tailwind.css';
import axios from 'axios';

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

// onChange={event => setPassword(event.target.value)}
// onChange={event => setUsername(event.target.value)}

function LoginForm(props) {
	return(
		<h1>loginform</h1>
	);
};

export default LoginForm;