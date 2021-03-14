import styled from 'styled-components';

const RecipeHeaderDetailStyle = styled.p`
	display: inline-block;
	margin: 8px 0 0 0;
	padding: ${(props) => props.padding || '0'};
	font-weight: ${(props) => props.weight || '100'};
`;

export default RecipeHeaderDetailStyle;
