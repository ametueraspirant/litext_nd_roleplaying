import React, { createContext, useState, useEffect } from 'react';
const context = createContext(null);
const userprovider = ({ children }) => {
	const [user, setUser] = useState({});
	useEffect(() => {
		fetch("/user").then(res => res.json()).then(res => setUser(res)).catch(err => console.log(err));
	}, []);
	return(
		<context.Provider value = {user}>
			{children}
		</context.Provider>
	);
};

userprovider.context = context;

export default userprovider;