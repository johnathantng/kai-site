import { useState } from 'react';

import Card from './Card';
import Slide from './Slide';

import winClose from '../static/icons/window-close.png';
import gliThumb from '../static/images/glide-thumbnail.png';
import gliPres from '../static/images/glide-presentation.jpg';
import lunThumb from '../static/images/lune-thumbnail.png';
import lunPres from '../static/images/lune-presentation.jpg';
import rebThumb from '../static/images/rebrand-id-thumbnail.png';
import kaiThumb from '../static/images/kai-thumbnail.png';
import kaiPres from '../static/images/kai-presentation.jpg';
import yelThumb from '../static/images/yelort-thumbnail.png';
import cosThumb from '../static/images/cosmetics-thumbnail.png';
import picThumb from '../static/images/pickapath-thumbnail.png';

function CardList() {
	const [project, setProject] = useState('');

	const handleRenderSlide = () => {
		switch (project) {
			case "glide":
				return (
					<div className="project">
						<img 
							className="close-icon" 
							src={winClose} alt="window-close-icon" 
							onClick={() => onProjectClick("")} 
						/>
						<Slide pres={gliPres} />
					</div>
				);
			case "lune":
				return (
					<div className="project">
						<img 
							className="close-icon" 
							src={winClose} alt="window-close-icon" 
							onClick={() => onProjectClick("")} 
						/>
						<Slide pres={lunPres} />
					</div>
				);
			case "kai":
				return (
					<div className="project">
						<img 
							className="close-icon" 
							src={winClose} alt="window-close-icon" 
							onClick={() => onProjectClick("")} 
						/>
						<Slide pres={kaiPres} />
					</div>
				);
			default:
				return (
					<div className="card-list">
						<div className="card-wrapper" onClick={() => onProjectClick("glide")}>
							<Card thumb={gliThumb} desc="glide-thumbnail" />
						</div>
						<div className="card-wrapper" onClick={() => onProjectClick("lune")}>
							<Card thumb={lunThumb} desc="lune-thumbnail" />
						</div>
						<div className="card-wrapper">
							<Card thumb={rebThumb} desc="rebrand-id-thumbnail" />
						</div>
						<div className="card-wrapper" onClick={() => onProjectClick("kai")}>
							<Card thumb={kaiThumb} desc="kai-thumbnail" />
						</div>
						<div className="card-wrapper">
							<Card thumb={yelThumb} desc="yelort-thumbnail" />
						</div>
						<div className="card-wrapper">
							<Card thumb={cosThumb} desc="cosmetics-thumbnail" />
						</div>
						<div className="card-wrapper">
							<Card thumb={picThumb} desc="pickapath-thumbnail" />
						</div>
					</div>
				);
		}	
	}

	const onProjectClick = (work) => {
		setProject(`${work}`);
	}

	return (
		<div>
			{handleRenderSlide()}
		</div>
	);
};

export default CardList;