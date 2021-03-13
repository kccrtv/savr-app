import styled from 'styled-components';

const HeroFigure = styled.figure`
	display: grid;
	border-radius: 30px;
	width: 318px;
	height: 208px;
	margin: 16px auto;
	grid-template-rows: repeat(5, 4px 24px 16px);
	grid-template-columns: repeat(6, 4px 16px 32px);
`;

export default HeroFigure;

// grid-template-rows: repeat(3, 48px 24px);
// grid-template-columns: repeat(7, 16px 32px);
