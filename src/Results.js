import React, { Fragment, Component, useState, useEffect } from 'react';
import SearchBarDiv from './components/styled/Results/SearchBarDiv';
import ThumbUnorderedStyle from './components/styled/Thumbnail/ThumbUnorderedStyle';
import ResultRow from './components/styled/Results/ResultRow';
import PageBodyStyle from './components/styled/Phone/PageBodyStyle';
import MainBody from './components/styled/Phone/MainBody';
import NavBar from './components/styled/Nav/NavBar';
import FrameTop from './components/styled/Phone/FrameTop';
import PhoneBody from './components/styled/Phone/PhoneBody';
import SearchResultsHeader from './components/styled/Results/SearchResultsHeader';
import PhoneBase from './components/styled/Phone/PhoneBase';
import PhoneTop from './components/styled/Phone/PhoneTop';

function Results(props) {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<SearchResultsHeader text='hello?' />
				<ThumbUnorderedStyle direction='column'>
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
				</ThumbUnorderedStyle>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default Results;

{
	/* <MainBody>
	
	<PhoneBody overflow='auto'>
		<FrameTop />
		<SearchBarDiv placeholder='Your Recipe' opacity={1} />
		<PageBodyStyle>
			<SearchResultsHeader />
			<ThumbUnorderedStyle direction='column'>
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
			</ThumbUnorderedStyle>
		</PageBodyStyle>
	</PhoneBody>
	
</MainBody> */
}
