import React, { Fragment, Component, useState, useEffect } from 'react';
import SearchBar from './components/styled/Search/SearchBar';
import NavBar from './components/styled/Nav/NavBar';
import Hero from './components/styled/Hero/Hero';
import ThumbSection from './components/styled/Thumbnail/ThumbSection';
import PhoneTop from './components/styled/Phone/PhoneTop';
import FrameTop from './components/styled/Phone/PhoneTop';
import MainBody from './components/styled/Phone/MainBody';
import PageBodyStyle from './components/styled/Phone/PageBodyStyle';
import PhoneBody from './components/styled/Phone/PhoneBody';
import header from './components/assets/Header.svg';
import PhoneBase from './components/styled/Phone/PhoneBase';

const key = process.env.REACT_APP_API_KEY;

function App() {
	return (
		<PhoneBase>
			<Hero />
			<ThumbSection />
		</PhoneBase>
	);
}

export default App;
