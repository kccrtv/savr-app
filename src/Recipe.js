import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import header from './components/assets/header.svg';
import next from './components/assets/arrow-next-solid.svg';
import gradcap from './components/assets/graduation-cap-small.svg';
import NavSimple from './components/NavSimple';

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
	grid-row: 8;
	z-index: 2;
	margin: 0 auto;
	font-size: 1.5rem;
`;

function Recipe(props) {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					<Hero />
					<div>
						<RecipeHeader>
							<HeroTextSpan>Recipe Card Title</HeroTextSpan>
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
					</section>
				</Content>
				<PrimaryButton>Let's get cookin'</PrimaryButton>
			</PhoneBody>
			<NavSimple />
		</MainBody>
	);
}

export default Recipe;
