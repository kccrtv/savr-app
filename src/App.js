import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import Recipe from './Recipe';
import NavBarCommunity from './NavBarCommunity';
import NavBarSkills from './NavBarSkills';
import NavBarFavorites from './NavBarFavorites';
import NavBarMore from './NavBarMore';
import header from './header.svg';
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
	);
}

export default App;
