import React from 'react';
import RecipeHeaderDetail from './RecipeHeaderDetail';
import RecipeHeaderDetailStyle from './RecipeHeaderDetailStyle';

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

export default RecipeHeaderDetailDiv;
