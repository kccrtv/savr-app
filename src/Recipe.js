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
						{/* <h4 className='recipe-section'> Preparation</h4>
						<div className='skills-bar'>
							<img className='skills-icon' src={gradicon} alt='skills' />
							<p className='skills-text'>Basic knife skills</p>
							<ArrowRight src={arrowright} alt='next' />
						</div>

						<h4 className='recipe-section'>Steps</h4>
						<div className='steps-container'>
							<h4 className='step-no'>1</h4>
							<p className='step'>
								Rinse uncooked rice a couple of times to remove starch. Place in
								rice cooker and add water or chicken broth. Let cook.
							</p>
						</div> */}

						{/* <CheckListTable>
							<CheckListTableUl>
								<CheckListTableLi text='rice cooker'></CheckListTableLi>
								<CheckListTableLi text='spatula'></CheckListTableLi>
								<CheckListTableLi text='chefs knife'></CheckListTableLi>
								<CheckListTableLi text='saute pan'></CheckListTableLi>
							</CheckListTableUl>
						</CheckListTable> */}
					</section>
				</Content>
				{/* <button id='primary-button'>Let's get cookin'</button> */}
			</PhoneBody>
			<NavSimple />
		</MainBody>
	);
}

export default Recipe;
