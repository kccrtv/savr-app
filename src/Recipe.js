import React from 'react';
import gradicon from './components/assets/graduation-cap-small.svg';
import arrowright from './components/assets/arrow-next-solid.svg';
import ArrowRight from './components/styled/Results/ArrowRight';
import SearchBarDiv from './components/styled/Results/SearchBarDiv';
import ThumbUnorderedStyle from './components/styled/Thumbnail/ThumbUnorderedStyle';
import ResultRow from './components/styled/Results/ResultRow';
import MainBody from './components/styled/Phone/MainBody';
import NavBack from './components/styled/Nav2/NavBack';
import PhoneBody from './components/styled/Phone/PhoneBody';
import SearchResultsHeader from './components/styled/Results/SearchResultsHeader';
import PhoneTop from './components/styled/Phone/PhoneTop';
import Content from './components/styled/Phone/Content';
import Hero from './components/styled/Hero/Hero';
import HeroText from './components/styled/Hero/HeroText';
import HeroTextSpan from './components/styled/Hero/HeroTextSpan';
import RecipeHeader from './components/styled/Recipe/RecipeHeader';
import ThumbHeader from './components/styled/Thumbnail/ThumbHeader';

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
						<div className='header-details'>
							<div id='header-detail'>
								<p>20 min</p>
								<p>
									<strong>Prep Time</strong>
								</p>
							</div>
							<div id='header-detail'>
								<p>20 min</p>
								<p>
									<strong>Cook Time</strong>
								</p>
							</div>
						</div>

						<div className='tabs'>
							<div className='tab active'>
								<a href='' className='tab-name'>
									Recipe
								</a>
							</div>

							<div className='tab inactive'>
								<a href='' className='tab-name'>
									Cookware
								</a>
							</div>

							<div className='tab inactive'>
								<a href='' className='tab-name'>
									Ingredients
								</a>
							</div>
						</div>
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
						<div className='list-container'>
							<ul className='cookware'>
								<li className='cookware-item'>
									<input
										className='checkbox'
										type='checkbox'
										name='equipment'
										value='equipment'></input>
									spatula
								</li>
								<li className='cookware-item'>
									<input
										className='checkbox'
										type='checkbox'
										name='equipment'
										value='equipment'></input>
									spatula
								</li>
							</ul>
						</div>
					</section>
				</Content>
				{/* <button id='primary-button'>Let's get cookin'</button> */}
			</PhoneBody>
			<NavBack />
		</MainBody>
	);
}

export default Recipe;
