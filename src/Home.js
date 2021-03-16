import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import users from './components/assets/users-solid.svg';
import gradcap from './components/assets/gradcap-solid.svg';
import home from './components/assets/home-solid.svg';
import faves from './components/assets/fire-wave-solid.svg';
import more from './components/assets/ellipses-solid.svg';
import { Link } from 'react-router-dom';
const key = process.env.REACT_APP_API_KEY;

const Content = styled.div`
	height: 560px;
	width: 396x;
	overflow-y: scroll;
	grid-row: 5;
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
	padding: 2px 0 4px 0;
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
		<Link to={'/recipe/' + props.id} href={props.href}>
			<ThumbItemStyle>
				<ThumbImage
					id={props.id}
					key={props.id}
					src={props.src}
					alt='latest meal'
				/>
			</ThumbItemStyle>
		</Link>
	);
}

const NavBarStyle = styled.nav`
	border-radius: 0 0 30px;
	grid-row: 31 / span 4;
	width: 414px;
	margin: 0 auto;
	padding: 0;
`;

const BottomNavSection = styled.section`
	background-color: #f6f7f8;
	display: grid;
	justify-content: center;
	grid-template-columns: ${(props) => props.columns || 'repeat(5, 8ch)'};
	border-radius: 0 0 30px 30px;
	height: 104px;
`;

const IconDivStyle = styled.div`
	text-align: center;
	margin-bottom: 0px;
	background-color: #f6f7f8;
	display: ${(props) => props.display || 'block'};
	grid-column: ${(props) => props.column};
	grid-row: ${(props) => props.row};
`;

function Icon(props) {
	return <input type='image' src={props.src} alt='icon' />;
}

const NavIconText = styled.p`
	font-weight: 500;
	font-size: 0.8rem;
	margin: 0 auto;
	background-color: #f6f7f8;
	color: #555556;
`;

function IconDiv(props) {
	return (
		<IconDivStyle row={props.row} column={props.column}>
			<Icon src={props.src} />
			<NavIconText>{props.text}</NavIconText>
		</IconDivStyle>
	);
}

const Hr = styled.hr`
	grid-row: 33;
	grid-column: 2 / span 3;
	width: 55%;
	background-color: black;
	height: 7px;
	border-radius: 100px;
`;

function Home({ meal }) {
	const [hero, setHero] = useState(null);
	const [category, setCategory] = useState([]);
	const [thumbData, setThumbData] = useState(null);
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

	function getThumbUrls(thumbData) {
		let idUrl = category.reduce((acc, curr) => {
			let thumbUrl = `https://www.themealdb.com/api/json/v2/${key}/lookup.php?i=`;
			return [...acc, `${thumbUrl}${curr.idMeal}`];
		}, []);
		setThumbData(idUrl);
	}

	useEffect(() => {
		getHero(hero);
		getCategory(category);
		setCategory(thumbsArr);
		getThumbUrls(thumbData);
		// eslint-disable-next-line
	}, []);
	const thumbUrl = `https://www.themealdb.com/api/json/v2/${key}/lookup.php?i=`;

	return (
		<Fragment>
			<Content>
				{hero ? (
					<Hero
						href={`${thumbUrl}${hero[0].idMeal}`}
						id={hero[0].idMeal}
						key={hero[0].idMeal}
						src={hero[0].strMealThumb}
						title={hero[0].strMeal}
					/>
				) : null}

				<ThumbHeader>Exotic Eats</ThumbHeader>
				<ThumbContainer>
					<ThumbUnorderedList>
						{rowOne.map((meal) => (
							<ThumbLink
								href={`${thumbUrl}${meal.idMeal}`}
								id={meal.idMeal}
								key={meal.idMeal}
								src={meal.strMealThumb}
							/>
						))}
					</ThumbUnorderedList>
				</ThumbContainer>

				<ThumbHeader>Fresh Finds</ThumbHeader>
				<ThumbContainer>
					<ThumbUnorderedList>
						{rowTwo.map((meal) => (
							<ThumbLink
								href={`${thumbUrl}${meal.idMeal}`}
								id={meal.idMeal}
								key={meal.idMeal}
								src={meal.strMealThumb}
							/>
						))}
					</ThumbUnorderedList>
				</ThumbContainer>
			</Content>
			<NavBarStyle>
				<BottomNavSection>
					<Link style={{ textDecoration: 'none' }} to='/community'>
						<IconDiv src={users} text='Community' />
					</Link>
					<Link style={{ textDecoration: 'none' }} to='/skills'>
						<IconDiv src={gradcap} text='Skills' />
					</Link>
					<Link style={{ textDecoration: 'none' }} to='/'>
						<IconDiv src={home} text='Home' />
					</Link>
					<Link style={{ textDecoration: 'none' }} to='/favorites'>
						<IconDiv src={faves} text='Favorites' />
					</Link>
					<Link style={{ textDecoration: 'none' }} to='/more'>
						<IconDiv src={more} text='More' />
					</Link>
					<Hr />
				</BottomNavSection>
			</NavBarStyle>
		</Fragment>
	);
}

export default Home;
