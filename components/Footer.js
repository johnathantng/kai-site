import behLogo from '../static/icons/behance-logo.svg';
import emailIcon from '../static/icons/email.svg';
import linLogo from '../static/icons/linkedin-logo.svg';

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