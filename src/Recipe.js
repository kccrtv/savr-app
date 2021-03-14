import React from 'react';
import gradicon from './components/assets/graduation-cap-small.svg';
import arrowright from './components/assets/arrow-next-solid.svg';
import ArrowRight from './components/styled/Results/ArrowRight';
import SearchBarDiv from './components/styled/Results/SearchBarDiv';
import ThumbUnorderedStyle from './components/styled/Thumbnail/ThumbUnorderedStyle';
import ResultRow from './components/styled/Results/ResultRow';
import MainBody from './components/styled/Phone/MainBody';
// import NavBack from './components/styled/Nav2/NavBack';
import NavSimple from './components/styled/Nav2/NavSimple';
import PhoneBody from './components/styled/Phone/PhoneBody';
import SearchResultsHeader from './components/styled/Results/SearchResultsHeader';
import PhoneTop from './components/styled/Phone/PhoneTop';
import Content from './components/styled/Phone/Content';
import Hero from './components/styled/Hero/Hero';
import HeroText from './components/styled/Hero/HeroText';
import HeroTextSpan from './components/styled/Hero/HeroTextSpan';
import RecipeHeader from './components/styled/Recipe/RecipeHeader';
import ThumbHeader from './components/styled/Thumbnail/ThumbHeader';
import RecipeDetailDiv from './components/styled/Recipe/RecipeDetailDiv';
import RecipeHeaderDetail from './components/styled/Recipe/RecipeHeaderDetail';
import RecipeHeaderDetailStyle from './components/styled/Recipe/RecipeHeaderDetailStyle';
import RecipeHeaderDetailDiv from './components/styled/Recipe/RecipeHeaderDetailDiv';
import RecipeTabContainer from './components/styled/Recipe/RecipeTabContainer';
import RecipeTabDiv from './components/styled/Recipe/RecipeTabDiv';
import RecipeTab from './components/styled/Recipe/RecipeTab';
import TabDiv from './components/styled/Recipe/TabDiv';
import CheckListTableLi from './components/styled/Recipe/CheckListTableLi';
import CheckListTableUl from './components/styled/Recipe/CheckListTableUl';
import CheckListTable from './components/styled/Recipe/CheckListTable';
import PrimaryButton from './components/styled/Recipe/PrimaryButton';
import RecipeStep from './components/styled/Recipe/RecipeStep';
import RecipeSkill from './components/styled/Recipe/RecipeSkill';

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