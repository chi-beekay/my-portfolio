import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Kitchen from './pages/Kitchen';
import Cursor from './components/Cursor';
function App() {
	return (
		<div className=''>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/kitchen' element={<Kitchen />} />
			</Routes>
		</div>
	);
}

export default App;
