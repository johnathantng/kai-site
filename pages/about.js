import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import NavBar from '../components/NavBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import '../sass/index.scss';

function About() {
  return (
  	<div>
  		<NavBar page="about"/>
  		<Footer />
  		<div className="about-container">
  			<img alt="kai-portfolio-self" />
  			<p>
  				<p>Nice to meet you!</p>
	  			Hi, I'm Kai.
	  			I am a Rhode Island School of Design graduate with a 
	  			passion for UI/UX design and branding identities.
	  			I love creating experiences for people through innovative design and products.
	  			<br /><br />
	  			Throughout the course of my education,
	  			I have developed an interdisciplinary skillset that allows me to
	  			design solutions to problems in an effective and empathetic way.
  			</p>
			</div>
  	</div>
  );
}

export default withRouter(About);
