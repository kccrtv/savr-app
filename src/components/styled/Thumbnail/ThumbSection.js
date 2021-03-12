import React, { Fragment } from 'react';
import ThumbContainer from './ThumbContainer';
import ThumbHeader from './ThumbHeader';
import ThumbUnorderedList from './ThumbUnorderedList';

function ThumbSection(props) {
	return (
		<Fragment>
			<ThumbHeader>{props.header}</ThumbHeader>
			<ThumbContainer>
				<ThumbUnorderedList></ThumbUnorderedList>
			</ThumbContainer>
		</Fragment>
	);
}

export default ThumbSection;
