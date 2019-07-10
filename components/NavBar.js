import { useState, useEffect } from 'react';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

import { isMobile } from './utils/isMobile';

function NavBar(props) {
	const page = props.page;
	const [navbar, setNavBar] = useState(null);

	useEffect(() => {
		if (isMobile()) {
      setNavBar(<NavBarMobile page={page}/>);
    } else {
      setNavBar(<NavBarDesktop page={page}/>);
    }
	});

	return (
		<div id="navbar">
			{navbar}
		</div>
	);
}

export default NavBar;