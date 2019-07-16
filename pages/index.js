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
  			<link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
  		</Head>
  		<NavBar page="work"/>
  		<Footer />
  		<CardList />
  	</div>
  );
}

export default withRouter(App);
