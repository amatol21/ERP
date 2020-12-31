import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Channels from '../Channels/Channels';
import Messages from '../Messages/Messages';
import Members from '../Members/Members';

const Dialogs = () => {

	let name,
		 membersNicks = useSelector(state => state.membersNicks),
		 people = useSelector(state => state.members);
	const [member, setMember] = useState(membersNicks.[0]);
	

	const chooseMember = (event) => {
		
		name = event.target.textContent;
		people.forEach( (element, index) => {
			if(element === name){
				setMember(membersNicks.[index]);
			}
		});
	}

	return(
		<section className="line dialogs">
			<h1 className="dialogs_Header">Чат</h1>
			<Channels />
			<Messages member={member}/>
			<Members chooseMember={chooseMember}/>
		</section>
	)
}

export default Dialogs; 


