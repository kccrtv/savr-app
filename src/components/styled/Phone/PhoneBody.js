import styled from 'styled-components';

const PhoneBody = styled.section`
	margin: 0 auto;
	width: 414px;
	height: ${(props) => props.height || '720px'};
	background: #ffffff;
	box-shadow: 0 0 23px 0 #aaaaaa;
	border-radius: 30px;
	display: grid;
	grid-template-rows: repeat(10, 80px);
`;

export default PhoneBody;
