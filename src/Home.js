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
		const heroUrl = `https://www.themealdb.com/api/json/v2/${key}/random.php`;

		fetch(heroUrl)
			.then((res) => res.json())
			.then((res) => {
				let newHero = res.meals;
				setHero(newHero);
			})
			.catch((err) => console.log(err));
	}

	function getCategory(category) {
		const categoryUrl = `https://www.themealdb.com/api/json/v2/${key}/latest.php`;

		fetch(categoryUrl)
			.then((res) => res.json())
			.then((res) => {
				let latest = res.meals;
				setCategory(latest);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getHero(hero);
		getCategory(category);
		var thumbsArr = [];
		category.forEach((meal) => thumbsArr.push(meal.strMealThumb));
		console.log(thumbsArr);
	}, []);

	const [category, setCategory] = useState([]);

	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					<SearchBar placeholder='Search' buttonText='go' />
					{hero ? (
						<Hero
							key={hero[0].idMeal}
							src={hero[0].strMealThumb}
							title={hero[0].strMeal}
						/>
					) : null}

					{/* {category ? 
					{category.map((meal) => console.log(meal))}
					
					: null} */}
				</Content>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default Home;

//put class name (webkit scrollbar in styled-component)

// const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&tags=dessert&number=1`;
