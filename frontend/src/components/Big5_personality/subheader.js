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
			      <h2 style={{ fontFamily: 'sans-serif', fontWeight: '650' }}> Take Quiz & Find Out Personality Traits </h2>
			      <p style={{marginTop: 10, fontFamily: 'sans-serif', fontWeight: '520', fontSize: '22px'}}>
			       You need to answer 50 questions to help us finding your belonging traits. It will result in rating personality traits.
			       <br /> 
			      (N.B. - Read the questions attentively and answer them honestly)
			      </p>
			     </Container>
			    </div>
			  </div>
			</div>
		)
	}
}

export default SubHeader;