import React from 'react';
import { useSelector } from 'react-redux';

const Members = (props) => {
	
	const members = useSelector(state => state.members);
	let attr;			

	return(
		<div className="dialogs_Members">
			<h2 className="dialogs_Members_Header">Участники</h2>
			<ul onClick={props.chooseMember}>	
				{members.map( (element, index) => {
					(index !== 3)? attr = {display: 'block'} : attr = {display: 'none'}
					return(
						<li key={index} className="dialogs_Members_Item" style={attr}>{element}</li>
					)
				})}
			</ul> 
		</div>
	)
}

export default Members;