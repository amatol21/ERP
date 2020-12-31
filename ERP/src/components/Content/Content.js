import React from 'react';
import Review from '../Review/Review';
import Tasks from '../Tasks/Tasks';
import Dialogs from '../Dialogs/Dialogs';
import Task from '../Task/Task';
import Member from '../Member/Member';
import AddTask from '../AddTask/AddTask';
import PageNotFound from '../PageNotFound/PageNotFound';
import {Route, Switch, Redirect} from "react-router-dom";

class Content extends React.Component {
	
	render(){ 
		return (
			<div className="content" key="content">
				<Switch key="switch">
					<Route exact path="/">
						<Redirect to="/review" />
					</Route>
					<Route path='/review' render={ () => <Review />}/>
					<Route path='/tasks' render={ () => <Tasks />}/>
					<Route path='/dialogs' render={ () => <Dialogs />}/>
					<Route path='/task/:id' component={Task}/>
					<Route path='/member' component={Member}/>
					<Route path='/addtask' render={ () => <AddTask />}/>
					<Route render={ () => <PageNotFound />}/>
				</Switch>
			</div>
		)
	}
}

export default Content;




