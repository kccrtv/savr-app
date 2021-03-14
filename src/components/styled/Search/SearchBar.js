import React from 'react';
import styled from 'styled-components';
import search from '../../assets/search.svg';

const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 16px 40px 0;
`;

const SearchDiv = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify || 'center'};
	border: 1px solid gray;
	border-radius: 10px;
`;

const SearchIcon = styled.img`
	padding: 0 8px;
	display: ${(props) => props.display || 'inline'};
`;

const SearchInput = styled.input`
	border-radius: 8px;
	border-style: none;
	font-size: 1rem;
	width: ${(props) => props.width || '200px'};
	opacity: ${(props) => props.opacity || '0.9'};
	color: black;
	height: 2rem;
`;

const Button = styled.button`
	border-style: none;
	background-color: #fa7500;
	border-radius: 8px;
	color: white;
	font-size: 1.2rem;
	height: 2rem;
	width: ${(props) => props.width || '72px'};
	margin-left: 8px;
	display: ${(props) => (props.display = 'inline')};
`;

const SearchBar = (props) => {
	return (
		<SearchForm>
			<SearchDiv>
				<SearchIcon src={search} alt='search icon' />
				<SearchInput placeholder={props.placeholder} />
			</SearchDiv>
			<Button>{props.buttonText}</Button>
		</SearchForm>
	);
};

export default SearchBar;
