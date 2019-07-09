import { useState } from 'react';
import Router from 'next/router';

function NavBarMobile() {
	const [isNavOpen, setNavOpen] = useState(false);

	const	toggleNavOpen = () => {
		setNavOpen(!isNavOpen);
		console.log(isNavOpen);
	};

	const handleNavBar = () => {
		if (isNavOpen) {
			return (
				<div>
					<div>
						<span onClick={() => Router.push('/index')}>work</span>
					</div>
					<div>
						<span onClick={() => Router.push('/about')}>about me</span>
					</div>
					<div>
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
