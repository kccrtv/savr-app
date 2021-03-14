import React from 'react';
import ThumbUnorderedStyle from './ThumbUnorderedStyle';
import ThumbListItem from './ThumbListItem'; // create function to map over api results

function ThumbSection(props) {
	return <ThumbUnorderedStyle></ThumbUnorderedStyle>;
}

export default ThumbSection;

// <ThumbUnorderedStyle>
// 	<ThumbListItem src={props.src} />
// 	<ThumbListItem src={props.src} />
// 	<ThumbListItem src={props.src} />
// 	<ThumbListItem src={props.src} />
// </ThumbUnorderedStyle>;
