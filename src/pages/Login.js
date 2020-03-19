import React from "react";
import { LoginForm } from './partials';

function Login(props)
{
	return(
		<LoginForm user = { props.user } setUser = { props.setUser } />
	);
}

export default Login;