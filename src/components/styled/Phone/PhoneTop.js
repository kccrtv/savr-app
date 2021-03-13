import React from 'react';
import styled from 'styled-components';
import FrameTop from './FrameTop';
import header from '../../assets/Header.svg';

function PhoneTop(props) {
	return (
		<FrameTop>
			<img src={header} alt='phone top' />
		</FrameTop>
	);
}

export default PhoneTop;
