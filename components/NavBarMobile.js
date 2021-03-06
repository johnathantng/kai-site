import { useState, useEffect } from 'react';
import Router from 'next/router';

import Menu from '../static/icons/menu.png';

function NavBarMobile(props) {
	const page = props.page;
	const [isNavOpen, setNavOpen] = useState(false);
	const [slide, setSlide] = useState('slide-out')
	const [workSelected, setWorkSelected] = useState('');
	const [aboutSelected, setAboutSelected] = useState('');

	useEffect(() => {
		switch(page) {
			case 'about':
				return (setAboutSelected('selected'));
			default:
				return (setWorkSelected('selected'));
		}
	}, []);

	const handleSlide = () => {
		if (slide == "slide-in") {
		  setSlide("slide-out");
		} else {
			setSlide("slide-in");
		};
	};

	const	toggleNavOpen = () => {

		setNavOpen(true);

		handleSlide();

	};

	const handleNavBar = () => {
		if (isNavOpen) {
			return (
				<div className={`nav-mobile-container ${slide}`}>
					<div className={`nav-mobile-item ${workSelected}`}>
						<span onClick={() => Router.push('/index')}>work</span>
					</div>
					<div className={`nav-mobile-item ${aboutSelected}`}>
						<span onClick={() => Router.push('/about')}>about me</span>
					</div>
				</div>
			);
		};
	};

	return (
		<div className="navbar-mobile">
			<div className="mobile-header">
				<span onClick={() => Router.push('/index')}>Kai</span>
				<img className="nav-mobile-menu" alt="menu" src={Menu} onClick={toggleNavOpen}/>
			</div>
			<div>
				{handleNavBar()}
			</div>
		</div>
	);
};

export default NavBarMobile;
