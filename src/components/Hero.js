import React from 'react';
import styled from 'styled-components';

const HeroFigure = styled.a`
	display: grid;
	border-radius: 30px;
	width: 318px;
	height: 208px;
	margin: 16px auto;
	grid-template-rows: repeat(5, 4px 24px 16px);
	grid-template-columns: repeat(6, 4px 16px 32px);
`;

const HeroImage = styled.img`
	opacity: 0.9;
	border-radius: 30px;
	width: 318px;
	height: 208px;
`;

const HeroText = styled.h2`
	font-weight: 600;
	font-size: 1.7rem;
	grid-row: 10;
	grid-column: 2 / span 17;
	line-height: 0.9;
	text-shadow: #fc0 1px 0 10px;
`;

const HeroTextSpan = styled.span`
	position: relative;
	bottom: -11px;
	color: #555556;
	display: inline-block;
	padding: 0.4rem 0;
	border-bottom: 4px solid #d5ba5e;
	outline: 0;
`;

function Hero(props) {
	return (
		<HeroFigure href={props.href}>
			<HeroImage key={props.key} src={props.src} alt='recipe hero image' />
			<HeroText>
				<HeroTextSpan>{props.title}</HeroTextSpan>
			</HeroText>
		</HeroFigure>
	);
}

export default Hero;
