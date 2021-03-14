import React, { useState, useEffect } from 'react';
import SearchBar from './components/styled/Search/SearchBar';
import NavBar from './components/styled/Nav/NavBar';
import Hero from './components/styled/Hero/Hero';
import ThumbSection from './components/styled/Thumbnail/ThumbSection';
import MainBody from './components/styled/Phone/MainBody';
import PhoneBody from './components/styled/Phone/PhoneBody';
import Content from './components/styled/Phone/Content';
import PhoneTop from './components/styled/Phone/PhoneTop';
import ThumbListItem from './components/styled/Thumbnail/ThumbListItem';
import { getByTitle } from '@testing-library/dom';
import HeroImage from './components/styled/Hero/HeroImage';

const key = process.env.REACT_APP_API_KEY;

function Home() {
	const [hero, setHero] = useState(null);
	function getHero(hero) {
		const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&tags=dessert&number=1`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let newHero = res.recipes;
				setHero(newHero);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getHero(hero);
	}, []);

	const [category, setCategory] = useState('');
	function getCategory(category) {
		const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&number=2&intolerances=nuts`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let results = res.recipes;
				setCategory(results);
			})
			.catch((err) => console.log(err));
	}

	function createThumb(thumb) {
		return <HeroImage src={thumb.image} />;
	}
	useEffect(() => {
		getCategory(category);
		console.log(category);
	}, []);

	// https://api.spoonacular.com/recipes/random?limitLicense=true&number=4&cuisine='italian'

	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					<SearchBar placeholder='Search' buttonText='go' />
					{hero ? (
						<Hero key={hero[0].id} src={hero[0].image} title={hero[0].title} />
					) : null}
				</Content>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default Home;

//put class name (webkit scrollbar in styled-component)

/**
 *Show Images https://spoonacular.com/cdn/ingredients_100x100/apple.jpg
 */

/* {thumbs
							? thumbs.map((thumb) => (
									<ThumbListItem key={thumb.id} src={thumb.image} />
							  ))
							: null} */
/**
 * 		
 * 
 * 
 * 
 * 
 * 
 * <ThumbSection header='first row of thumbs'>
						{thumbs.map((thumb) => {
							return <ThumbListItem key={thumb.id} src={thumb.image} />;
						})}
						;
					</ThumbSection>
 */

/**
 * 	const [thumbs, setThumbs] = useState('');

	// function createThumb(thumb) {
	// 	return <ThumbListItem key={thumb.id} src={thumb.image} />;
	// }

	// function getThumbs(firstRowThumb) {
	const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&number=4&cuisine='italian`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setThumbs(res.recipes);
				console.log(thumbs);
			})
			.catch((err) => console.log(err));
	}, []);
	// }
 */
