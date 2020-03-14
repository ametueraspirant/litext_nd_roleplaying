import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './css/tailwind.css';
// import UserProvider from '../../auth/UserProvider.js';

function Headbar(props)
{
	const userdata = null;
	// const logintype = !_.isEmpty(userdata) ? console.log(userdata) : {};
	return(
		<div className = "bg-blue-900 p-10 flex flex-row justify-between">
			<Link className = "text-2xl font-semibold" to = "/">Home</Link>
			{
				!_.isEmpty(userdata) &&
				<div className = "flex flex-row">
					<Link className = "text-2xl font-semibold" to = "/profile">profile</Link>
					<Link className = "text-2xl font-semibold" to = "/logout">log out</Link>
				</div>
			}
			{
				_.isEmpty(userdata) &&
				<Link className = "text-2xl font-semibold" to = "/login">log in</Link>
			}			
		</div>
	);
}

export default Headbar;