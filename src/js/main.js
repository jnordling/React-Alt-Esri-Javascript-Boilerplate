import React from 'react';
import ReactDom from 'react-dom';
import Header from 'shared/header';
import Footer from 'shared/footer';
import Map from 'components/map/map';

let currentPage = location.hash.split('#')[1] ? location.hash.split('#')[1] : 'home';

if (!_babelPolyfill) {
	console.log('Error: babel-polyfill could not be detected');
}

let initializeApp = (currentPage) => {
  ReactDom.render(<Header/>, document.getElementById('header'));
  // ReactDom.render(<Map />, document.getElementById('mapContainer'));
  ReactDom.render(<Footer />, document.getElementById('footer'));
};

initializeApp(currentPage);
