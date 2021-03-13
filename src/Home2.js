import React from 'react';
import header from './components/assets/Header.svg';
import NavBar from './components/styled/Nav/NavBar';
import SearchIcon from './components/styled/Search/SearchIcon';
import search from './components/assets/search.svg';

function Home2(props) {
	return (
		<main>
			<section id='phone-body'>
				<div id='frame-top'>
					<img src={header} alt='phone top' />
				</div>
				<div id='content'>
					<form id='search-form'>
						<div id='search-div'>
							<SearchIcon src={search} alt='search icon' />
							<input id='search-input' placeholder='search'></input>
						</div>
						<button id='primary-button'>go</button>
					</form>
				</div>
			</section>
			<NavBar />
		</main>
	);
}

export default Home2;
