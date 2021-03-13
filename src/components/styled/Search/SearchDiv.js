import styled from 'styled-components';

const SearchDiv = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify || 'center'};
	border: 1px solid gray;
	border-radius: 10px;
`;

export default SearchDiv;
