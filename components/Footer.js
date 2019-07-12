import behLogo from '../static/icons/behance-logo.svg';
import emailIcon from '../static/icons/email.svg';
import linLogo from '../static/icons/linkedin-logo.svg';

function Footer() {
	return (
		<div className="footer-container">
			<a target="_blank" href="https://www.behance.net/kaicao">
				<img src={behLogo} alt="behance-logo" />
			</a>
			<a href="mailto:test">
				<img src={emailIcon} alt="contact-email-icon" />
			</a>
			<a target="_blank" href="https://www.linkedin.com/in/kaic/">
				<img src={linLogo} alt="linkedin-logo" />
			</a>
		</div>
	);
}

export default Footer;