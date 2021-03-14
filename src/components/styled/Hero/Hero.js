import React from 'react';
import HeroFigure from './HeroFigure';
import HeroImage from './HeroImage';
import HeroTextSpan from './HeroTextSpan';
import HeroText from './HeroText';

function Hero(props) {
	return (
		<HeroFigure>
			<HeroImage key={props.key} src={props.src} alt='recipe hero image' />
			<HeroText>
				<HeroTextSpan>{props.title}</HeroTextSpan>
			</HeroText>
		</HeroFigure>
	);
}

export default Hero;
