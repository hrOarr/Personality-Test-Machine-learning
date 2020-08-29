import React, { Component } from 'react';
import * as actions from '../../js/redux/actions/index';
import PieChart from '../helpers/pieChart';
import { connect } from "react-redux";
import { Container } from 'reactstrap';
import './personality_test_result.css';
import Table from './resultTable';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import TraitsDescription from './traitsDescription.js';
import Footer from '../helpers/footer';
import SubHeader from './subheaderResult';

class PersonalityTestResult extends Component {
	constructor(props){
		super(props);
	}

	getTestResult(){
		const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
          const data = this.props.location.state;
          console.log(data)
          this.props.submitQuestionPersonalityTest(data, config);
	}

	componentDidMount(){
		this.getTestResult();
	}

	componentWillMount(){
		this.getTestResult();
	}

	render(){

		const { testResult } = this.props;

          console.log(testResult);

		return (

			<div>
               { testResult != null ?
               <div>
               <SubHeader />
			<Container style={{backgroundColor: 'white'}}>
			   <div className="row" style={{ paddingTop: '50px' }}>
			      <div className="col-md-6">
			         <PieChart result={testResult}/>
			      </div>
			      <div className="col-md-6">
			         <Table result={testResult}/>
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
                 timeout={3000} //3 secs
               />
		     }
			</div>

		)
	}

};

const mapStateToProps = state => {
    return {
        testResult: state.questionTest.testResult,
        loading: state.questionTest.loading,
        error: state.questionTest.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitQuestionPersonalityTest: (data, config) =>
            dispatch(actions.questionPersonalityTest(data, config))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PersonalityTestResult);