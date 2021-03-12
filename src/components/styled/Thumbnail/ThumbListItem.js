import React from 'react';
import ThumbItem from './ThumbItem';
import ThumbImage from './ThumbImage';

function ThumbListItem(props) {
	return (
		<ThumbItem>
			<ThumbImage src={props.src} alt='recipe' />
		</ThumbItem>
	);
}

export default ThumbListItem;
