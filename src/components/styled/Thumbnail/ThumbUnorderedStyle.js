import styled from 'styled-components';

const ThumbUnorderedStyle = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
`;

export default ThumbUnorderedStyle;
