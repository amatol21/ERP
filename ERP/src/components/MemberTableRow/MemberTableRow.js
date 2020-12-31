import React from 'react';

const MemberTableRow = (props) => {

	return(
		<tr>
			<td className="content_Member_Info_Icon"><img className="content_Member_Info_Name_Icon" src={require(`../../assets/img/member/${props.icon}`)} alt="icon" /></td>
			<td className="content_Member_Info_Name">{props.name}</td>
			<td className="content_Member_Info_Value">{props.value}</td>
		</tr>
	)
}

export default MemberTableRow;
