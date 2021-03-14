import React, { Fragment, Component, useState, useEffect } from 'react';
import styled from 'styled-components';
// import SearchBarDiv from './components/styled/Results/SearchBarDiv';
// import ResultRow from './components/styled/Results/ResultRow';

// import SearchResultsHeader from './components/styled/Results/SearchResultsHeader';
import search from './components/assets/search.svg';
// import SearchBar from './components/styled/Search/SearchBar';
import NavBack from './components/styled/Nav/NavBack';
import header from './components/assets/Header.svg';
import arrowright from './components/assets/arrow-next-solid.svg';

import NavBar from './components/styled/Nav/NavBar';
const key = process.env.REACT_APP_API_KEY;

// STYLED COMPONENTS
const MainBody = styled.main`
	display: grid;
	grid-template-rows: repeat(10, 16px 48px);
`;

const PhoneBody = styled.section`
	margin: 0 auto;
	width: 414px;
	height: ${(props) => props.height || '720px'};
	background: #ffffff;
	box-shadow: 0 0 23px 0 #aaaaaa;
	border-radius: 30px;
	display: grid;
	grid-template-rows: repeat(10, 80px);
`;

const FrameTop = styled.div`
	border-radius: 30px 0 30px 0;
	width: 414px;
	height: 88px;
	margin: 0;
	padding: 0;
`;

function PhoneTop(props) {
	return (
		<FrameTop>
			<img src={header} alt='phone top' />
		</FrameTop>
	);
}

const Content = styled.div`
	height: 560px;
	width: 396x;
	overflow-y: scroll;
`;

const ThumbHeader = styled.h4`
	margin: ${(props) => props.margin || '0 42px'};
	font-weight: 400;
	text-transform: uppercase;
	font-size: 0.9rem;
	line-height: 16px;
	letter-spacing: 2px;
`;

const ThumbContainer = styled.div`
	display: flex;
	overflow: hidden;
	margin: 0 42px;
`;

const ThumbUnorderedList = styled.ul`
	padding: 0;
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
`;

const ThumbImage = styled.img`
	width: ${(props) => props.width || '72px'};
	height: ${(props) => props.height || '72px'};
	border-radius: 10px;
`;

const ThumbItemStyle = styled.li`
	list-style: none;
	width: 72px;
	height: 72px;
	border-radius: 10px;
	margin: 0 8px 0 0;
	display: grid;
	grid-template-rows: repeat(8, 8px);
	grid-template-columns: repeat(8, 8px);
`;

const SearchForm = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 16px 40px 0;
`;

const SearchDiv = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify || 'center'};
	border: 1px solid gray;
	border-radius: 10px;
`;

const SearchIcon = styled.img`
	padding: 0 8px;
	display: ${(props) => props.display || 'inline'};
`;

const SearchInput = styled.input`
	border-radius: 8px;
	border-style: none;
	font-size: 1rem;
	width: ${(props) => props.width || '200px'};
	opacity: ${(props) => props.opacity || '0.9'};
	color: black;
	height: 2rem;
`;

const SearchBarDiv = (props) => {
	return (
		<SearchForm>
			<SearchDiv justify='left'>
				<SearchIcon src={search} alt='search icon' display='none' />
				<SearchInput width='330px' placeholder={props.placeholder} />
			</SearchDiv>
		</SearchForm>
	);
};

const ResultTitle = styled.h4`
	font-weight: 700;
	font-size: 1.2rem;
	margin: 0;
	color: black;
	text-align: ${(props) => props.align || 'left'};
	padding: ${(props) => props.padding || '0'};
`;

function SearchResultsHeader(props) {
	return (
		<ResultTitle padding='8px 0 0 0' align='center'>
			{props.text}
		</ResultTitle>
	);
}

const ResultRowStyle = styled.li`
	list-style: none;
	margin: 0 auto;
	padding: 8px;
	display: flex;
	flex-direction: ${(props) => props.direction || 'row'};
	align-items: center;
`;

const ResultTextDiv = styled.div`
	margin: 0 auto;
	flex-direction: ${(props) => props.direction || 'column'};
	padding: 0 8px;
	text-align: left;
	border-bottom: 1px solid lightgray;
	overflow: hidden;
	text-overflow: ellipsis;
	display: flex;
`;

