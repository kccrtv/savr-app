import styled from 'styled-components';

const HeroFigure = styled.figure`
	display: grid;
	grid-template-rows: repeat(3, 48px 24px);
	grid-template-columns: repeat(7, 16px 32px);
	border-radius: 30px;
	width: 318px;
	height: 208px;
	margin: 16px auto;
`;

export default HeroFigure;
