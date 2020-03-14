import React, { useContext } from "react";
import './css/tailwind.css';
import userprovider from '../../auth/userprovider.js';

function Headbar(props)
{
	const userstatus = useContext(userprovider.context());
	return(
		<h1>Headbar</h1>
	);
}

export default Headbar;