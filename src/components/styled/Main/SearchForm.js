import React from 'react';
import SearchIcon from '../Search/SearchIcon';
import search from '../../assets/search.svg';

function SearchForm({ handleSubmit, handleChange, searchString }) {
	// const handleChange = (event) => {
	// 	setSearchString(event.target.value);
	// };
	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	getJokes(searchString);
	// };

	return (
		<form id='search-form' onSubmit={handleSubmit}>
			<div id='search-div'>
				<SearchIcon src={search} alt='search icon' />
				<input
					id='search-input'
					placeholder='Search'
					type='text'
					name='searchString'
					required
					onChange={handleChange}
					value={searchString}
				/>
			</div>
			<button id='primary-button' type='submit'>
				go
			</button>
		</form>
	);
}

export default SearchForm;
