import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = ({ scale }) => {
	const [mousePosition, SetMousePosition] = useState({
		x: 0,
		y: 0,
	});

	// console.log(mousePosition);

	// mount the coursor

	useEffect(() => {
		const mouseMove = (e) => {
			// console.log(e);
			SetMousePosition({
				x: e.clientX,
				y: e.clientY,
			});
		};
		window.addEventListener('mousemove', mouseMove);

		return () => {
			window.removeEventListener('mousemove', mouseMove);
		};
	}, []);

	const isMediumOrLargeScreen = window.innerWidth >= 768;

	// framer motion variant
	const variants = {
		default: {
			x: mousePosition.x - 20,
			y: mousePosition.y - 20,
			backgroundColor: '#F1F0EB',
			mixBlendMode: 'difference',
		},
		text: {
			height: 100,
			width: 100,
			x: mousePosition.x - 75,
			y: mousePosition.y - 75,
			backgroundColor: '#F1F0EB',
			mixBlendMode: 'difference',
		},
	};
	return isMediumOrLargeScreen ? (
		<div>
			<motion.div
				variants={variants}
				animate={scale ? 'text' : 'default'}
				className='w-10 h-10 rounded-full bg-darkerColor fixed top-0 left-0 z-[200] pointer-events-none'
			/>
		</div>
	) : null;
};

export default Cursor;
