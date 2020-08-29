import React, { Component } from 'react';
import { Container } from 'reactstrap';

class SubHeader extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div style={{ backgroundColor: '#1E4368' }}>
			  <div className="row">
			    <div className="col-md-12" style={{marginTop: '20px', marginBottom: '20px'}}>
			    <Container style={{ color: 'white' }}>
			      <h2 style={{ fontFamily: 'sans-serif', fontWeight: '650' }}> Find Out Personality Traits </h2>
			      <p style={{marginTop: 10, fontFamily: 'sans-serif', fontWeight: '520', fontSize: '22px'}}>
			       You need to write something that represents what you are actually.
			       <br /> 
			      (N.B. - Write honestly and help us to predict more accurate)
			      </p>
			     </Container>
			    </div>
			  </div>
			</div>
		)
	}
}

export default SubHeader;