import React from 'react';
import RecipeTabDiv from './RecipeTabDiv';
import RecipeTab from './RecipeTab';

function TabDiv(props) {
	return (
		<RecipeTabDiv className={props.className}>
			<RecipeTab href={props.href}>{props.header}</RecipeTab>
		</RecipeTabDiv>
	);
}

export default TabDiv;
