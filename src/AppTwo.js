import './styles.css';
import phonetop from './components/assets/Header.svg';
import phonebottom from './components/assets/bottom-footer.svg';

function AppTwo() {
	return (
		<div>
			<main>
				{/* Top */}
				<div className='frame'>
					<img src={phonetop} alt='phone base'></img>

					{/* Middle */}
					<figure className='hero'>
						<div className='hero-image'></div>
						<h3 className='hero-title'>Header</h3>
					</figure>

					{/* Middle Horizontal Scroll */}
					<h4 className='thumbnail-header'>Header</h4>
					<div className='thumbnail-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<h5>1</h5>
							</li>
							<li className='thumb'>
								<h5>2</h5>
							</li>
							<li className='thumb'>
								<h5>3</h5>
							</li>
							<li className='thumb'>
								<h5>4</h5>
							</li>
						</ul>
					</div>

					{/* Bottom */}
					<section className='bottom-nav'>
						<img src={phonebottom} alt='phone base'></img>
					</section>
				</div>
			</main>
		</div>
	);
}

export default AppTwo;

/* resources: https://www.w3schools.com/cssref/css_units.asp
 *https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()
 https://uxdesign.cc/creating-horizontal-scrolling-containers-the-right-way-css-grid-c256f64fc585
 https://codepen.io/dannievinther/pen/vVydZJ
 
https://medium.com/samsung-internet-dev/horizontally-scrolling-panes-with-clean-html-and-modern-css-7372596932c7
*/
