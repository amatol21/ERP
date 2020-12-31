import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import img from "../../assets/img/member/person.png";
import MemberTableRow from '../MemberTableRow/MemberTableRow';

class Member extends React.Component {

	render(){
		
		let photo,
			 memberIndex, 			// индекс сотрудника, 
			 taskListArr = [];	// массив задач, которые находятся в работе и у которых данный сотрудник является ответственным
			 

		if(this.props.membersPhoto[this.props.location.member]){
			photo = this.props.membersPhoto[this.props.location.member];
		}
		else photo = 'person.png'; 

		if(this.props.location.member) memberIndex = this.props.location.member
		else memberIndex = 0;

		this.props.taskResponsible.forEach( (element, index) => {
			if(element === memberIndex && (this.props.taskStatus[index] === 'В работе' || this.props.taskStatus[index] === 'Тестирование')){ 
			taskListArr.push(index);
			}
		})

		return (
			<section className="content_Member">
				<div className="line content_Member_Header">
					<img className="content_Member_Header_Photo" src={require(`../../assets/img/member/${photo}`)} alt="person" />
					<h1 className="content_Member_Header_Name">{this.props.members.[memberIndex]}</h1>
				</div>
				<div className="line content_Member_Info">
					<table>
						<tbody>
							<MemberTableRow icon="position.png" name="Должность:" value={this.props.membersData.[memberIndex].position}/>
							<MemberTableRow icon="registration.png" name="Дата регистрации:" value={this.props.membersData.[memberIndex].registrationDate}/>
							<MemberTableRow icon="department.png" name="Отдел:" value={this.props.membersData.[memberIndex].department}/>
							<MemberTableRow icon="activity.png" name="Последняя активность:" value={this.props.membersData.[memberIndex].lastActivity}/>
							<MemberTableRow icon="city.png" name="Город:" value={this.props.membersData.[memberIndex].city}/>
							<MemberTableRow icon="birth.png" name="Дата рождения:" value={this.props.membersData.[memberIndex].dateOfBirth}/>				
						</tbody>
					</table>
					<table>
						<tbody>
							<MemberTableRow icon="email.png" name="Email:" value={this.props.membersData.[memberIndex].email}/>
							<MemberTableRow icon="workPhone.png" name="Рабочий телефон:" value={this.props.membersData.[memberIndex].workPhone}/>
							<MemberTableRow icon="mobile.png" name="Мобильный:" value={this.props.membersData.[memberIndex].mobilePhone}/>
							<MemberTableRow icon="skype.png" name="Skype:" value={this.props.membersData.[memberIndex].skype}/>
							<MemberTableRow icon="telegram.png" name="Telegram:" value={this.props.membersData.[memberIndex].telegram}/>
							<MemberTableRow icon="workTime.png" name="Время работы:" value={this.props.membersData.[memberIndex].workTime}/>					
						</tbody>
					</table>
					<div className="content_Member_Info_Tasks">
						<p className="content_Member_Info_Tasks_Header">Задачи в работе:</p>
						{taskListArr.map( (elem, index) => {
							return(
								<p key={index} className="content_Member_Info_Tasks_Value">
									<Link to={{
										pathname:`/task/${this.props.taskNumber[elem]}`,
										number: this.props.taskNumber[elem]
									}}>№ {`${this.props.taskNumber[elem]} ${this.props.taskTopic[elem]}`}</Link>
								</p>
							)
						})}
					</div>
				</div>
			</section>
		)
	}
}

export default connect( state => ({
	membersData: state.membersData,
	membersPhoto: state.membersPhoto,
	taskResponsible: state.taskResponsible,
	taskStatus: state.taskStatus,
	members: state.members,
	taskNumber: state.taskNumber,
	taskTopic: state.taskTopic}))(Member);

