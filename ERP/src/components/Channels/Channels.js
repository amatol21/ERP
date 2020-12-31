import React from 'react';
import { useSelector } from 'react-redux';


const Channels = () => {
	let channels = useSelector(state => state.channels);

	return(
		<div className="dialogs_Channels">
			<h2 className="dialogs_Channels_Header">Каналы</h2>	
			<ul>	
				{channels.map( (element, index) => {return <li key={index} className="dialogs_Channels_Item">{element}</li>})}
			</ul> 
		</div>
	)
}

export default Channels;





