import React from 'react';
import ThumbItemStyle from './ThumbItemStyle';
import ThumbImage from './ThumbImage';

function ThumbListItem(props) {
	return (
		<ThumbItemStyle>
			<ThumbImage id={props.key} src={props.src} alt='recipe' />
		</ThumbItemStyle>
	);
}

export default ThumbListItem;
