import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class Train extends React.Component {

	constructor(){
		super();

		this.state = {
			
		}

		this.textInput = React.createRef();
	}

	func = () => {
		const eventClick = new Event("click"),
				firstPage = document.getElementById('review');
		firstPage.dispatchEvent(eventClick);

		console.log(eventClick);
		console.log(firstPage);
	}

	

	render(){
		return(

			<div>
				<button onClick={this.func}>Кнопка</button>
				<p>Lorem ipsum dolor sit amet, consectetur adi<em>pisicing elit.</em> At, fugiat?</p>
				<br />
				<br />
				<br />
				
				<input type="text" ref={this.textInput} style={{border: '1px solid black'}}/>
				<br />
				<br />
				<br />
				
				<br />
				<br />
				
			
			</div>
		)
	}
}

export default Train;

