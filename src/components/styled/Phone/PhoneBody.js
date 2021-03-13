import styled from 'styled-components';

const PhoneBody = styled.section`
	margin: 0 auto;
	width: 414px;
	height: ${(props) => props.height || '720px'};
	background: #ffffff;
	overflow: ${(props) => props.overflow || 'hidden'};
	display: inline-flex;
	flex-direction: column;
	padding-top: 48px;
	box-shadow: 0 0 23px 0 #aaaaaa;
	border-radius: 30px;
`;

export default PhoneBody;
