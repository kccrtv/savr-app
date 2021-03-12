import React, { Component, useState, useEffect } from 'react';
// import styled from 'styled-components';
import SearchBar from './components/styled/Search/SearchBar';
import './styles.css';
import phonetop from './components/assets/Header.svg';
import users from './components/assets/users-solid.svg';
import gradcap from './components/assets/gradcap-solid.svg';
import home from './components/assets/home-solid.svg';
import faves from './components/assets/fire-wave-solid.svg';
import more from './components/assets/ellipses-solid.svg';
// import search from './components/assets/search.svg';

function AppTwo() {
	const key = process.env.REACT_APP_API_KEY;
	const [hero, setHero] = useState('');
	const [heroTitle, setHeroTitle] = useState('');
	const [thumb, setThumb] = useState('');
	const [thumbTwo, setThumbTwo] = useState('');
	// const [dishType, setDishType] = useState('');
	// const [dishTypeTwo, setDishTypeTwo] = useState('');
	// const searchOptions = {
	// 	key: process.env.REACT_APP_API_KEY,
	// 	limitLicense: true,
	// 	tags: 'dessert',
	// 	number: 9,
	// };

	// useEffect(() => {
	// 	// const randomSearchOptions = {
	// 	// 	endpoint: 'https://api.spoonacular.com/recipes/',
	// 	// 	category: 'random',
	// 	// 	tags: 'dessert',
	// 	// 	number: 3,
	// 	// };
	// 	// const url = `${randomSearchOptions.endpoint}${randomSearchOptions.category}?apiKey=${key}&limitLicense=true&tags=${randomSearchOptions.tags}&number=${randomSearchOptions.number}`;
	// 	// const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&tags=dessert&number=3`;
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			// console.log(res);
	// 			console.log(res.recipes);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	return (
		<div>
			<main>
				{/* Top */}
				<img className='phone-top' src={phonetop} alt='phone base'></img>
				<div className='frame'>
					{/* Search Bar */}

					{/* {SearchBar} */}
					<SearchBar />

					{/* Middle */}
					<figure className='hero'>
						<div className='hero-image'>
							<img src='' alt='hero random recipe' />
						</div>
						<h3 className='hero-title'>
							<span>Title</span>
						</h3>
					</figure>

					{/* Middle Horizontal Scroll */}
					<h4 className='thumbnail-header first-header'>Header</h4>
					<div className='thumbnail-section first-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<img src='' alt='random recipe' />
							</li>
							<li className='thumb'>
								<img src='' alt='random recipe' />
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
						</ul>
					</div>
					{/* Another Middle Horizontal Scroll */}
					<h4 className='thumbnail-header second-header'>Header</h4>
					<div className='thumbnail-section second-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<img src='' alt='random recipe' />
							</li>
							<li className='thumb'>
								<img src='' alt='random recipe' />
							</li>
						</ul>
					</div>

					<section className='bottom-nav'>
						{/* Bottom */}
						<div className='navbar-container'>
							<div className='icon-container'>
								<input className='icon' type='image' src={users} alt='icon' />
								<p className='icon-text'>Community</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={gradcap} alt='icon' />
								<p className='icon-text'>Skills</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={home} alt='icon' />
								<p className='icon-text'>Home</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={faves} alt='icon' />
								<p className='icon-text'>Favorites</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={more} alt='icon' />
								<p className='icon-text'>More</p>
							</div>
						</div>
						<hr />
					</section>
				</div>
			</main>
		</div>
	);
}

export default AppTwo;

/* resources: https://www.w3schools.com/cssref/css_units.asp
 *https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll
 https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
 https://github.com/styled-components/styled-components/issues/3045
*/
