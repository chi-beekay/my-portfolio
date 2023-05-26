import React, { useState } from 'react';
import Cursor from '../components/Cursor';
import { motion as m } from 'framer-motion';
import Text from './Text';

const Hero = () => {
	const [scaling, setScaling] = useState(false);

	const handleMouseEnter = () => {
		setScaling(true);
	};

	const handleMouseLeave = () => {
		setScaling(false);
	};
	return (
		<div className='w-full'>
			<Cursor scale={scaling} />
			<div className='w-full py-[10rem] px-4 lg:py-[9.5rem] md:px-[4rem] '>
				<h1
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					className=' overflow-hidden flex flex-col text-5xl xs:text-6xl sm:text-8xl xl:text-9xl font-playfair'>
					<m.span
						animate={{ y: 0 }}
						initial={{ y: '-100%' }}
						transition={{ delay: 1.2, duration: 2 }}>
						MOKWE
					</m.span>
					<m.span
						animate={{ y: 0 }}
						initial={{ y: '100%' }}
						transition={{ delay: 1.5, duration: 2.2 }}
						className='md:flex md:gap-1 overflow-hidden'>
						<m.span
							animate={{ x: 0 }}
							initial={{ x: '-100%' }}
							transition={{
								delay: 4,
								duration: 1.5,
								type: 'spring',
								stiffness: '200',
							}}
							className='text-lg text-center flex items-center justify-center gap-1'>
							<div className='w-20 h-1 bg-darkerColor'></div> qi-beekay
						</m.span>
						CHIBUIKE
					</m.span>
				</h1>
				<m.h1 className=' flex gap-5 xs:text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-quicksand'>
					<Text className='text-brick' text='FRONTEND' speed='0.2' delay='2' />
					<Text
						className='text-lightgreen'
						text='DEVELOPER'
						speed='0.2'
						delay='3.5'
					/>
				</m.h1>
			</div>
		</div>
	);
};

export default Hero;
