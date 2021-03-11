import React, { useState, useEffect } from 'react';
import './styles.css';
import phonetop from './components/assets/Header.svg';
import users from './components/assets/users-solid.svg';
import gradcap from './components/assets/gradcap-solid.svg';
import home from './components/assets/home-solid.svg';
import faves from './components/assets/fire-wave-solid.svg';
import more from './components/assets/ellipses-solid.svg';
import search from './components/assets/search.svg';
const key = process.env.REACT_APP_API_KEY;

function AppTwo() {
	const [hero, setHero] = useState('');
	const [heroTitle, setHeroTitle] = useState('');
	const [thumb, setThumb] = useState('');
	const [thumbTwo, setThumbTwo] = useState('');
	const [dishType, setDishType] = useState('');
	const [dishTypeTwo, setDishTypeTwo] = useState('');
	// const searchOptions = {
	// 	key: process.env.REACT_APP_API_KEY,
	// 	limitLicense: true,
	// 	tags: 'dessert',
	// 	number: 9,
	// };

	useEffect(() => {
		const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&tags=dessert&number=3`;
		// const url = `https://api.spoonacular.com/recipes/random?limitLicense=true&tags=dessert&number=3&apiKey=${key}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res);
				console.log(res.recipes);
				// console.log(res.recipes[0].title);
				// console.log(res.recipes[0].sourceUrl);
				// console.log(res.recipes[0].image);
				// console.log(res.recipes[1].title);
				// console.log(res.recipes[1].sourceUrl);
				// console.log(res.recipes[1].image);
				// console.log(res.recipes[2].title);
				// console.log(res.recipes[2].sourceUrl);
				// console.log(res.recipes[2].image);
				setHero(res.recipes[0].image);
				setHeroTitle(res.recipes[0].title);
				setThumb(res.recipes[1].image);
				setThumbTwo(res.recipes[2].image);
				setDishType(res.recipes[0].dishType);
				setDishTypeTwo(res.recipes[1].dishType);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<main>
				{/* Top */}
				<img className='phone-top' src={phonetop} alt='phone base'></img>
				<div className='frame'>
					{/* Search Bar */}
					<form className='search-form'>
						<div className='searchbar'>
							<img className='search-icon' src={search} alt='search'></img>
							<input placeholder='Search'></input>
						</div>
						<button className='button-search'>go</button>
					</form>
					{/* Middle */}
					<figure className='hero'>
						<div className='hero-image'>
							<img src={hero} alt='hero random recipe' />
						</div>
						<h3 className='hero-title'>
							<span>{heroTitle}</span>
						</h3>
					</figure>

					{/* Middle Horizontal Scroll */}
					<h4 className='thumbnail-header first-header'>{dishType}</h4>
					<div className='thumbnail-section first-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<img src={thumb} alt='random recipe' />
							</li>
							<li className='thumb'>
								<img src={thumbTwo} alt='random recipe' />
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
					<h4 className='thumbnail-header second-header'>{dishTypeTwo}</h4>
					<div className='thumbnail-section second-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<img src={thumb} alt='random recipe' />
							</li>
							<li className='thumb'>
								<img src={thumbTwo} alt='random recipe' />
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
*/
