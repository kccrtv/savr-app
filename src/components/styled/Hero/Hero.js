import React from 'react';
import HeroFigure from './HeroFigure';
import HeroImage from './HeroImage';
import HeroTextSpan from './HeroTextSpan';
import HeroText from './HeroText';

function Hero(props) {
	return (
		<HeroFigure>
			<div>
				<HeroImage src={props.src} alt='recipe hero image' />
				<HeroText>
					<HeroTextSpan>Title</HeroTextSpan>
				</HeroText>
			</div>
		</HeroFigure>
	);
}

export default Hero;
