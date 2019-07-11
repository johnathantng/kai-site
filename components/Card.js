import CardMobile from './CardMobile';
import CardDesktop from './CardDesktop';

import { isMobile } from '../utils/isMobile';

function Card() {
	const [card, setCard] = useState(null);
	const [width, setWidth] = useState(null);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		if (isMobile()) {
      setCard(<CardMobile />);
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