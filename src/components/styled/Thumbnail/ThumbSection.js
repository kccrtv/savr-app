import React, { Fragment } from 'react';
import ThumbContainer from './ThumbContainer';
import ThumbHeader from './ThumbHeader';
import ThumbUnorderedList from './ThumbUnorderedList';
import ThumbUnorderedStyle from './ThumbUnorderedStyle';

function ThumbSection(props) {
	return (
		<Fragment>
			<ThumbHeader>{props.header}</ThumbHeader>
			<ThumbContainer>
				<ThumbUnorderedStyle></ThumbUnorderedStyle>
			</ThumbContainer>
		</Fragment>
	);
}

export default ThumbSection;

// <Fragment>
// 	<ThumbHeader>{props.header}</ThumbHeader>
// 	<ThumbContainer className={props.className}>
// 		<ThumbUnorderedList></ThumbUnorderedList>
// 	</ThumbContainer>
// </Fragment>;
