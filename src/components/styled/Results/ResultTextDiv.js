import styled from 'styled-components';

const ResultTextDiv = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: ${(props) => props.direction || 'column'};
	padding: 0 8px;
	text-align: left;
	border-bottom: 1px solid lightgray;
`;

export default ResultTextDiv;
