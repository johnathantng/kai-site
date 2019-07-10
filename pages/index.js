import React, { useState, useEffect } from 'react';

import { withRouter } from 'next/router';
/**
how to use Router
**
{() => Router.push('/about')}
*/

// import Component from '../components/Component';
import NavBar from '../components/NavBar';

import '../sass/index.scss';

function App() {
  return (
  	<div>
  		<NavBar page="work"/>
  	</div>
  );
}

export default withRouter(App);
