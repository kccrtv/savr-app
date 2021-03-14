import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import header from './components/assets/header.svg';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
const key = process.env.REACT_APP_API_KEY;

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

const ThumbHeader = styled.h4`
	margin: ${(props) => props.margin || '0 42px'};
	font-weight: 400;
	text-transform: uppercase;
	font-size: 0.9rem;
	line-height: 16px;
	letter-spacing: 2px;
`;

const ThumbContainer = styled.div`
	display: flex;
	overflow: hidden;
	margin: 0 42px;
`;

const ThumbUnorderedList = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
`;

const ThumbImage = styled.img`
	width: ${(props) => props.width || '72px'};
	height: ${(props) => props.height || '72px'};
	border-radius: 10px;
`;

const ThumbItemStyle = styled.li`
	list-style: none;
	width: 72px;
	height: 72px;
	border-radius: 10px;
	margin: 0 8px 0 0;
	display: grid;
	grid-template-rows: repeat(8, 8px);
	grid-template-columns: repeat(8, 8px);
`;

function ThumbLink(props) {
	return (
		<a href={props.href}>
			<ThumbItemStyle>
				<ThumbImage key={props.id} src={props.src} alt='latest meal' />
			</ThumbItemStyle>
		</a>
	);
}

function Home() {
	const [hero, setHero] = useState(null);
	const [category, setCategory] = useState([]);
	const thumbsArr = [];
	const rowOne = category.slice(0, 4);
	const rowTwo = category.slice(5, 9);

	function getHero() {
		const heroUrl = `https://www.themealdb.com/api/json/v2/${key}/random.php`;
		return fetch(heroUrl)
			.then((res) => res.json())
			.then((res) => {
				let newHero = res.meals;
				setHero(newHero);
			})
			.catch((err) => console.log(err));
	}

	function getCategory() {
		const categoryUrl = `https://www.themealdb.com/api/json/v2/${key}/randomselection.php`;

		return fetch(categoryUrl)
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
		// eslint-disable-next-line
	}, []);

	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					<SearchBar placeholder='Search' buttonText='go' />
					{hero ? (
						<Hero
							href=''
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
