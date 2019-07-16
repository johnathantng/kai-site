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
import yelPres from '../static/images/yelort-presentation.jpg';
import cosThumb from '../static/images/cosmetics-thumbnail.png';
import cosPres from '../static/images/cosmetics-presentation.jpg';
import picThumb from '../static/images/pickapath-thumbnail.png';
import picPres from '../static/images/pickapath-presentation.jpg';

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
			case "cos":
				return (
					<div className="project">
						<img 
							className="close-icon" 
							src={winClose} alt="window-close-icon" 
							onClick={() => onProjectClick("")} 
						/>
						<Slide pres={cosPres} />
					</div>
				);
				case "yel":
					return (
						<div className="project">
							<img 
								className="close-icon" 
								src={winClose} alt="window-close-icon" 
								onClick={() => onProjectClick("")} 
							/>
							<Slide pres={yelPres} />
						</div>
					);
				case "pic":
					return (
						<div className="project">
							<img 
								className="close-icon" 
								src={winClose} alt="window-close-icon" 
								onClick={() => onProjectClick("")} 
							/>
							<Slide pres={picPres} />
						</div>
					);
			default:
				return;
		}	
	}

	const onProjectClick = (work) => {
		setProject(`${work}`);
	}

	return (
		<div>
			{handleRenderSlide()}
			<div className="card-list">
				<div className="card-wrapper" onClick={() => onProjectClick("glide")}>
					<Card thumb={gliThumb} desc="glide-thumbnail" />
				</div>
				<div className="card-wrapper" onClick={() => onProjectClick("lune")}>
					<Card thumb={lunThumb} desc="lune-thumbnail" />
				</div>
				<div className="card-wrapper" onClick={() => window.open("https://www.behance.net/gallery/79420329/Rebranding-RISD-ID", "_blank")}>
					<Card thumb={rebThumb} desc="rebrand-id-thumbnail" />
				</div>
				<div className="card-wrapper" onClick={() => onProjectClick("kai")}>
					<Card thumb={kaiThumb} desc="kai-thumbnail" />
				</div>
				<div className="card-wrapper" onClick={() => onProjectClick("yel")}>
					<Card thumb={yelThumb} desc="yelort-thumbnail" />
				</div>
				<div className="card-wrapper" onClick={() => onProjectClick("cos")}>
					<Card thumb={cosThumb} desc="cosmetics-thumbnail" />
				</div>
				<div className="card-wrapper" onClick={() => onProjectClick("pic")}>
					<Card thumb={picThumb} desc="pickapath-thumbnail" />
				</div>
			</div>
		</div>
	);
};

export default CardList;