import './styles.css';
import phonetop from './components/assets/Header.svg';
import phonebottom from './components/assets/bottom-footer.svg';
import users from './components/assets/users-solid.svg';
import gradcap from './components/assets/gradcap-solid.svg';
import home from './components/assets/home-solid.svg';
import faves from './components/assets/fire-wave-solid.svg';
import more from './components/assets/ellipses-solid.svg';
import search from './components/assets/search.svg';

function AppTwo() {
	return (
		<div>
			<main>
				{/* Top */}
				<img className='phone-top' src={phonetop} alt='phone base'></img>
				<div className='frame'>
					{/* Search Bar */}
					<form className='search-form'>
						<div className='searchbar'>
							<img className='search-icon' src={search} alt='search'></img>
							<input placeholder='Search'></input>
						</div>
						<button className='button-search'>go</button>
					</form>
					{/* Middle */}
					<figure className='hero'>
						<div className='hero-image'></div>
						<h3 className='hero-title'>Header</h3>
					</figure>

					{/* Middle Horizontal Scroll */}
					<h4 className='thumbnail-header first-header'>Header</h4>
					<div className='thumbnail-section first-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
						</ul>
					</div>
					{/* Another Middle Horizontal Scroll */}
					<h4 className='thumbnail-header second-header'>Header</h4>
					<div className='thumbnail-section second-section'>
						<ul className='thumbs'>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
							<li className='thumb'>
								<p></p>
							</li>
						</ul>
					</div>

					<section className='bottom-nav'>
						{/* Bottom */}
						<div className='navbar-container'>
							<div className='icon-container'>
								<input className='icon' type='image' src={users} alt='icon' />
								<p className='icon-text'>Community</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={gradcap} alt='icon' />
								<p className='icon-text'>Skills</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={home} alt='icon' />
								<p className='icon-text'>Home</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={faves} alt='icon' />
								<p className='icon-text'>Favorites</p>
							</div>
							<div className='icon-container'>
								<input className='icon' type='image' src={more} alt='icon' />
								<p className='icon-text'>More</p>
							</div>
						</div>
						<hr />

						{/* <img className='phone' src={phonebottom} alt='phone base'></img> */}
					</section>
				</div>
			</main>
		</div>
	);
}

export default AppTwo;

/* resources: https://www.w3schools.com/cssref/css_units.asp
 *https://developer.mozilla.org/en-US/docs/Web/CSS/repeat()
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_hor_scroll
 https://stackoverflow.com/questions/8683528/embed-image-in-a-button-element
*/
