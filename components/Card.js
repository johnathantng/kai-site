import { useState, useEffect } from 'react';

import CardMobile from './CardMobile';
import CardDesktop from './CardDesktop';

import { isMobile } from './utils/isMobile';

function Card(props) {
	const { thumb, desc } = props;

	const [card, setCard] = useState(null);
	const [width, setWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		if (isMobile()) {
      setCard(<CardMobile thumb={thumb} desc={desc}/>);
    } else {
      setCard(<CardDesktop />);
    }

    return () => window.removeEventListener("resize", handleResize);
	}, [width]);

	return (
		<div>
			{card}
		</div>
	);
}

export default Card;