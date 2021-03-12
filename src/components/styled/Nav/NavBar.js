import React from 'react';
import BottomNav from './BottomNav';
import NavContainer from './NavContainer';
import NavBarIconsText from './NavBarIconsText';

function NavBar() {
	return (
		<BottomNav>
			<NavContainer>
				<NavBarIconsText />
			</NavContainer>
		</BottomNav>
	);
}

export default NavBar;
