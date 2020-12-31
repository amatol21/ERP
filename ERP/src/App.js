import React from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import './assets/css/style.css';

class App extends React.Component {
	
	render(){
		return (
			<div>
				<Header />	
				<Content />	
			</div>
		)
	}
}

export default App;

