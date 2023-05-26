import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Logo from '../assets/logo.png';
import Logo1 from '../assets/logo.svg';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className='w-full fixed z-10 bg-lightGray'>
			<nav className=' max-w-6xl mx-auto p-4 font-quicksand'>
				{/* destop nav */}
				<div className=''>
					<div className=' flex items-center justify-between'>
						{/* logo text */}
						<Link to={'/'}>
							<img className='w-[7rem]' src={Logo} alt='' />
						</Link>

						{/* links */}
						<div className='hidden md:block'>
							<ul className='flex items-center font-semibold text-sm border border-darkColor py-3'>
								<li className='px-6 border-r  border-darkColor hover:text-brick'>
									<Link to={'/about'}>ABOUT</Link>
								</li>
								<li className='px-6 border-r border-darkColor hover:text-brick'>
									<Link to={'/kitchen'}>KITCHEN</Link>
								</li>
								<li className='px-6 hover:text-lightgreen'>
									<Link to={'mailto:mokwechibuike7@gmail.com'}>CONTACT</Link>
								</li>
							</ul>
						</div>

						<div className='md:hidden'>
							<div
								onClick={() => setNav(true)}
								className=' hover:animate-pulse cursor-pointer'>
								<HiMenuAlt3 size={30} />
							</div>
						</div>
					</div>
				</div>
				{/* mobile nav */}
				<div className={nav ? 'md:hidden relative' : ''}>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-full h-screen z-[99999] text-lightGray bg-darkColor p-4 ease-in duration-500'
								: 'fixed left-0 top-[-120vh] w-full h-screen z-[99999] text-lightGray bg-darkColor p-4 ease-out duration-500'
						}>
						{/* logo text */}
						<div className='flex items-center justify-between'>
							<Link to={'/'} onClick={() => setNav(false)}>
								<img className='w-[7rem]' src={Logo1} alt='' />
							</Link>
							<div className='cursor-pointer' onClick={() => setNav(false)}>
								<HiX size={30} />
							</div>
						</div>

						{/* links */}
						<div className='mt-16'>
							<ul className=' grid gap-10 font-raleway font-bold text-2xl xs:text-5xl text-center'>
								<li className=''>
									<Link
										className='hover:bg-lightGray hover:text-darkColor px-10 py-5 duration-300 ease-in'
										to={'/about'}
										onClick={() => setNav(false)}>
										ABOUT
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:bg-lightGray hover:text-darkColor px-10 py-5 duration-300 ease-in'
										to={'/kitchen'}
										onClick={() => setNav(false)}>
										KITCHEN
									</Link>
								</li>
								<li className=''>
									<Link
										className='hover:bg-lightGray hover:text-darkColor px-10 py-5 duration-300 ease-in'
										to={'mailto:mokwechibuike7@gmail.com'}
										onClick={() => setNav(false)}>
										CONTACT
									</Link>
								</li>
							</ul>
						</div>

						{/* icons */}
						<div className='flex items-center justify-center gap-4 mt-10'>
							<div className='bg-lightGray text-darkColor w-fit p-2 rounded-full'>
								<Link to={'https://twitter.com/qi_beekay'} target='_blank'>
									<FaTwitter size={20} />
								</Link>
							</div>
							<div className='bg-lightGray text-darkColor w-fit p-2 rounded-full'>
								<Link
									to={'https://www.linkedin.com/in/chibuike-mokwe-119a08248/'}
									target='_blank'>
									<FaLinkedinIn size={20} />
								</Link>
							</div>
							<div
								className='bg-lightGray text-darkColor w-fit p-2 rounded-full'
								target='_blank'>
								<Link to={'https://github.com/chi-beekay/chibuke-mokwe.git'}>
									<FaGithub size={20} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
