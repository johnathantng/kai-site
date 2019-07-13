import { useState, useEffect } from 'react';
import Router from 'next/router';

function NavBarDesktop(props) {
	const { page } = props;
	const [workSelected, setWorkSelected] = useState('');
	const [aboutSelected, setAboutSelected] = useState('');
	const [skillsSelected, setSkillsSelected] = useState('');
	const [contactSelected, setContactSelected] = useState('');

	useEffect(() => {
		switch(page) {
			case 'about':
				return (setAboutSelected('selected'));
			default:
				return (setWorkSelected('selected'));
		}
	}, []);

	return (
		<div className="nav-desktop-header">
			<span onClick={() => Router.push('/index')}>Kai</span>
			<div className="nav-desktop-container">
				<div className={`nav-desktop-item ${workSelected}`}>
					<span onClick={() => Router.push('/index')}>work</span>
				</div>
				<div className={`nav-desktop-item ${aboutSelected}`}>
					<span onClick={() => Router.push('/about')}>about me</span>
				</div>
				<div className={`nav-desktop-item ${skillsSelected}`}>
					<span onClick={() => Router.push('/skills')}>skills</span>
				</div>
				<div className={`nav-desktop-item ${contactSelected}`}>
					<span onClick={() => Router.push('/contact')}>contact</span>
				</div>
			</div>
		</div>
	);
}

export default NavBarDesktop;
