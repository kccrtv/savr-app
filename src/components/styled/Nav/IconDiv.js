import React from 'react';
import IconDivStyle from './IconDivStyle';
import Icon from './Icon';
import NavIconText from './NavIconText';

function IconDiv(props) {
	return (
		<IconDivStyle row={props.row} column={props.column}>
			<Icon src={props.src} />
			<NavIconText>{props.text}</NavIconText>
		</IconDivStyle>
	);
}

export default IconDiv;
