import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';

import '../sass/index.scss';
import Landing from '../components/Landing';
import Hero from '../components/Hero';
import About from '../components/About';

function App() {

  useEffect(() => {

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
  	<div>
  		<Head>
  			<title>Kai Cao</title>
        <meta name="description" content="Hi, my name is Kai. 
          I graduated from Rhode Island School of Design (RISD). 
          I have a passion for innovative and empathic design. 
          Throughout the course of my education and work experience, 
          I have developed an interdisciplinary skillset that allows me to
          design solutions to problems in an effective and empathetic way." 
        />
  			<link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
  		</Head>
      <Landing />
      <Hero />
      <About />
  	</div>
  );
}

export default withRouter(App);
