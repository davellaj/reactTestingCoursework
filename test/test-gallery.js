import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Gallery from '../js/components/gallery';

describe('Gallery Component', function(){
	it('Renders multiple images and descriptions', function(){
		const url = "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg";
		const description = "Example description";
		const images = [{url:url, description:description}, {url:url, description:description}];

		const renderer = TestUtils.createRenderer();
		renderer.render(<Gallery images={images} />)
		const result = renderer.getRenderOutput();
		console.log(result.props.children[0].props);
		result.props.className.should.equal('gallery');
	})
})