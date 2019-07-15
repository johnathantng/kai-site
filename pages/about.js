import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import NavBar from '../components/NavBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import '../sass/index.scss';

import Photoshop from '../static/icons/photoshop.png';
import Illustrator from '../static/icons/illustrator.png';
import Xd from '../static/icons/xd.png';
import Sketch from '../static/icons/sketch.svg';
import InDesign from '../static/icons/indesign.png';
import Lightroom from '../static/icons/lightroom.png';
import Rhino from '../static/icons/rhino.png';
import Solidworks from '../static/icons/sw.png';

function About() {
  return (
  	<div>
  		<NavBar page="about"/>
  		<Footer />
  		<div className="about-container">
  			<img alt="kai-portfolio-self" />
  			<p>
  				<span>Nice to meet you!</span>
          <br /><br />
	  			Hi, I'm Kai.
	  			I am a Rhode Island School of Design graduate with a 
	  			passion for UI/UX design and branding identities.
	  			I love creating experiences for people through innovative design and products.
	  			<br /><br />
	  			Throughout the course of my education,
	  			I have developed an interdisciplinary skillset that allows me to
	  			design solutions to problems in an effective and empathetic way.
          <br /><br />
  			</p>
        <span className="skills-heading">Skills</span>
        <div className="skills-container">
          <img className="skills-item" src={Photoshop} />
          <img className="skills-item" src={Illustrator} />
          <img className="skills-item" src={Xd} />
          <img className="skills-item" src={Sketch} />
          <img className="skills-item" src={InDesign} />
          <img className="skills-item" src={Lightroom} />
          <img className="skills-item" src={Rhino} />
          <img className="skills-item" src={Solidworks} />
        </div>
			</div>
  	</div>
  );
}

export default withRouter(About);
