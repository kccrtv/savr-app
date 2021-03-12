import React, { Fragment, Component, useState, useEffect } from 'react';
import './styles.css';
import SearchBar from './components/styled/Search/SearchBar';
import NavBar from './components/styled/Nav/NavBar';
import Hero from './components/styled/Hero/Hero';
import ThumbSection from './components/styled/Thumbnail/ThumbSection';
import FrameStyle from './components/styled/Phone/FrameStyle';
import PhoneTop from './components/styled/Phone/PhoneTop';
import MainBody from './components/styled/Phone/MainBody';

function Home() {
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
		<Fragment>
			<MainBody>
				<PhoneTop />
				<FrameStyle>
					<SearchBar />
					<Hero />
					<ThumbSection
						className='thumbnail-section'
						header='1st Header'
						src=''
					/>
					<ThumbSection
						className='thumbnail-section'
						header='2nd Header'
						src=''
					/>
					<NavBar />
				</FrameStyle>
			</MainBody>
		</Fragment>
	);
}

export default Home;

//put class name (webkit scrollbar in styled-component)
