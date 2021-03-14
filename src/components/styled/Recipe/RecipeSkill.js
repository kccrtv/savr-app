import React from 'react';
import RecipeSkillContainer from './RecipeSkillContainer';
import RecipeSkillIconStyle from './RecipeSkillIconStyle';
import RecipeSkillP from './RecipeSkillP';
import ArrowRight from '../Results/ArrowRight';
import next from '../../assets/arrow-next-solid.svg';
import gradcap from '../../assets/graduation-cap-small.svg';

function RecipeSkill(props) {
	return (
		<RecipeSkillContainer>
			<RecipeSkillIconStyle src={gradcap} alt='skills' />
			<RecipeSkillP>{props.text}</RecipeSkillP>
			<ArrowRight src={next} alt='next' />
		</RecipeSkillContainer>
	);
}

export default RecipeSkill;
