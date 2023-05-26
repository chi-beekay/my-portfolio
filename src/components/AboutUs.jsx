import React from 'react';
import { Link } from 'react-router-dom';
import Cursor from './Cursor';
import {
	SiTailwindcss,
	SiCss3,
	SiHtml5,
	SiReact,
	SiJavascript,
	SiReactrouter,
	SiGit,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { motion as m } from 'framer-motion';
import { container, item } from '../components/animate';
import Text from './Text';

const AboutUs = () => {
	return (
		<div className='w-full'>
			<Cursor />
			<div className='relative w-full py-[10rem] px-4 lg:py-[9.5rem] md:px-[4rem] z-0'>
				<div className=' overflow-hidden'>
					<m.h1
						animate={{ y: 0 }}
						initial={{ y: '100%' }}
						transition={{ delay: 1.2, duration: 1 }}
						className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-raleway'>
						A<span className=' font-dance text-brick'>BO</span>UT ME
					</m.h1>
				</div>

				{/* absolutes */}
				<m.div
					initial={{ opacity: 0 }}
					transition={{ delay: 1.2, duration: 1 }}
					animate={{ opacity: 1 }}>
					<li className=' animate-bounce absolute top-[7rem] text-5xl right-[5rem] text-darkColor list-none'>
						<SiReact />
					</li>

					<li className=' absolute top-[20rem] text-4xl right-[5rem] text-darkColor list-none'>
						<SiTailwindcss />
					</li>

					<li className=' animate-pulse absolute top-[7rem] text-2xl left-5 text-darkColor list-none'>
						<SiCss3 />
					</li>
				</m.div>

				<div className='mt-36 md:mt-40'>
					<div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-0'>
						<div className=' overflow-hidden'>
							<m.div
								animate={{ x: 0 }}
								initial={{ x: '-100%' }}
								transition={{
									delay: 3,
									duration: 1,
									type: 'spring',
									stiffness: '200',
								}}
								className=' flex items-center gap-2'>
								<div className='w-20 h-1 bg-darkerColor'></div>
								<span>Hello Visitor's</span>
							</m.div>
						</div>
						{/* socials */}
						<div>
							<m.ul
								variants={container}
								initial='hidden'
								animate='show'
								className='flex flex-wrap gap-2 sm:gap-0 font-semibold'>
								<div className='overflow-hidden'>
									<m.li
										variants={item}
										className=' border border-darkColor sm:py-4 px-5 text-brick'>
										<Link to={'mailto:mokwechibuike7@gmail.com'}>EMAIL</Link>
									</m.li>
								</div>

								<div className='overflow-hidden'>
									<m.li
										variants={item}
										className=' border border-darkColor sm:py-4 px-5 text-lightgreen'>
										<Link
											to={
												'https://www.linkedin.com/in/chibuike-mokwe-119a08248/'
											}>
											LINKEDIN
										</Link>
									</m.li>
								</div>
								<div className='overflow-hidden'>
									<m.li
										variants={item}
										className=' border border-darkColor sm:py-4 px-5 text-brick'>
										<Link to={'https://twitter.com/qi_beekay'}>TWITTER</Link>
									</m.li>
								</div>
								<div className='overflow-hidden'>
									<m.li
										variants={item}
										className=' border border-darkColor sm:py-4 px-5 text-lightgreen'>
										<a href='/Anugo_Mokwe.pdf' download target='_blank'>
											RESUME
										</a>
									</m.li>
								</div>
							</m.ul>
						</div>
					</div>
					<div className='mt-14'>
						<m.p className='flex flex-col gap-10 font-raleway leading-10  sm:leading-[3rem] tracking-wide text-xl sm:text-3xl'>
							<Text
								speed='0.01'
								delay='2'
								text='My name is Mokwe Chibuike (qi-beekay). I am currently located in
							West Africa and hold a B.Sc in Computer Sciences from the
							University of Benin City. I have one year of experience as a
							Frontend Engineer and am proficient in various front-end
							technologies. My focus is on developing user-friendly web
							applications with a strong emphasis on responsiveness. Currently,
							I am working towards becoming a Fullstack Software Engineer.'
							/>
							<Text
								speed='0.01'
								delay='5'
								text='I am a passionate and self-motivated developer who is open to
								work and gigs. I am also always eager to learn and develop
								myself further.'
							/>
							<Text
								speed='0.01'
								delay='7'
								text="When I'm not coding, I enjoy playing basketball, which is my
								passion. Standing at 6ft5, I am drawn to this career.
								Additionally, I am a lover of food and music, which I find
								therapeutic."
							/>
							<span></span>
							<span></span>
						</m.p>
					</div>

					{/* tools */}
					<div className=' flex items-center mt-10'>
						<div className='w-20 h-1 bg-darkerColor'></div>
						<span>Tools I work with</span>
					</div>

					{/* toolss */}
					<div className='mt-10'>
						<div>
							<ul className='flex items-center gap-5 md:gap-10 font-semibold text-sm md:text-xl flex-wrap'>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-brick'>
										HTML <SiHtml5 />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-lightgreen'>
										CSS <SiCss3 />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-darkColor'>
										Tailwind <SiTailwindcss />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-lightgreen'>
										Javascript <SiJavascript />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-brick'>
										Git <SiGit />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-darkColor'>
										React <SiReact />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-brick'>
										React Router <SiReactrouter />
									</li>
								</div>
								<div className='overflow-hidden'>
									<li className='flex items-center gap-2 text-lightgreen'>
										Framer Motion <TbBrandFramerMotion />
									</li>
								</div>
							</ul>
						</div>
					</div>

					<div></div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
