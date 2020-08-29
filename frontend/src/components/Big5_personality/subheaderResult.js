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
			      <h1 style={{fontFamily: 'sans-serif', fontWeight: '700'}}>Personality Test result is out!</h1>
			      <p style={{marginTop: '10px', fontFamily: 'sans-serif', fontWeight: '520', fontSize: '22px'}}>Get a closer reflection of you</p>
			     </Container>
			    </div>
			  </div>
			</div>
		)
	}
}

export default SubHeader;