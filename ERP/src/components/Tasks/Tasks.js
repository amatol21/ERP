import React from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';

class Tasks extends React.Component {

	constructor(){
		super();

		this.state = {

			statusDisabled: '',			// управление отключением строки статуса и ответственного в выпадающем списке справа
			responsibleDisabled: '',
			selected: 'Фильтры поиска',
			selectedStatus: '',
			selectedResponsible: '',
			searchSelectedStatus: '',
			searchSelectedResponsible: ''
		}
	}

	chooseOption = (event) => {												// функция отключения строки в выпадающем списке справа
		if(event.target.value === "Статус"){ 
			this.setState({
				selected: 'Статус', 
				statusDisabled: true
			});
		}
		else{
			this.setState({
				selected: 'Ответственный', 
				responsibleDisabled: true
			});
		}
	}

	addStatus = () => {												// добавления списка выбора статуса слева
		if(this.state.statusDisabled === true){
			return(
				<div className="tasks_Options_Statuses" >
					<select id="toSelectStatus" className="tasks_Options_Statuses_Select" onChange={(event) => {this.setState({selectedStatus: event.target.value});}}>			
						<option value="" selected disabled></option>
						<option value="Новая">Новая</option>
						<option value="В работе">В работе</option>
						<option value="Тестирование">Тестирование</option>
						<option value="Отложена">Отложена</option>
						<option value="Закрыта">Закрыта</option>
						<option value="Решена">Решена</option>
					</select>
					<button className="tasks_Options_Statuses_Delete" onClick={this.deleteStatus}>Удалить</button>
				</div>
			)
		}

		else return <></>
	}

	deleteStatus = () => {
		
		this.setState({
			selected: 'Фильтры поиска', 
			selectedStatus: '', 
			searchSelectedStatus: '', 
			statusDisabled: false
		});
		
	}

	addResponsible = () => {											// добавление списка выбора ответственного слева
		if(this.state.responsibleDisabled === true){
			
			return(
				<div className="tasks_Options_Responsible" >
					<select id="toSelectResponsible" className="tasks_Options_Responsible_Select" onChange={(event) => {this.setState({selectedResponsible: event.target.value})}}>
						<option value="" selected disabled></option>
						{this.props.members.map( (element, index) => {
							return(
								<option key={index} value={index}>{element}</option>
							)
						})}
					</select>
					<button className="tasks_Options_Responsible_Delete" onClick={this.deleteResponsible}>Удалить</button>
				</div>
			)
		}

		else return <></>
	}

	deleteResponsible = () => {
		this.setState({
			selected: 'Фильтры поиска', 
			selectedResponsible: '', 
			searchSelectedResponsible: '', 
			responsibleDisabled: false
		});
	}

	searchTasks = () => {
		this.setState({
			searchSelectedStatus: this.state.selectedStatus,
			searchSelectedResponsible: this.state.selectedResponsible
		});
	}


