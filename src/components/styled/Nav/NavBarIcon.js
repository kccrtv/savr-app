import React from 'react';
import IconContainer from './IconContainer';
import Icon from './Icon';
import NavIconText from './NavIconText';

function NavBarIcon(props) {
	return (
		<IconContainer>
			<Icon src={props.src} />
			<NavIconText>{props.text}</NavIconText>
		</IconContainer>
	);
}

export default NavBarIcon;
