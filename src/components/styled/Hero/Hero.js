import React from 'react';
import HeroCard from './HeroCard';
import HeroImage from './HeroImage';
import HeroTextSpan from './HeroTextSpan';
import HeroText from './HeroText';

function Hero(props) {
	return (
		<HeroCard>
			<div>
				<HeroImage src={props.src} alt='recipe hero image' />
				<HeroText>
					<HeroTextSpan>Title</HeroTextSpan>
				</HeroText>
			</div>
		</HeroCard>
	);
}

export default Hero;
