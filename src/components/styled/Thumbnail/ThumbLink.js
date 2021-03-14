import React from 'react';
import ThumbItemStyle from './ThumbItemStyle';
import ThumbImage from './ThumbImage';

function ThumbLink(props) {
	return (
		<a href={props.href}>
			<ThumbItemStyle>
				<ThumbImage key={props.id} src={props.src} alt='latest meal' />
			</ThumbItemStyle>
		</a>
	);
}

export default ThumbLink;
