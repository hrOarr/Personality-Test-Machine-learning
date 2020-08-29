import React, { Component } from 'react';
import * as actions from '../../js/redux/actions/index';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Container } from 'reactstrap';
import ResultTable from './resultTable.js';
import { connect } from "react-redux";
import PieChart from './pieChart.js';
import Grid from '@material-ui/core/Grid';
import SubHeader from './subheaderResult';
import Footer from '../helpers/footer';
import TraitsDescription from './traitsDescription';
import Card from '@material-ui/core/Card';

function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

class PersonalityTestResult extends Component{

	constructor(props){
		super(props);
		this.state = {
			loading: true
		}
	}

	getTestResult(){
		const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          var data = this.props.location.state;
          data = JSON.stringify(data)
          console.log(data)
          this.props.submitTextPersonalityTest(data, config);
	}

	componentDidMount(){
		this.getTestResult();
		AsyncCall().then(() => this.setState({ loading: false }));
	}

	componentWillMount(){
		this.getTestResult();
	}

	render(){

		console.log(this.props.testResult)

		return (
			<div>
			{
			 (this.props.testResult!=null && !this.state.loading)?
			 <div>
			  <SubHeader/>
			<Container style={{backgroundColor: 'white'}}>
			  <div className="row" style={{ paddingTop: '50px', padingBottom: '50px' }}>
			      <div className="col-md-6">
			         <PieChart result={this.props.testResult}/>
			      </div>
			      <div className="col-md-6">
			         <ResultTable result={this.props.testResult}/>
			      </div>
			   </div>
			   <TraitsDescription />
			</Container>
			<Footer />
			</div>
			:
			  <Loader
			     style={{textAlign: 'center', marginTop: '70px'}}
                    type="Circles"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={6000} //3 secs
                 />
		     }
			</div>
		)

	}
}

const mapStateToProps = state => {
    return {
        testResult: state.textTest.testResult,
        loading: state.textTest.loading,
        error: state.textTest.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitTextPersonalityTest: (data, config) =>
            dispatch(actions.textPersonalityTest(data, config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalityTestResult);