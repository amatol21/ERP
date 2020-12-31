import React from 'react';
import {NavLink} from 'react-router-dom';
import ControlPart from '../ControlPart/ControlPart';

class Header extends React.Component{

	constructor(){
		super();
		this.state = {
			attr: {top: '1rem', left: '-25rem'}
		};

	}

	showMenu = (event) => {
		event.preventDefault();
		this.setState ({attr: {top: '1rem', left: '1rem'}});
	}

	hideMenu = (event) => {
		event.preventDefault();
		this.setState ({attr: {top: '1rem', left: '-25rem'}});
	}

	render(){
		return(
			<header>
				<nav className="line nav">
					<span><img src={require("../../assets/img/header/menu.png")} className="header_Button" alt="menu" onClick={this.showMenu}/>
					</span>
					<div className="header_Little_Menu" style={this.state.attr}>
						<NavLink to="/review">Обзор</NavLink>
						<NavLink to="/tasks">Задачи</NavLink>
						<NavLink to="/dialogs">Диалоги</NavLink> 
						<button onClick={this.hideMenu}>&times;</button>
					</div>
					<NavLink to="/review" className="header_Big_Menu" id="review">Обзор</NavLink>
					<NavLink to="/tasks" className="header_Big_Menu">Задачи</NavLink>
					<NavLink to="/dialogs" className="header_Big_Menu">Диалоги</NavLink> 
					<ControlPart/>				
					
				</nav>
			</header>
		)
	}
}

export default Header;



