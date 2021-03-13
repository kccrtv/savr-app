import React from 'react';
import ThumbImage from '../Thumbnail/ThumbImage';
import ThumbUnorderedStyle from '../Thumbnail/ThumbUnorderedStyle';
import ResultRowStyle from './ResultRowStyle';
import ResultTitle from './ResultTitle';
import ResultDetails from './ResultDetails';
// import ArrowRight from './ArrowRight';
import arrowright from '../../assets/arrow-next-solid.svg';

function ResultRow(props) {
	return (
		<ThumbUnorderedStyle>
			<ResultRowStyle>
				<ThumbImage width='64px' height='64px' />
			</ResultRowStyle>
		</ThumbUnorderedStyle>
	);
}

export default ResultRow;
