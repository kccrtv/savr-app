import React, { Fragment } from 'react';
import users from '../../assets/users-solid.svg';
import gradcap from '../../assets/gradcap-solid.svg';
import home from '../../assets/home-solid.svg';
import faves from '../../assets/fire-wave-solid.svg';
import more from '../../assets/ellipses-solid.svg';
import NavBarIcon from './NavBarIcon';

function NavBarIconsText() {
	return (
		<Fragment>
			<NavBarIcon src={users} text='Community' />
			<NavBarIcon src={gradcap} text='Skills' />
			<NavBarIcon src={home} text='Home' />
			<NavBarIcon src={faves} text='Favorites' />
			<NavBarIcon src={more} text='More' />
		</Fragment>
	);
}

export default NavBarIconsText;
