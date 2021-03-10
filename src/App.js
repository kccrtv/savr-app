import logo from './logo.svg';
import './App.css';
const key = process.env.REACT_APP_API_KEY;

function App() {
	console.log(key);
	return (
		<div className='App'>
			<h1>Hello World!</h1>
		</div>
	);
}

export default App;
