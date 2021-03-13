import React from 'react';
import SearchIcon from './SearchIcon';
import search from '../../assets/search.svg';
import SearchInput from './SearchInput';
import Button from './Button';
import SearchDiv from './SearchDiv';
import SearchForm from './SearchForm';

const SearchBar = (props) => {
	return (
		<div>
			<SearchForm>
				<SearchDiv>
					<SearchIcon src={search} alt='search icon' />
					<SearchInput placeholder='Search' />
				</SearchDiv>
				<Button>{props.buttonText}</Button>
			</SearchForm>
		</div>
	);
};

export default SearchBar;
