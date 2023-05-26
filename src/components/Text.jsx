import React from 'react';
import { motion as m } from 'framer-motion';

const Text = ({ text, speed, delay, className }) => {
	// const words = text.split(' ');
	const words = Array.from(text);

	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: { staggerChildren: speed, delayChildren: delay * i },
		}),
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
		hidden: {
			opacity: 0,
			y: 20,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 200,
			},
		},
	};
	return (
		<m.span
			style={{ overflow: 'hidden', display: 'block' }}
			variants={container}
			initial='hidden'
			animate='visible'>
			{words.map((word, index) => (
				<m.span className={className} variants={child} key={index}>
					{/* {' '}
					{word} */}
					{word === ' ' ? ' ' : word}
				</m.span>
			))}
		</m.span>
	);
};

export default Text;
