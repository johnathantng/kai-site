import { useState, useEffect } from 'react';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

import { isMobile } from './utils/isMobile';

function NavBar() {
	const [navbar, setNavBar] = useState(null);

	useEffect(() => {
		if (isMobile()) {
      setNavBar(<NavBarMobile />);
    } else {
      setNavBar(<NavBarDesktop />);
    }
	});

	return (
		<div id="navbar">
			{navbar}
		</div>
	);
}

export default NavBar;