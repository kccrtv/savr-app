import React from 'react';
import BottomNavSection from '../Nav/BottomNavSection';
import Hr from '../Nav/Hr';
import NavBarStyle from '../Nav/NavBarStyle';
import IconDiv from '../Nav/IconDiv';
import back from '../../assets/prev.svg';
import share from '../../assets/share-regular.svg';
import heart from '../../assets/heart-regular.svg';

function NavSimple() {
	return (
		<NavBarStyle>
			<BottomNavSection>
				<IconDiv src={back} />
				<IconDiv column='4' src={share} />
				<IconDiv column='5' src={heart} />

				<Hr />
			</BottomNavSection>
		</NavBarStyle>
	);
}

export default NavSimple;
