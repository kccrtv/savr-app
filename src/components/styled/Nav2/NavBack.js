import React from 'react';
import BottomNavSection from '../Nav/BottomNavSection';
import Hr from '../Nav/Hr';
import NavBarStyle from '../Nav/NavBarStyle';
import IconDiv from '../Nav/IconDiv';
import back from '../../assets/prev.svg';

function NavBack() {
	return (
		<NavBarStyle>
			<BottomNavSection>
				<IconDiv src={back} />
				<Hr />
			</BottomNavSection>
		</NavBarStyle>
	);
}

export default NavBack;
