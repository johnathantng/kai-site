import { useState, useEffect } from 'react';
import Router from 'next/router';

function NavBarMobile(props) {
	const page = props.page;
	const [isNavOpen, setNavOpen] = useState(false);
	const [workSelected, setWorkSelected] = useState('');
	const [aboutSelected, setAboutSelected] = useState('');
	const [contactSelected, setContactSelected] = useState('');

	useEffect(() => {
		switch(page) {
			case 'about':
				return (setAboutSelected('selected'))
			case 'contact':
				return (setContactSelected('selected'))
			default:
				return (setWorkSelected('selected'))
		}
	}, []);

	const	toggleNavOpen = () => {
		setNavOpen(!isNavOpen);
		console.log(isNavOpen);
	};

	const handleNavBar = () => {
		if (isNavOpen) {
			return (
				<div className="nav-container">
					<div className={`nav-item ${workSelected}`}>
						<span onClick={() => Router.push('/index')}>work</span>
					</div>
					<div className={`nav-item ${aboutSelected}`}>
						<span onClick={() => Router.push('/about')}>about me</span>
					</div>
					<div className={`nav-item ${contactSelected}`}>
						<span onClick={() => Router.push('/contact')}>contact</span>
					</div>
				</div>
			);
		};
	};

	return (
		<div>
			<div className="header" onClick={toggleNavOpen}>Kai</div>
			{handleNavBar()}
		</div>
	);
};

export default NavBarMobile;
