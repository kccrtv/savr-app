import React from 'react';
import phonetop from '../../assets/Header.svg';
import FrameStyle from './FrameStyle';

function Frame(props) {
	return (
		<main>
			<img className='phone-top' src={phonetop} alt='phone base'></img>
			<FrameStyle></FrameStyle>
		</main>
	);
}

export default Frame;
