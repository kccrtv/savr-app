import styled from 'styled-components';

const HeroCard = styled.figure`
	display: grid;
	grid-template-rows: repeat(3, 48px 24px);
	grid-template-columns: repeat(7, 16px 32px);
`;

export default HeroCard;
