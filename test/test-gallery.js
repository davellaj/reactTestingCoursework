	import React from 'react';
	import TestUtils from 'react-addons-test-utils';
	import chai from 'chai';
	// import Index from '../js/index'

	const should = chai.should();

	import Gallery from '../js/components/gallery';

	describe('Gallery Component', function(){

		let url, description, images, renderer, result

		beforeEach(() => {
			url = "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg";
			description = "Example description";
			images = [{url:url, description:description}, {url:url, description:description}];

			renderer = TestUtils.createRenderer();
			renderer.render(<Gallery images={images} />)
			result = renderer.getRenderOutput();
		})

		it('Renders multiple images and descriptions', function(){
			result.props.className.should.equal('gallery');
		})

		it('Renders correct number of children', function() {
			result.props.children.length.should.equal(2); 
		})

		it('Renders the correct props for image component', function () {
			const firstObj = result.props.children[0].props
			firstObj.hasOwnProperty('url').should.equal(true)
			firstObj.hasOwnProperty('description').should.equal(true)
		})

		it('Render the correct url and description', function () {
			const img = result.props.children[0]
			img.props.url.should.equal(url);
			img.props.description.should.equal(description);
		})

		it('Renders an image component', function () {
			const img= result.props.children[0].type
			console.log(img)
			img.should.equal([Function: Image]);
		})
	})