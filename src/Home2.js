import React from 'react';
import header from './components/assets/Header.svg';
import NavBar from './components/styled/Nav/NavBar';
import SearchForm from './components/styled/Main/SearchForm';
import SearchIcon from './components/styled/Search/SearchIcon';
import search from './components/assets/search.svg';

function Home2(props) {
	return (
		<main>
			<section id='phone-body'>
				<div id='frame-top'>
					<img src={header} alt='phone top' />
				</div>
				<div id='content'>
					{/* <SearchForm /> */}
					<form id='search-form'>
						<div id='search-div'>
							<SearchIcon src={search} alt='search icon' />
							<input
								id='search-input'
								placeholder='Search'
								type='text'
								name='searchString'
								required
							/>
						</div>
						<button id='primary-button' type='submit'>
							go
						</button>
					</form>
					<figure id='hero'>
						<img id='hero-image' alt='recipe'></img>
						<a id='hero-title' href=''>
							<h4>
								<span>Title</span>
							</h4>
						</a>
					</figure>
					<div>
						<h4 id='thumb-header'>Category</h4>
						<div id='row'>
							<div id='thumb-container'>
								<ul id='thumb-unordered'>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div>
						<h4 id='thumb-header'>Category</h4>
						<div id='row'>
							<div id='thumb-container'>
								<ul id='thumb-unordered'>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
									<li id='thumb-li'>
										<a href=''>
											<img
												id='thumb-img'
												src='https://i.pinimg.com/originals/81/c8/34/81c8344d55fe2a12cc8b3a9a6b86de85.jpg'
												alt='recipe'></img>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<NavBar />
		</main>
	);
}

export default Home2;
