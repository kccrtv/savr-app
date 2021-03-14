import React, { Fragment } from 'react';
import ThumbContainer from './ThumbContainer';
import ThumbHeader from './ThumbHeader';
import ThumbUnorderedList from './ThumbUnorderedList';

function ThumbSection(props) {
	return (
		<ThumbContainer>
			<ThumbUnorderedList></ThumbUnorderedList>
		</ThumbContainer>
	);
}

export default ThumbSection;

// <Fragment>
// 	<ThumbHeader>{props.header}</ThumbHeader>
// 	<ThumbContainer className={props.className}>
// 		<ThumbUnorderedList></ThumbUnorderedList>
// 	</ThumbContainer>
// </Fragment>;

/* <ThumbHeader>{props.header}</ThumbHeader>
			<ThumbContainer>
				<ThumbUnorderedStyle></ThumbUnorderedStyle>
			</ThumbContainer> */
