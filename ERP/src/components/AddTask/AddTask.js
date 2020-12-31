import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ModalAddTask from '../ModalAddTask/ModalAddTask';

const AddTask = () => {

	let [selectedType, setSelectedType] = useState('Проектирование'),
		 [taskHeader, setTaskHeader] = useState(''),
		 [show, setShow] = useState(false),
		 dispatch = useDispatch();

	const toSelectType = (event) => {
		setSelectedType(event.target.value);
	}

	const toTakeHeader = (event) => {
		setTaskHeader(event.target.value);
	}

	const toCreateTask = (event) => {
		event.preventDefault();
		const textArr = document.getElementsByTagName('p');
		let taskText = '';

		for(let i = 0; i < textArr.length; i++){
			taskText += `${textArr[i].textContent}\n`;
		}
		
		dispatch({
			type: 'ADD_TASK', 
			taskType: selectedType, 
			topic: taskHeader,
			taskMainText: taskText
		})

		setShow(true);

	}

	const setView = () => {
		setShow(false);
	}

	
	return(
		<section className="content_AddTask">
			<h1 className="content_AddTask_Header">Добавить задачу</h1>        
			<div className="content_AddTask_Info">
				<form action="#">
					<div className="content_AddTask_Info_Parameters">
						<div className="content_AddTask_Info_Parameters_Left">
							<div>Автор:</div>
							<select readOnly className="content_AddTask_Info_Parameters_Select">
								<option value='Келдыш Мстислав'>Келдыш Мстислав</option>
							</select>
							<div>Ответственный:</div>
							<select readOnly className="content_AddTask_Info_Parameters_Select">
								<option value='Келдыш Мстислав'>Келдыш Мстислав</option>
							</select>
						</div>
						<div className="content_AddTask_Info_Parameters_Right">
							<div>Тип задачи:</div>
							<select className="content_AddTask_Info_Parameters_Select" onChange={toSelectType}>
								<option value="Проектирование">Проектирование</option>
								<option value="Разработка">Разработка</option>
								<option value="Тестирование">Тестирование</option>
								<option value="Доработки">Доработки</option>
								<option value="Маркетинг">Маркетинг</option>
								<option value="SEO">SEO</option>
							</select>
						</div>
					</div>
					<div className="content_AddTask_Info_Text">
						<label htmlFor="headerTitle">Название задачи</label>
						<input type="text" onChange={toTakeHeader}/>
						<label htmlFor="taskText">Текст задачи</label>
						
						<CKEditor className="content_AddTask_Info_Text_Text"
							editor={ ClassicEditor }
							data="Функции редактора текста урезаны специально"
							onReady={ editor => {
								//console.log( 'Editor is ready to use!', editor );
							} }
							onChange={ ( event, editor, e ) => {
								//const data = editor.getData();

								//console.log( { event, editor, data } );

							} }
							onBlur={ ( event, editor ) => {
								//console.log( 'Blur.', editor );
							} }
							onFocus={ ( event, editor ) => {
								//console.log( 'Focus.', editor );
								
							} }

							
						/>
						
						<button className="content_AddTask_Info_Text_Add" onClick={toCreateTask}>Добавить задачу</button>
					</div>
				</form>
			</div>
				
			<ModalAddTask show={show} setShow={setView}/>
		</section>
	)
}



export default AddTask;




