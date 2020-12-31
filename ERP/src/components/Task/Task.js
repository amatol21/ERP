import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableRow from '../TableRow/TableRow';

export default function Task(props) {

	let i,
		 taskNumber = useSelector( state => state.taskNumber),
		 taskTopic = useSelector( state => state.taskTopic),
		 members = useSelector( state => state.members),
		 taskResponsible = useSelector( state => state.taskResponsible),
		 taskType = useSelector( state => state.taskType),
		 taskStatus = useSelector( state => state.taskStatus),
		 taskChangeDate = useSelector( state => state.taskChangeDate),
		 taskDate = useSelector( state => state.taskDate),
		 taskText = useSelector( state => state.taskText),
		 comments = useSelector( state => state.comments),
		 dispatch = useDispatch(),
		 chosenTask,
		 viewedComments;

	const [commentText, setCommentText] = useState('');

	(props.location.number === undefined)? chosenTask = taskNumber.[0] : chosenTask = props.location.number;

	taskNumber.forEach( (elem, index) => {
		if(elem === chosenTask) i = index; 
	});

	const allComments = () => {
		if(viewedComments === undefined){
			return(
				<></>
			)
		}

		else {
			return(
				comments.map( (elem, index) => {
					return(
						<div key={index} className="content_Task_Comments_Item">
							<p className="content_Task_Comments_Item_Name">{elem.member}. {elem.date}; {elem.time}</p>
							<p className="content_Task_Comments_Item_Text">{elem.comment}</p>
						</div>
					) 
				})
			)
		}
	}

	const sendComment = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_COMMENT',
			member: 'Келдыш Мстислав',
			comment: commentText,
			commentsArray: i
		});
		setCommentText('');
	}

	return (
		<section className="content_Task">
			<h1 className="content_Task_Header"> Задача № {chosenTask}</h1>
			<div className="content_Task_Service">
				<h2>{taskTopic.[i]}</h2>
				<div className="content_Task_Service_Tables">
					<table>
						<tbody>
							<TableRow class="content_Task_Service_Tables_Name" name="Автор:" value={members[taskResponsible.[i]]}/>
							<TableRow class="content_Task_Service_Tables_Name" name="Приоритет:" value="Нет"/>
							<TableRow class="content_Task_Service_Tables_Name" name="Исполнитель:" value={members[taskResponsible.[i]]}/>
							<TableRow class="content_Task_Service_Tables_Name" name="Исходная оценка:" value="Нет"/>
							<TableRow class="content_Task_Service_Tables_Name" name="Затраченное время:" value="Нет"/>
							<TableRow class="content_Task_Service_Tables_Name" name="Метки:" value="Нет"/>			
						</tbody>
					</table>
					<table>
						<tbody>
							<TableRow class="content_Task_Service_Tables_Name" name="Тип задачи:" value={taskType.[i]}/>
							<TableRow class="content_Task_Service_Tables_Name" name="Статус:" value={taskStatus.[i]}/>
							<TableRow class="content_Task_Service_Tables_Name" name="Последнее изменение:" value={taskChangeDate.[i]}/>
							<TableRow class="content_Task_Service_Tables_Name" name="Дата добавления:" value={taskDate.[i]}/>
							<TableRow class="content_Task_Service_Tables_Name" name="Дата релиза:" value="Нет"/>
						</tbody>
					</table>

				</div>
			</div>
			<div className="content_Task_Info">
				<p className="content_Task_Info_Label">Описание:</p>
				<p className="content_Task_Info_Text">{taskText.[i]}</p>
			</div>
			<div className="content_Task_Add">
				<form action="#">
					<textarea rows="3" placeholder="Добавить комментарий" className="content_Task_Add_Text" value={commentText} onChange={ (event) => {setCommentText(event.target.value);} }></textarea>
					<button onClick={sendComment}>Добавить</button>
				</form>
			
			</div>	
			<div className="content_Task_Comments">
				<h2>Комментарии</h2>
				{allComments()}
			</div>
		</section>
	)
}




