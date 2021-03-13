import React from 'react';
import CheckListItem from './CheckListItem';
import CheckListInput from './CheckListInput';

function CheckListTableLi(props) {
	return (
		<CheckListItem>
			<CheckListInput value={props.value} />
			{props.text}
		</CheckListItem>
	);
}

export default CheckListTableLi;
