import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import Logo from '../assets/logo.png';

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
							<div onClick={() => setNav(true)} className=' cursor-pointer'>
								<HiMenuAlt1 />
							</div>
						</div>
					</div>
				</div>
				{/* mobile nav */}
				<div className={nav ? 'md:hidden relative' : ''}>
					<div
						className={
							nav
								? 'fixed left-0 top-0 w-full h-screen z-[99999] text-lightGray bg-darkColor ease-in duration-500'
								: 'fixed left-0 top-[-100%] w-full h-screen z-[99999] text-lightGray bg-darkColor ease-out duration-500'
						}>
						{/* logo text */}
						<div className='flex items-center justify-between'>
							<Link to={'/'}>
								<h1 className='text-2xl font-bold'>
									QI<span>~</span>BEEKAY
								</h1>
							</Link>
							<div className='cursor-pointer' onClick={() => setNav(false)}>
								<HiMenuAlt1 />
							</div>
						</div>

						{/* links */}
						<div className=''>
							<ul className='font-medium text-sm'>
								<li className=''>
									<Link to={'/about'}>ABOUT</Link>
								</li>
								<li className=''>
									<Link to={'/kitchen'}>KITCHEN</Link>
								</li>
								<li className=''>
									<Link to={'mailto:mokwechibuike7@gmail.com'}>CONTACT</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
