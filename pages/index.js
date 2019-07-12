import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import NavBar from '../components/NavBar';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

import '../sass/index.scss';

function App() {
  return (
  	<div>
  		<NavBar page="work"/>
  		<CardList />
  		<Footer />
  	</div>
  );
}

export default withRouter(App);
