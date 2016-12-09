require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom'

import Gallery from './components/gallery'

const url = "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg";
const description = "Example description";

const images = [{url:url, description:description}, {url:url, description:description}];



document.addEventListener('DOMContentLoaded', () =>
	 	ReactDOM.render(<Gallery images={images}/>, document.getElementById('app'))
	)