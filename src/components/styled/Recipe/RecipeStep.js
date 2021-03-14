import RecipeStepContainer from './RecipeStepContainer';
import RecipeStepHeader from './RecipeStepHeader';
import RecipeStepP from './RecipeStepP';

function RecipeStep(props) {
	return (
		<RecipeStepContainer>
			<RecipeStepHeader>{props.header}</RecipeStepHeader>
			<RecipeStepP>{props.text}</RecipeStepP>
		</RecipeStepContainer>
	);
}

export default RecipeStep;
