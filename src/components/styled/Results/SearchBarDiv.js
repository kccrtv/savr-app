import React from 'react';
import SearchIcon from '../Search/SearchIcon';
import search from '../../assets/search.svg';
import SearchInput from '../Search/SearchInput';

import SearchDiv from '../Search/SearchDiv';
import SearchForm from '../Search/SearchForm';

const SearchBarDiv = (props) => {
	return (
		<div>
			<SearchForm>
				<SearchDiv justify='left'>
					<SearchIcon src={search} alt='search icon' display='none' />
					<SearchInput width='330px' placeholder={props.placeholder} />
				</SearchDiv>
			</SearchForm>
		</div>
	);
};

export default SearchBarDiv;
