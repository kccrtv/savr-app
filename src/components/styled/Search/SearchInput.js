import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
	border-radius: 8px;
	border-style: none;
	font-size: 1rem;
	width: ${(props) => props.width || '200px'};
	opacity: ${(props) => props.opacity || '0.9'};
	color: black;
	height: 2rem;
`;

export default SearchInput;
