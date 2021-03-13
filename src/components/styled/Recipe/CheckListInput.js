import React from 'react';
import CheckBox from './CheckBox';

function CheckListInput(props) {
	return (
		<CheckBox
			className='checkbox'
			type='checkbox'
			name='equipment'
			value={props.value}>
			{props.text}
		</CheckBox>
	);
}

export default CheckListInput;
