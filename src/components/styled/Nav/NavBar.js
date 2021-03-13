import React, { Fragment } from 'react';
import BottomNavSection from './BottomNavSection';
import Hr from './Hr';
import NavBarStyle from './NavBarStyle';
import IconDiv from './IconDiv';
import users from '../../assets/users-solid.svg';
import gradcap from '../../assets/gradcap-solid.svg';
import home from '../../assets/home-solid.svg';
import faves from '../../assets/fire-wave-solid.svg';
import more from '../../assets/ellipses-solid.svg';

function NavBar() {
	return (
		<NavBarStyle>
			<BottomNavSection>
				<IconDiv src={users} text='Community' />
				<IconDiv src={gradcap} text='Skills' />
				<IconDiv src={home} text='Home' />
				<IconDiv src={faves} text='Favorites' />
				<IconDiv src={more} text='More' />

				<Hr />
			</BottomNavSection>
		</NavBarStyle>
	);
}

export default NavBar;
