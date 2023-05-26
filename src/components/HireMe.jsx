import React from 'react';
import Svg from '../assets/hirree.svg';
import { Link } from 'react-router-dom';

const HireMe = () => {
	return (
		<div className='fixed right-4 bottom-4 flex items-center justify-center overflow-hiiden'>
			<div className='w-48 h-auto flex items-center justify-center relative'>
				<img src={Svg} alt='' className=' animate-spin-slow' />

				<Link
					to={'mailto:mokwechibuike7@gmail.com'}
					className='flex items-center justify-center absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 bg-darkerColor text-lightGray shadow-md border border-solid border-darkerColor w-20 h-20 rounded-full font-semibold hover:bg-lightGray hover:text-darkerColor'>
					Hire me
				</Link>
			</div>
		</div>
	);
};

export default HireMe;
