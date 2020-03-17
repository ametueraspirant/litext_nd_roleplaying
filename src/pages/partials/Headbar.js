import React from "react";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import './css/tailwind.css';
import backimg from '../../blackpaper.png';

function Headbar(props)
{
	const userdata = null;
	return(
		<div className = "bg-blue-900 p-10 flex flex-row justify-between" style = {{backgroundImage: backimg}}>
			<Link className = "text-2xl font-semibold" to = "/">Home</Link>
			{
				!_.isEmpty(userdata) &&
				<div className = "flex flex-row">
					<Link className = "text-2xl font-semibold pr-8" to = "/profile">profile</Link>
					<Link className = "text-2xl font-semibold" to = "/logout">log out</Link>
				</div>
			}
			{
				_.isEmpty(userdata) &&
				<div className = "flex flex-row">
					<Link className = "text-2xl font-semibold pr-8" to = "/login">log in</Link>
					<Link className = "text-2xl font-semibold" to = "/forum">forum</Link>
				</div>
			}
				
		</div>
	);
}

export default Headbar;