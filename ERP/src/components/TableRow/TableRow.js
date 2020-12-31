import React from 'react';

const TableRow = (props) => {

	return(
		<tr>
			<td className={props.class}>{props.name}</td>
			<td>{props.value}</td>
		</tr>
	)
}

export default TableRow;
