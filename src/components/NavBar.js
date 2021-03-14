import React from 'react';
import styled from 'styled-components';
import users from './assets/users-solid.svg';
import gradcap from './assets/gradcap-solid.svg';
import home from './assets/home-solid.svg';
import faves from './assets/fire-wave-solid.svg';
import more from './assets/ellipses-solid.svg';
import { Route, Link } from 'react-router-dom';

const NavBarStyle = styled.div`
	border-radius: 0 0 30px;
	grid-row: 31 / span 4;
	width: 414px;
	margin: 0 auto;
	padding: 0;
`;

const BottomNavSection = styled.section`
	background-color: #f6f7f8;
	display: grid;
	justify-content: center;
	grid-template-columns: ${(props) => props.columns || 'repeat(5, 8ch)'};
	border-radius: 0 0 30px 30px;
	height: 104px;
`;

const IconDivStyle = styled.div`
	text-align: center;
	margin-bottom: 0px;
	background-color: #f6f7f8;
	display: ${(props) => props.display || 'block'};
	grid-column: ${(props) => props.column};
	grid-row: ${(props) => props.row};
`;

function Icon(props) {
	return <input type='image' src={props.src} alt='icon' />;
}

const NavIconText = styled.p`
	font-weight: 500;
	font-size: 0.8rem;
	margin: 0 auto;
	background-color: #f6f7f8;
`;

function IconDiv(props) {
	return (
		<IconDivStyle row={props.row} column={props.column}>
			<Icon src={props.src} />
			<NavIconText>{props.text}</NavIconText>
		</IconDivStyle>
	);
}

const Hr = styled.hr`
	grid-row: 33;
	grid-column: 2 / span 3;
	width: 55%;
	background-color: black;
	height: 7px;
	border-radius: 100px;
`;

function NavBar() {
	{
		/* <Link to='/'></Link>
<Link to='/'></Link>
<Link to='/'></Link>
<Link to='/'></Link> */
	}

	return (
		<NavBarStyle>
			<BottomNavSection>
				<IconDiv src={users} text='Community' />
				<IconDiv src={gradcap} text='Skills' />
				<Link to='/'>
					<IconDiv src={home} text='Home' />
				</Link>
				<IconDiv src={faves} text='Favorites' />
				<IconDiv src={more} text='More' />

				<Hr />
			</BottomNavSection>
		</NavBarStyle>
	);
}

export default NavBar;
