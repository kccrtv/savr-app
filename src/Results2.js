import React from 'react';

import SearchBarDiv from './components/styled/Results/SearchBarDiv';
import ThumbUnorderedStyle from './components/styled/Thumbnail/ThumbUnorderedStyle';
import ResultRow from './components/styled/Results/ResultRow';
import MainBody from './components/styled/Phone/MainBody';
import NavBar from './components/styled/Nav/NavBar';
import PhoneBody from './components/styled/Phone/PhoneBody';
import SearchResultsHeader from './components/styled/Results/SearchResultsHeader';
import PhoneTop from './components/styled/Phone/PhoneTop';
import Content from './components/styled/Phone/Content';

function Results(props) {
	return (
		<MainBody>
			<PhoneBody>
				<PhoneTop />
				<Content>
					{/* <SearchBarDiv />
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
						
					</ThumbUnorderedStyle> */}
				</Content>
			</PhoneBody>
			<NavBar />
		</MainBody>
	);
}

export default Results;