	tasksList = () => {		// запуск поиска задач по заданным параметрам

		let parameterList = {
				resultStatus: [],			
			 	resultResponsible: []
			 },
			 countArr = [],
			 resultArr = [],
			 counter = 0,
			 j = 0,
			 k = 0,
			 nullStatus,
			 nullResponsible;

		let taskArr=[];	// содержит все данные о всех задачах
		let arr = [];		// вспомогательный массив

		
		for(let i = 0; i < this.props.taskNumber.length; i++){
			arr[0] = this.props.taskNumber[i];
			arr[1] = this.props.taskType[i];
			arr[2] = this.props.taskStatus[i];
			arr[3] = this.props.taskTopic[i];
			arr[4] = this.props.taskChangeDate[i];

			taskArr[i] = [...arr];
		}


		if(this.state.searchSelectedStatus !== ''){
			j = 0;
			
			this.props.taskStatus.forEach( (element, index) => {
				if(element === this.state.searchSelectedStatus){
					parameterList.resultStatus.[j] = index; 		// тут лежат индексы задач с выбранным статусом
					j++;
				}
				
			})

			if(parameterList.resultStatus.[0] === undefined) nullStatus = 0;
		}


		if(this.state.searchSelectedResponsible !== ''){
			k = 0;
			
			this.props.taskResponsible.forEach( (element, index) => {
				if(element == this.state.searchSelectedResponsible){ 
					parameterList.resultResponsible.[k] = index;		// в resultResponsible лежат индексы задач, у которых ответственный выбранный сотрудник
					k++;
				}
			})

			if(parameterList.resultResponsible.[0] === undefined) nullResponsible = 0;
		}

		
		if( nullStatus === 0 || nullResponsible === 0)
			return(
				<></>
		)

		else if( this.state.searchSelectedStatus === '' && this.state.searchSelectedResponsible === '' ){
			return(
				<>
				{taskArr.map( (elem, index) => {
					return(
						<tr key={index}>
							<td><Link to={{
								pathname:`/task/${taskArr[index][0]}`,
								number: taskArr[index][0]
							}}>{taskArr[index][0]}</Link></td>
							<td>{taskArr[index][1]}</td>
							<td>{taskArr[index][2]}</td>
							<td><Link to={{
								pathname: `/task/${taskArr[index][0]}`,
								number: taskArr[index][0] 
							}}>{taskArr[index][3]}</Link></td>
							<td>{taskArr[index][4]}</td>
						</tr>
					)
				})}
				</>
			)
		}

		else{
			j = 0;
			
			for(let key in parameterList){

				if(parameterList[key].length !== 0){
					

					if(countArr.length === 0){
						countArr = [...parameterList[key]]
					}
					else{
						j++;
						for(let k = 0; k < countArr.length; k++){

							for(let l = 0; l < parameterList[key].length; l++){
								if(countArr[k] === parameterList[key].[l]){
									resultArr[counter] = countArr[k];
									counter++;
								}
							}

						}
					}
				}
			}

			if(j === 0) resultArr = [...countArr];

			return(
				<>
				{resultArr.map( (elem, index) => {
					return(
						<tr key={index}>
							<td><Link to={{
								pathname:`/task/${this.props.taskNumber[elem]}`,
								number: this.props.taskNumber[elem]
							}}>{this.props.taskNumber[elem]}</Link></td>
							<td>{this.props.taskType[elem]}</td>
							<td>{this.props.taskStatus[elem]}</td>
							<td><Link to={{
								pathname: `/task/${this.props.taskNumber[elem]}`,
								number: this.props.taskNumber[elem] 
							}}>{this.props.taskTopic[elem]}</Link></td>
							<td>{this.props.taskChangeDate[elem]}</td>
						</tr>
					)
				})}
				</>
			)
		} 
	}



	render(){
		return(
			<section className="tasks">
				<h1 className="tasks_Header">Задачи</h1>
				<form action="#" className="tasks_Form line">
					<div className="tasks_Form_Block">
						<Link to="/addtask" className="tasks_Form_Block_Add">Добавить задачу</Link>
					</div>	

					<select id="select" className="tasks_Form_Select" value={this.state.selected} onChange={this.chooseOption}>
						<option value="Фильтры поиска" disabled>Фильтры поиска</option>
						<option value="Статус" disabled={this.state.statusDisabled}>Статус</option>
						<option value="Ответственный" disabled={this.state.responsibleDisabled}>Ответственный</option>
					</select>
					
					<button type="button" className="tasks_Form_Search" onClick={this.searchTasks}>Поиск</button>
					
					<div className="tasks_Form_Filters"></div>
				</form>

				<form action="#" className="tasks_Options">

					{this.addStatus()}
					{this.addResponsible()}

				</form>
				
				<div className="tasks_Shell">
					<table className="tasks_Shell_Table">
						<thead>
							<tr className="first">
								<th className="tasks_Shell_Table_Number">Номер</th>
								<th className="tasks_Shell_Table_Type">Тип задачи</th>
								<th className="tasks_Shell_Table_Status">Статус</th>
								<th className="tasks_Shell_Table_Theme">Тема</th>
								<th className="tasks_Shell_Table_Date">Дата обновления</th>
							</tr>
						</thead>
						<tbody>
							{this.tasksList()}				
						</tbody>
					</table>	
				</div>
			</section>
		)
	}
}

export default connect(state => ({
	members: state.members,
	taskNumber: state.taskNumber,
	taskType: state.taskType,
	taskStatus: state.taskStatus,
	taskTopic: state.taskTopic,
	taskChangeDate: state.taskChangeDate,
	taskResponsible: state.taskResponsible,
	userName: state.userName
}))(Tasks);



