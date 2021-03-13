import React from 'react';
import ResultTitle from './ResultTitle';

function SearchResultsHeader(props) {
	return (
		<ResultTitle padding='16px 0 0 0' align='center'>
			{props.text}
		</ResultTitle>
	);
}

export default SearchResultsHeader;
