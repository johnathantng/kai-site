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
					<span onClick={() => Router.push('/Home')}>Work</span>
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
