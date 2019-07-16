import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';

import NavBar from '../components/NavBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import '../sass/index.scss';

function App() {
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
  		<NavBar page="work"/>
  		<Footer />
  		<CardList />
  	</div>
  );
}

export default withRouter(App);
