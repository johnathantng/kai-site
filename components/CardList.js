import Card from './Card';

import gliThumb from '../static/images/glide-thumbnail.png';
import lunThumb from '../static/images/lune-thumbnail.png';
import rebThumb from '../static/images/rebrand-id-thumbnail.png';
import kaiThumb from '../static/images/kai-thumbnail.png';
import yelThumb from '../static/images/yelort-thumbnail.png';
import cosThumb from '../static/images/cosmetics-thumbnail.png';
import picThumb from '../static/images/pickapath-thumbnail.png';

function CardList() {
	return (
		<div className="card-list">
			<Card thumb={gliThumb} desc="glide-thumbnail" />
			<Card thumb={lunThumb} desc="lune-thumbnail" />
			<Card thumb={rebThumb} desc="rebrand-id-thumbnail" />
			<Card thumb={kaiThumb} desc="kai-thumbnail" />
			<Card thumb={yelThumb} desc="yelort-thumbnail" />
			<Card thumb={cosThumb} desc="cosmetics-thumbnail" />
			<Card thumb={picThumb} desc="pickapath-thumbnail" />
		</div>
	);
};

export default CardList;