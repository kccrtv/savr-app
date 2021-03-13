import styled from 'styled-components';

const ResultDetails = styled.h4`
	font-weight: 700;
	font-size: 1.2rem;
	margin: 0;
	color: black;
	text-align: ${(props) => props.align || 'left'};
	padding: ${(props) => props.padding || '0'};
`;

export default ResultDetails;

// margin: 0 auto;
// font-size: 20px;
