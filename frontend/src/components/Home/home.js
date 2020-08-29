import React, { Component } from 'react';

import Footer from '../helpers/footer';
import SubHeader from './subheader';

class Home extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div>
			  <SubHeader />
			  <Footer />
			</div>
		)
	}
}

export default Home;