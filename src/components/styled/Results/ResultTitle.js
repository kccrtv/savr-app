import styled from 'styled-components';

const ResultDetails = styled.h4`
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	color: black;
	margin: ${(props) => props.margin || '0'};
	text-align: ${(props) => props.align || 'left'};
`;

export default ResultDetails;
