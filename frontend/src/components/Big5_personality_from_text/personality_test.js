import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Card } from 'reactstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SubHeader from './subheader';
import Footer from '../helpers/footer';

function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

class PersonalityFromText extends Component {
	constructor(props){
		super(props);

	this.state = {
		content: '',
		loading: true,
		disabled: true
	}

	this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		AsyncCall().then(() => this.setState({ loading: false }));
	}

	handleChange(e){
		const content = e.target.value;
		this.setState({ content: content });
		if(content!='')this.setState({ disabled: false });
		if(content=='')this.setState({ disabled: true });
	}

	render(){
		return (

			<div>
			  {
			  	!this.state.loading?
			  	<div>
			  	<SubHeader />
			  	<Container>
			  	   <div className="row">
			  	      <div className="col-md-8" style={{textAlign: 'center', marginTop: '30px'}}>
			  	       <Card>
			  	         <TextField
			  	           id="standard-textarea"
			  	           label="Write your text"
			  	           multiline={true}
			  	           floatinglabeltext="Input Text"
			  	           onChange={this.handleChange}
			  	           value={this.state.content}
			  	           style={{marginTop: '20px', marginBottom: '20px'}}
			  	         />

			  	         </Card>
			  	      </div>
			  	   </div>
			  	   <Button disabled={this.state.disabled} style={{fontWeight: '600'}} variant="contained" size="medium" color="primary" >
			  	   <Link style={{textDecoration: 'none'}} to={{ pathname: '/personality_test/text/result',
			 	     state: this.state.content}}
			         >
			          
			          Submit
			         
			  	   </Link>
			  	    </Button>
			  	</Container>
			  	<div style={{marginTop: '140px'}}>
			  	<Footer/>
			  	</div>
			  	</div>
			  	:
			  	<Loader
			      style={{textAlign: 'center', marginTop: '70px'}}
                     type="Circles"
                     color="#00BFFF"
                     height={100}
                     width={100}
                     timeout={2000} //2 secs
                    />
			  }
			</div>
		)
	}
}

export default PersonalityFromText;