import React, { useContext } from "react";
import _ from 'lodash';
import './css/tailwind.css';
import UserProvider from '../../auth/UserProvider.js';

function Headbar(props)
{
	const userdata = useContext(UserProvider.context);
	const logintype = !_.isEmpty(userdata) ? console.log(userdata) : {};
	return(
		<div className = "bg-blue-900 p-5">
			Headbar
		</div>
	);
}

export default Headbar;