import React from 'react';
import styled from 'styled-components';
import header from './components/assets/header.svg';
import NavBar from './NavBar';

// STYLED COMPONENTS
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
	grid-template-rows: repeat(10, 80px);
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

const Content = styled.div`
	height: 560px;
	width: 396x;
	overflow-y: scroll;
`;

function NavBarCommunity(props) {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					<h1>Community</h1>
					<p>Under Construction!</p>
				</Content>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default NavBarCommunity;
