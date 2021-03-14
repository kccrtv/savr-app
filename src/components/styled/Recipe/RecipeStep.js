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

<div className='steps-container'>
	<h4 className='step-no'>1</h4>
	<p className='step'>
		Rinse uncooked rice a couple of times to remove starch. Place in rice cooker
		and add water or chicken broth. Let cook.
	</p>
</div>;
