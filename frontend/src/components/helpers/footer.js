import React,{ Component } from 'react';

class Footer extends Component {
	render(){
		return (
			<div style={{ backgroundColor: '#FBFBFD',boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1), 0 2px 6px 0 rgba(0,0,0,0.12)' }}>
			  <div className="row">
			    <div className="col-md-12">
			       <p style={{ textAlign: 'center',marginTop: '30px', marginBottom: '25px' }}>© 2020 All Rights Reserved. Techleader</p>
			    </div>
			  </div>
			</div>
		);
	}
};

export default Footer;