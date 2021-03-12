import React from 'react';
import ThumbItemStyle from './ThumbItemStyle';
import ThumbImage from './ThumbImage';

function ThumbListItem(props) {
	return (
		<ThumbItemStyle>
			<ThumbImage src={props.src} alt='recipe' />
		</ThumbItemStyle>
	);
}

export default ThumbListItem;
