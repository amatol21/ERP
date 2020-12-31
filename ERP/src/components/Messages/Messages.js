import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Messages = (props) => {

	let dialog = [],
		 i = -1,
		 person = '',
		 membersDialogs = useSelector( state => state.membersDialogs),
		 members = useSelector( state => state.members ),
		 dispatch = useDispatch();
	const [messageText, setMessageText] = useState('');

	for(let key in membersDialogs){//store.getState().membersDialogs){
		i++;
		if(props.member === key){
			dialog = membersDialogs[key];//store.getState().membersDialogs[key];
			person = members.[i];//store.getState().members.[i];
		}
	}

	const toTakeText = (event) => {
		setMessageText(event.target.value);
	}

	const toSendText = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_MESSAGE_TEXT', 
			id: props.member,
			text: messageText
		});
		setMessageText('');
	}

	return(
		<div className="dialogs_Messages">
			<h2 className="dialogs_Messages_Header">Сообщения</h2>
			<div className="dialogs_Messages_Tank">
				
				{dialog.map( (element, index) => {
					return(
						<div key={index} className={element.member}>
							<p className="member_Name">{(element.member === 'owner')? 'Я' :person}:</p>
							<p className="member_Message">{dialog.[index].message}</p>
							<p className="member_Date">{dialog.[index].date}; {dialog.[index].time}</p>
						</div>
					)
				})}
			</div>
			<form action="#">
				<textarea placeholder="Введите сообщение" onChange={toTakeText} value={messageText}></textarea>
				<button onClick={toSendText}>Отправить</button>
			</form>
		</div>
	)
}

export default Messages;