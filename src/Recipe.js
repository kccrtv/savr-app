import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import next from './components/assets/arrow-next-solid.svg';
import gradcap from './components/assets/graduation-cap-small.svg';
import back from './components/assets/prev.svg';
import share from './components/assets/share-regular.svg';
import heart from './components/assets/heart-regular.svg';
import { Link } from 'react-router-dom';

const key = process.env.REACT_APP_API_KEY;

const Content = styled.div`
	height: 528px;
	width: 396x;
	overflow-y: scroll;
	grid-row: 5;
	padding: 0 16px;
`;

const HeroTextSpan = styled.span`
	position: relative;
	bottom: -4px;
	color: #555556;
	display: inline-block;
	padding: 0.4rem 0;
	border-bottom: 4px solid #d5ba5e;
	outline: 0;
`;

const RecipeHeader = styled.h3`
	font-weight: 700;
	font-size: 2rem;
	margin: 0 0 0 16px;
`;

const RecipeHeaderDetailStyle = styled.p`
	display: inline-block;
	margin: 8px 0 0 0;
	padding: ${(props) => props.padding || '0'};
	font-weight: ${(props) => props.weight || '100'};
`;

const RecipeStepP = styled.p`
	display: inline;
	margin: 0 8px;
`;

const RecipeStepHeader = styled.h4`
	display: inline;
	margin: 0;
`;

const RecipeStepContainer = styled.div`
	display: flex;
	align-items: baseline;
`;

function RecipeStep(props) {
	return (
		<RecipeStepContainer>
			<RecipeStepHeader>{props.header}</RecipeStepHeader>
			<RecipeStepP>{props.text}</RecipeStepP>
		</RecipeStepContainer>
	);
}

const RecipeSkillContainer = styled.div`
	background: #fafaf9;
	box-shadow: 0px 0px 23px rgba(0, 0, 0, 0.1);
	border-radius: 11px;
	display: grid;
	grid-template-columns: repeat(8, 16px 32px);
	align-items: center;
	justify-content: space-around;
	padding-bottom: 8px;
`;

const RecipeSkillIconStyle = styled.img`
	padding: 0 8px;
	grid-column: 2;
`;

const RecipeSkillP = styled.p`
	color: #595959;
	display: inline-block;
	grid-column: 4 / 15;
`;

const ArrowRight = styled.a`
	padding: 8px;
	display: ${(props) => props.display || 'inline'};
	margin: 0 auto;
`;

function RecipeSkill(props) {
	return (
		<RecipeSkillContainer>
			<RecipeSkillIconStyle src={gradcap} alt='skills' />
			<RecipeSkillP>{props.text}</RecipeSkillP>

			<ArrowRight href={props.href} target='_blank'>
				<img src={next} alt='next' />
			</ArrowRight>
		</RecipeSkillContainer>
	);
}

const CheckListTable = styled.div`
	display: block;
	flex-direction: row;
`;

const CheckListTableUl = styled.ul`
	padding: 0;
	margin: 4px 0;
`;

const CheckListItem = styled.li`
	list-style: none;
	margin: 0 auto;
	padding: 8px 0;
`;

const CheckBox = styled.input`
	transform: scale(2);
	margin: 0 32px;
`;

function CheckListInput(props) {
	return (
		<CheckBox
			className='checkbox'
			type='checkbox'
			name='equipment'
			value={props.value}>
			{props.text}
		</CheckBox>
	);
}

function CheckListTableLi(props) {
	return (
		<CheckListItem>
			<CheckListInput value={props.value} />
			{props.text}
		</CheckListItem>
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

const apiUrl = `https://www.themealdb.com/api/json/v2/${key}/lookup.php?i=`;
function Recipe({ match }) {
	const [card, setCard] = useState();

	const mealId = match.params.id;
	let url = `${apiUrl}${mealId}`;

	function getCard() {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				let newCard = res.meals;
				let mealOne = Object.values(newCard[0]);
				const ingredients = mealOne.slice(9, 29);
				const measurements = mealOne.slice(29, 49);
				let reducedArr = measurements.reduce((acc, curr, index) => {
					return [...acc, `${curr} ${ingredients[index]}`];
				}, []);
				const ingredsArr = reducedArr.filter(
					(str) =>
						str.length >= 1 &&
						str !== 'null null' &&
						str !== '  ' &&
						str !== ' '
				);
				newCard.ingredients = ingredsArr;
				const steps = mealOne[5];
				const stepsArr = steps.toString().split('.');
				newCard.steps = stepsArr;
				setCard(newCard);
			})
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		getCard(card);
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			{card ? (
				<Content>
					<Hero
						id={card[0].idMeal}
						key={card[0].idMeal}
						src={card[0].strMealThumb}
					/>
					<div>
						<RecipeHeader>
							<HeroTextSpan>{card[0].strMeal}</HeroTextSpan>
						</RecipeHeader>
					</div>

					<section id='recipe-body'>
						{card[0].strYoutube && (
							<Fragment>
								<RecipeHeaderDetailStyle padding='8px 0' weight='700'>
									Visualize It
								</RecipeHeaderDetailStyle>

								<RecipeSkill href={card[0].strYoutube} text='Watch the video' />
							</Fragment>
						)}
						<RecipeHeaderDetailStyle padding='8px 0' weight='700'>
							Ingredients
						</RecipeHeaderDetailStyle>
						<CheckListTable>
							<CheckListTableUl>
								{card.ingredients.map((ingredient) => (
									<CheckListTableLi text={ingredient} />
								))}
							</CheckListTableUl>
						</CheckListTable>
						<RecipeHeaderDetailStyle padding='8px 0' weight='700'>
							Steps
						</RecipeHeaderDetailStyle>
						{card.steps.map((step, index) => {
							// eslint-disable-next-line
							if (step) {
								index++;
								return <RecipeStep header={index} text={step} />;
							}
						})}
					</section>
				</Content>
			) : null}

			<NavBarStyle>
				<BottomNavSection>
					<Link to='/'>
						<IconDiv src={back} />
					</Link>
					<Link to='/community'>
						<IconDiv column='5' src={share} />
					</Link>
					<Link to='/favorites'>
						<IconDiv column='6' src={heart} />
					</Link>
					<Hr />
				</BottomNavSection>
			</NavBarStyle>
		</Fragment>
	);
}

export default Recipe;
