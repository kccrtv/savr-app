import styled from 'styled-components';

const BottomNavSection = styled.section`
	background-color: #f6f7f8;
	display: grid;
	justify-content: center;
	grid-template-columns: ${(props) => props.columns || 'repeat(5, 8ch)'};
	border-radius: 0 0 30px 30px;
	height: 104px;
`;

export default BottomNavSection;
