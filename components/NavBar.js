import { useState } from 'react';

import { isMobile } from '../utils/isMobile';

function NavBar() {
	const [navbar, setNavBar] = useState(null);

/**
	useEffect(() => {
		if (isMobile()) {
      setNavBar(<NavbarMobile />);
    } else {
      setNavBar(<NavbarDesktop />);
    }
	});
*/

	return (
		<div id="navbar">
			{navbar}
		</div>
	);
}

export default NavBar;