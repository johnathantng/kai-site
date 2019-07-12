import React, { useState, useEffect } from 'react';
import { withRouter } from 'next/router';

import Slide from '../components/Slide';
import NavBar from '../components/NavBar';
import CardList from '../components/CardList';

import '../sass/index.scss';

function App() {
  return (
  	<div>
  		<NavBar page="work"/>
  		<CardList />
  	</div>
  );
}

export default withRouter(App);
