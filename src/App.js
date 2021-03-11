<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Recipe from './Recipe';
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
=======
import './styles.css';
const key = process.env.REACT_APP_API_KEY;

function App() {
	return (
		<div>
			<h1>Hello World!</h1>
		</div>
>>>>>>> 0a6346a... begin scaffolding home page
	);
}

export default App;
