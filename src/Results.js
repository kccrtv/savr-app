import React, { Fragment, Component, useState, useEffect } from 'react';
import './styles.css';
import SearchResults from './components/styled/Results/SearchResults';
import NavBar from './components/styled/Nav/NavBar';
// import HeroFigure from './components/styled/Hero/HeroFigure';
import ThumbImage from './components/styled/Thumbnail/ThumbImage';
import PhoneBody from './components/styled/Phone/PhoneBody';
import PhoneTop from './components/styled/Phone/PhoneTop';
import MainBody from './components/styled/Phone/MainBody';
import ThumbUnorderedStyle from './components/styled/Thumbnail/ThumbUnorderedStyle';
import ResultRow from './components/styled/Results/ResultRow';

function Results() {
	return (
		// <Fragment>
		<MainBody>
			<PhoneTop />
			<PhoneBody overflow='auto'>
				<SearchResults placeholder='Your Recipe' opacity={1} />
				<ThumbUnorderedStyle direction='column'>
					<ResultRow />
					<ResultRow />
					<ResultRow />
				</ThumbUnorderedStyle>
			</PhoneBody>
			<NavBar />
		</MainBody>
		// </Fragment>
	);
}

export default Results;
