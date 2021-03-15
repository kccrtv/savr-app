import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Recipe from './Recipe';
import users from './components/assets/users-solid.svg';
import gradcap from './components/assets/gradcap-solid.svg';
import home from './components/assets/home-solid.svg';
import faves from './components/assets/fire-wave-solid.svg';
import more from './components/assets/ellipses-solid.svg';
import NavBarCommunity from './components/NavBarCommunity';
import NavBarSkills from './components/NavBarSkills';
import NavBarFavorites from './components/NavBarFavorites';
import NavBarMore from './components/NavBarMore';
import header from './components/assets/header.svg';
import { Route, Redirect } from 'react-router-dom';

const MainBody = styled.main`
	display: grid;
	grid-template-rows: repeat(10, 16px 48px);
`;

const PhoneBody = styled.section`
	margin: 0 auto;
	width: 414px;
	height: ${(props) => props.height || '720px'};
	background: #ffffff;
	box-shadow: 0 0 23px 0 #aaaaaa;
	border-radius: 30px;
	display: grid;
	grid-template-rows: repeat(13, 8px 40px);
`;

const FrameTop = styled.div`
	border-radius: 30px 0 30px 0;
	width: 414px;
	height: 88px;
	margin: 0;
	padding: 0;
`;

function PhoneTop(props) {
	return (
		<FrameTop>
			<img src={header} alt='phone top' />
		</FrameTop>
	);
}

const ThumbImage = styled.img`
	width: ${(props) => props.width || '72px'};
	height: ${(props) => props.height || '72px'};
	border-radius: 10px;
`;

const ThumbItemStyle = styled.li`
	list-style: none;
	width: 72px;
	height: 72px;
	border-radius: 10px;
	margin: 0 8px 0 0;
	display: grid;
	grid-template-rows: repeat(8, 8px);
	grid-template-columns: repeat(8, 8px);
`;

function ThumbLink(props) {
	return (
		<a href={props.href}>
			<ThumbItemStyle>
				<ThumbImage key={props.id} src={props.src} alt='latest meal' />
			</ThumbItemStyle>
		</a>
	);
}

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

function App() {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Route path='/' exact component={Home} />
				<Route path='/community' component={NavBarCommunity} />
				<Route path='/skills' component={NavBarSkills} />
				<Route path='/home' render={() => <Redirect to='/' />} />
				<Route path='/favorites' component={NavBarFavorites} />
				<Route path='/more' component={NavBarMore} />
				<Route path='/recipe/:id' component={Recipe} />
			</PhoneBody>
		</MainBody>
	);
}

export default App;