const ResultDetails = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	flex-shrink: 2;
	opacity: 0.7;
	margin: 0;
	height: 40px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* number of lines to show */
	-webkit-box-orient: vertical;
`;

const ArrowRight = styled.img`
	padding: 0 8px;
	display: ${(props) => props.display || 'inline'};
`;

function ResultRow(props) {
	return (
		<ThumbUnorderedList>
			<ResultRowStyle>
				<ThumbImage width='64px' height='64px' />
				<ResultTextDiv>
					<ResultTitle>{props.title}</ResultTitle>
					<ResultDetails>{props.text}</ResultDetails>
				</ResultTextDiv>
				<ArrowRight src={arrowright} alt='next' />
			</ResultRowStyle>
		</ThumbUnorderedList>
	);
}

function Results(props) {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					{/* <SearchBar placeholder='Search' buttonText='go' /> */}
					<SearchBarDiv />
					<SearchResultsHeader text='Meals Found' />
					<ThumbUnorderedList direction='column'>
						<ResultRow
							title='Jelly-o topping jujubes'
							text='Cake marshmallow dragée cake pudding tart cotton candy topping cheesecake. Tootsie roll jelly beans gummi bears pudding carrot cake tiramisu chocolate. Jelly-o topping jujubes. Gummi bears muffin bear claw pie lemon drops jujubes icing.'
						/>
						<ResultRow
							title='Pie candy cotton candy'
							text='Tootsie roll dessert cake chocolate toffee cookie pie. Jelly beans sugar plum cookie muffin halvah. Pie candy cotton candy cheesecake. Marzipan toffee liquorice jelly-o powder jelly muffin.'
						/>
						<ResultRow
							title='Biscuit apple pie'
							text='Fruitcake oat cake biscuit macaroon pastry chocolate cake candy. Gummi bears apple pie ice cream tootsie roll cotton candy. Biscuit apple pie lemon drops cupcake bear claw. Muffin topping cupcake cookie sugar plum chocolate cake.'
						/>
						<ResultRow
							title='Chocolate bar donut bear claw'
							text='Jelly-o dragée croissant biscuit cookie sweet chupa chups candy canes. Chocolate cake powder jelly chocolate pastry cotton candy sweet chocolate bar chupa chups. Chocolate bar donut bear claw pudding lollipop liquorice gummies tootsie roll. Carrot cake muffin cotton candy sesame snaps ice cream marshmallow icing tootsie roll.'
						/>
						<ResultRow
							title='Chocolate bar donut bear claw'
							text='Jelly-o dragée croissant biscuit cookie sweet chupa chups candy canes. Chocolate cake powder jelly chocolate pastry cotton candy sweet chocolate bar chupa chups. Chocolate bar donut bear claw pudding lollipop liquorice gummies tootsie roll. Carrot cake muffin cotton candy sesame snaps ice cream marshmallow icing tootsie roll.'
						/>
						<ResultRow
							title='Biscuit chupa chups'
							text='Lemon drops cupcake biscuit brownie soufflé brownie. Cookie donut donut apple pie marzipan bonbon chocolate cake liquorice dessert. Biscuit chupa chups tart jelly beans candy canes powder.'
						/>
						<ResultRow
							title='Jelly-o topping jujubes'
							text='Cake marshmallow dragée cake pudding tart cotton candy topping cheesecake. Tootsie roll jelly beans gummi bears pudding carrot cake tiramisu chocolate. Jelly-o topping jujubes. Gummi bears muffin bear claw pie lemon drops jujubes icing.'
						/>
						<ResultRow
							title='Jelly-o topping jujubes'
							text='Cake marshmallow dragée cake pudding tart cotton candy topping cheesecake. Tootsie roll jelly beans gummi bears pudding carrot cake tiramisu chocolate. Jelly-o topping jujubes. Gummi bears muffin bear claw pie lemon drops jujubes icing.'
						/>
					</ThumbUnorderedList>
				</Content>
			</PhoneBody>
			<NavBack />
		</MainBody>
	);
}

export default Results;

/**
 *Search Recipes: titleMatch
 Recipe Sorting Options
 Autocomplete Recipe Search
 */
