import styled from 'styled-components';

const Button = styled.button`
	border-style: none;
	background-color: #fa7500;
	border-radius: 8px;
	color: white;
	height: 2rem;
	width: ${(props) => props.width || '72px'};
	margin-left: 8px;
	display: ${(props) => (props.display = 'inline')};
`;

export default Button;
