import React from 'react';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Review = () => {
	
	let i = 0,
		 taskDate = useSelector( state => state.taskDate ),
		 taskNumber = useSelector( state => state.taskNumber ),
		 taskTopic = useSelector( state => state.taskTopic ),
		 members = useSelector( state => state.members ),
		 lastNews = useSelector( state => state.lastNews );
	const newTasksArr = [],
			newTaskDate = '23.05.2020';
	taskDate.forEach( (elem, index) => {
		if(elem === newTaskDate){
			newTasksArr[i] = index;
			i++;
		}
	})

	return(
		<section className=" line content_Review">
			<h1 className="content_Review_Header">Обзор</h1>
			<div className="content_Review_Tasks">
				<h2>Новые задачи:</h2> 
				<p> 
					{newTasksArr.map( (elem, index) => {
						return (<React.Fragment key={index}>
							<Link to={{
								pathname: `/task/${taskNumber[elem]}`,
								number: taskNumber[elem]
							}}>{taskNumber[elem]} {taskTopic[elem]}</Link> <br />
						</React.Fragment >)
					})}
				</p>
			</div>
			<div className="content_Review_Members">
				<h2>Все участники:</h2>
				<p>
					{members.map( (elem, index) => {
						if((index+1) !== members.length){
							return (
								<Link key={index} to={{
									pathname: `/member/${index}`,
									member: index
								}}>{elem}, </Link>
							)}
						else{
							return(
								<Link key={index} to={{
									pathname: `/member/${index}`,
									member: index
								}}>{elem} </Link>
							) 
						}
					})}
				</p>
			</div>
			<div className="content_Review_News">
				<h2>Последние новости:</h2>
				<ul>
					{lastNews.map( (elem, index) => {
						return (
							<li key={index}>{elem}</li> 
						)
					})}
				</ul>
			</div>	
		</section>
	)
}

export default Review;



