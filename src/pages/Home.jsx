import React from 'react';
import Hero from '../components/Hero';
import HireMe from '../components/HireMe';
import TransitionEffect from '../components/TransitionEffect';

const Home = () => {
	return (
		<>
			<TransitionEffect />
			<div>
				<Hero />
				<HireMe />
			</div>
		</>
	);
};

export default Home;
