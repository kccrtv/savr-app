import React from 'react';
import SearchIcon from './SearchIcon';
import search from '../../assets/search.svg';
import SearchInput from './SearchInput';
import Button from './Button';
import SearchDiv from './SearchDiv';
import SearchForm from './SearchForm';

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
