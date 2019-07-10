import { useState, useEffect } from 'react';
import Router from 'next/router';

import Menu from '../static/icons/menu.png';

function NavBarMobile(props) {
	const page = props.page;
	const [isNavOpen, setNavOpen] = useState(false);
	const [slide, setSlide] = useState('slide-out')
	const [workSelected, setWorkSelected] = useState('');
	const [aboutSelected, setAboutSelected] = useState('');
	const [contactSelected, setContactSelected] = useState('');

	useEffect(() => {
		switch(page) {
			case 'about':
				return (setAboutSelected('selected'));
			case 'contact':
				return (setContactSelected('selected'));
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
					<div className={`nav-mobile-item ${contactSelected}`}>
						<span onClick={() => Router.push('/contact')}>contact</span>
					</div>
				</div>
			);
		};
	};

	return (
		<div>
			<div className="mobile-header">
				<span onClick={() => Router.push('/index')}>Kai</span>
				<img className="nav-mobile-menu" src={Menu} onClick={toggleNavOpen}/>
			</div>
			<div>
			{handleNavBar()}
			</div>
		</div>
	);
};

export default NavBarMobile;
