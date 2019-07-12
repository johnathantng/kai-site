import behLogo from '../static/icons/behance-logo.png';
import emailIcon from '../static/icons/e-mail-envelope.png';
import linLogo from '../static/icons/linkedin-logo.png';

function Footer() {
	return (
		<div className="footer-container">
			<img src={behLogo} alt="behance-logo" />
			<img src={emailIcon} alt="contact-email-icon" />
			<img src={linLogo} alt="linkedin-logo" />
		</div>
	);
}

export default Footer;