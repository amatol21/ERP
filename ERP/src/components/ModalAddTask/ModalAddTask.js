import React from 'react';

const ModalAddTask = (props) => {

	if(props.show === false) return(<></>) 
	else{	
	return(
		<div className="modal">
			<div className="modal_Window">
				<div className="modal_Window_Content">
					<button className="modal_Window_Content_Close" type="button" onClick={() => props.setShow()}>
			    		<span>&times;</span>
				   </button>
					<p>Задача добавлена</p>
				</div>
			</div>
		</div>
	);}
}

export default ModalAddTask;
