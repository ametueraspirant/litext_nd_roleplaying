import React from "react";
import { SignupForm } from './partials';

function Register(props)
{
	return(
		<SignupForm user = { props.user } setUser = { props.setUser } />
	);
}

export default Register;