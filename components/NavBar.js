import { useState, useEffect } from 'react';

import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

import { isMobile } from './utils/isMobile';

function NavBar(props) {

	const [navBar, setNavBar] = useState(null);
	const [width, setWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		if (isMobile()) {
      setNavBar(<NavBarMobile thumb={thumb} desc={desc}/>);
    } else {
      setNavBar(<NavBarDesktop thumb={thumb} desc={desc} />);
    }

    return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div>
			{navBar}
		</div>
	);
}

export default NavBar;