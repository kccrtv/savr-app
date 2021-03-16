import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import users from './users-solid.svg';
import gradcap from './gradcap-solid.svg';
import home from './home-solid.svg';
import faves from './fire-wave-solid.svg';
import more from './ellipses-solid.svg';

const Construction = styled.div`
	padding: 50px;
	height: 560px;
	width: 396x;
	overflow-y: scroll;
	grid-row: 5;
`;

const HeroText = styled.h2`
	font-weight: 600;
	font-size: 1.7rem;
	grid-row: 9;
	grid-column: 2 / span 17;
	line-height: 0.9;
	text-shadow: #fc0 1px 0 10px;
`;

const HeroTextSpan = styled.span`
	position: relative;
	bottom: -11px;
	color: #555556;
	display: inline-block;
	padding: 0.4rem 0;
	border-bottom: 4px solid #d5ba5e;
	outline: 0;
`;
const NavBarStyle = styled.nav`
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
	color: #555556;
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

function NavBarFavorites(props) {
	return (
		<Fragment>
			<Construction>
				<HeroText>Favorites</HeroText>
				<HeroTextSpan>Under Construction!</HeroTextSpan>
			</Construction>
			<NavBarStyle>
				<BottomNavSection>
					<Link style={{ textDecoration: 'none' }} to='/community'>
						<IconDiv src={users} text='Community' />
					</Link>
					<Link style={{ textDecoration: 'none' }} to='/skills'>
						<IconDiv src={gradcap} text='Skills' />
					</Link>

					<Link style={{ textDecoration: 'none' }} to='/'>
						<IconDiv src={home} text='Home' />
					</Link>

					<Link style={{ textDecoration: 'none' }} to='/favorites'>
						<IconDiv src={faves} text='Favorites' />
					</Link>
					<Link style={{ textDecoration: 'none' }} to='/more'>
						<IconDiv src={more} text='More' />
					</Link>

					<Hr />
				</BottomNavSection>
			</NavBarStyle>
		</Fragment>
	);
}

export default NavBarFavorites;
