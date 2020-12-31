import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useSelector } from 'react-redux';

const ControlPart = () => {
	const userName = useSelector(state => state.userName),
			[name] = useState(userName);

	return(
		<div className="nav_Out">
			<span>Привет, {name}</span>
			<NavLink to="/review" className="nav_Out_Exit">Выход</NavLink>
		</div>
	)
}

export default ControlPart;




