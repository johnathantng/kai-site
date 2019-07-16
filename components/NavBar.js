import { useState, useEffect } from 'react';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

import { isMobile } from './utils/isMobile';

function NavBar(props) {
	const { page } = props;

	const [navbar, setNavBar] = useState(null);
	const [width, setWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		
		if (isMobile()) {
    	setNavBar(<NavBarMobile page={page}/>);
    } else {
      setNavBar(<NavBarDesktop page={page}/>);
    }

    return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div id="navbar">
			{navbar}
		</div>
	);
}

export default NavBar;