import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import header from './components/assets/header.svg';
import next from './components/assets/arrow-next-solid.svg';
import gradcap from './components/assets/graduation-cap-small.svg';
import back from './components/assets/prev.svg';
import share from './components/assets/share-regular.svg';
import heart from './components/assets/heart-regular.svg';
import { Link, Route, Redirect } from 'react-router-dom';
import mealData from './components/data.json';
const key = process.env.REACT_APP_API_KEY;

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
	height: 528px;
	width: 396x;
	overflow-y: scroll;
	grid-row: 5;
`;

const HeroTextSpan = styled.span`
	position: relative;
	bottom: -11px;
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

const RecipeHeaderDetail = styled.div`
	padding: 8px 16px 0 0;
	margin: 0;
	display: flex;
	flex-direction: column;
`;

const RecipeHeaderDetailStyle = styled.p`
	display: inline-block;
	margin: 8px 0 0 0;
	padding: ${(props) => props.padding || '0'};
	font-weight: ${(props) => props.weight || '100'};
`;

function RecipeHeaderDetailDiv(props) {
	return (
		<RecipeHeaderDetail>
			<RecipeHeaderDetailStyle>{props.text}</RecipeHeaderDetailStyle>
			<RecipeHeaderDetailStyle>
				<strong>{props.textStrong}</strong>
			</RecipeHeaderDetailStyle>
		</RecipeHeaderDetail>
	);
}

const RecipeDetailDiv = styled.div`
	padding: 0 16px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
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

const RecipeTabContainer = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 16px;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
`;

const RecipeTabDiv = styled.div`
	margin: 0;
	display: inline-flex;
	border-left: 1px solid lightgray;
`;

const RecipeTab = styled.a`
	text-decoration: none;
	color: #555556;
	margin: 16px 8px 0 0;
	padding: 8px;
	font-weight: 400;
	text-transform: uppercase;
	font-size: 0.9rem;
	line-height: 16px;
	letter-spacing: 2px;
`;

function TabDiv(props) {
	return (
		<RecipeTabDiv className={props.className}>
			<RecipeTab href={props.href}>{props.header}</RecipeTab>
		</RecipeTabDiv>
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

const ArrowRight = styled.img`
	padding: 0 8px;
	display: ${(props) => props.display || 'inline'};
`;

function RecipeSkill(props) {
	return (
		<RecipeSkillContainer>
			<RecipeSkillIconStyle src={gradcap} alt='skills' />
			<RecipeSkillP>{props.text}</RecipeSkillP>
			<ArrowRight src={next} alt='next' />
		</RecipeSkillContainer>
	);
}

const CheckListTable = styled.div`
	display: inline-flex;
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

const PrimaryButton = styled.button`
	background-color: #007aff;
	color: white;
	border-radius: 14px;
	border: none;
	width: 374px;
	height: 3rem;
	z-index: 2;
	font-size: 1.5rem;
	position: relative;
	bottom: 0px;
`;

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

function NavSimple() {
	return (
		<NavBarStyle>
			<BottomNavSection>
				<IconDiv src={back} />
				<IconDiv column='4' src={share} />
				<IconDiv column='5' src={heart} />

				<Hr />
			</BottomNavSection>
		</NavBarStyle>
	);
}
/*********************************************************************************************************************************/
function Recipe(props) {
	// const [meal, setMeal] = useState(null);

	// function getMeal() {
	// 	const mealUrl = `https://www.themealdb.com/api/json/v2/${key}/search.php?s=spaghetti`;
	// 	return fetch(mealUrl)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			let newMeal = res.meals;
	// 			setMeal(newMeal);

	// 			let ingreds = Object.entries(meal[0]);
	// 			// console.log(ingreds);
	// 			let firstMeal = Object.entries(ingreds);
	// 			// console.log(firstMeal);
	// 			console.log(firstMeal[9]);
	// 			console.log(firstMeal[28]);
	// 			console.log(firstMeal[39]);
	// 			console.log(firstMeal[48]);
	// 		})
	// 		.catch((err) => console.log(err));
	// }

	// useEffect(() => {
	// 	getMeal(meal);
	// 	// console.log(meal);
	// 	// eslint-disable-next-line
	// }, []);
	// const title = meal[0].strMeal;

	/**Header: str
	 *
	 */
	https: return (
		// <MainBody>
		// 	<PhoneBody>
		// 		<PhoneTop />
		<Fragment>
			<Content>
				<Hero />
				<div>
					<RecipeHeader>
						<HeroTextSpan>Title</HeroTextSpan>
					</RecipeHeader>

					<RecipeDetailDiv>
						<RecipeHeaderDetailDiv text='20 min' textStrong='Prep Time' />
						<RecipeHeaderDetailDiv text='20 min' textStrong='Cook Time' />
					</RecipeDetailDiv>

					<RecipeTabContainer>
						<TabDiv className='inactive' href='' header='Recipe' />
						<TabDiv className='active' href='' header='Cookware' />
						<TabDiv className='inactive' href='' header='Ingredients' />
					</RecipeTabContainer>
				</div>

				<section id='recipe-body'>
					<RecipeHeaderDetailStyle padding='8px 0' weight='700'>
						Preparation
					</RecipeHeaderDetailStyle>

					<RecipeSkill text='Basic knife skills' />
					<RecipeSkill text='Cornstarch slurry' />

					<RecipeHeaderDetailStyle padding='8px 0' weight='700'>
						Steps
					</RecipeHeaderDetailStyle>
					<RecipeStep
						header='1'
						text='Rinse uncooked rice a couple of times to remove starch. Place in
								rice cooker and add water or chicken broth. Let cook.'
					/>

					<CheckListTable>
						<CheckListTableUl>
							<CheckListTableLi text='rice cooker'></CheckListTableLi>
							<CheckListTableLi text='spatula'></CheckListTableLi>
							<CheckListTableLi text='chefs knife'></CheckListTableLi>
							<CheckListTableLi text='saute pan'></CheckListTableLi>
						</CheckListTableUl>
					</CheckListTable>
					<PrimaryButton>Let's get cookin'</PrimaryButton>
				</section>
			</Content>
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
		// </PhoneBody>
		// </MainBody>
	);
}

export default Recipe;

// <NavBarStyle>
// 				<BottomNavSection>
// 					<Link style={{ textDecoration: 'none' }} to='/community'>
// 						<IconDiv src={users} text='Community' />
// 					</Link>
// 					<Link style={{ textDecoration: 'none' }} to='/skills'>
// 						<IconDiv src={gradcap} text='Skills' />
// 					</Link>

// 					<Link style={{ textDecoration: 'none' }} to='/'>
// 						<IconDiv src={home} text='Home' />
// 					</Link>

// 					<Link style={{ textDecoration: 'none' }} to='/favorites'>
// 						<IconDiv src={faves} text='Favorites' />
// 					</Link>
// 					<Link style={{ textDecoration: 'none' }} to='/more'>
// 						<IconDiv src={more} text='More' />
// 					</Link>

// 					<Hr />
// 				</BottomNavSection>
// 			</NavBarStyle>
