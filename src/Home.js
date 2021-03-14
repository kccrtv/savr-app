import React, { useState, useEffect } from 'react';
import SearchBar from './components/styled/Search/SearchBar';
import NavBar from './components/styled/Nav/NavBar';
import Hero from './components/styled/Hero/Hero';

import MainBody from './components/styled/Phone/MainBody';
import PhoneBody from './components/styled/Phone/PhoneBody';
import Content from './components/styled/Phone/Content';
import PhoneTop from './components/styled/Phone/PhoneTop';
import ThumbLink from './components/styled/Thumbnail/ThumbLink';
import ThumbImage from './components/styled/Thumbnail/ThumbImage';
import ThumbItemStyle from './components/styled/Thumbnail/ThumbItemStyle';
import ThumbContainer from './components/styled/Thumbnail/ThumbContainer';
import ThumbHeader from './components/styled/Thumbnail/ThumbHeader';
import ThumbUnorderedList from './components/styled/Thumbnail/ThumbUnorderedList';

const key = process.env.REACT_APP_API_KEY;

function Home() {
	const [hero, setHero] = useState(null);
	const [category, setCategory] = useState([]);
	const thumbsArr = [];
	const rowOne = category.slice(0, 4);
	const rowTwo = category.slice(5, 9);

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
		const categoryUrl = `https://www.themealdb.com/api/json/v2/${key}/randomselection.php`;

		fetch(categoryUrl)
			.then((res) => res.json())
			.then((res) => {
				let latest = res.meals;
				setCategory(latest);
				category.forEach((meal) => thumbsArr.push(meal));
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getHero(hero);
		getCategory(category);
		setCategory(thumbsArr);
	}, []);

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

					<ThumbHeader>Exotic Eats</ThumbHeader>

					<ThumbContainer>
						<ThumbUnorderedList>
							{rowOne.map((meal) => (
								<ThumbLink href='' key={meal.idMeal} src={meal.strMealThumb} />
							))}
						</ThumbUnorderedList>
					</ThumbContainer>

					<ThumbHeader>Fresh Finds</ThumbHeader>
					<ThumbContainer>
						<ThumbUnorderedList>
							{rowTwo.map((meal) => (
								<ThumbLink href='' key={meal.idMeal} src={meal.strMealThumb} />
							))}
						</ThumbUnorderedList>
					</ThumbContainer>
				</Content>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default Home;

//put class name (webkit scrollbar in styled-component)

// const url = `https://api.spoonacular.com/recipes/random?apiKey=${key}&limitLicense=true&tags=dessert&number=1`;
