import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './test_questions_multipages.css';

class QuestionsMultipages extends Component {
	constructor(props){
		super(props);

		this.state = {
			start: 0,
			end: 5,
			copied: [],
			original: []
		}
	}

	componentDidMount(){
		this.updateState();
	}

	componentDidUpdate(){
		if( this.props.questions && this.props.questions != this.state.original ){
			this.updateState();
		}
	}

	updateState(){
		if( this.props.questions ){
			this.setState({
				original: this.props.questions,
				copied: this.props.questions.slice(this.state.start, this.state.end)
			});
		}
	}

	clickNext = () => {
		let copy = [...this.state.original]
		this.setState({ start: this.state.start+5, end: this.state.end+5 },
			() => {
				this.setState({ copied: copy.slice(this.state.start, this.state.end) });
			}
		);
	}

	clickPrev = () => {
		let copy = [...this.state.original]
		this.setState({ start: this.state.start-5, end: this.state.end-5 },
			() => {
				this.setState({ copied: copy.slice(this.state.start, this.state.end) });
			}
		);
	}

	render(){

		const{ copied } = this.state;

		return (
			<div>
			  {
			  	copied ? 
			  	copied.map(res => (
			  	   <div>{res}</div>
			  	))
			  	:
			  	null
			  }

			 {
			 	(copied && this.state.start > 0)?
			 	<button class="button button1" onClick={this.clickPrev}>Prev</button>
			 	:
			 	null
			 }

			 {
			 	(copied && this.state.end != 50)?
			 	<button class="button button1" onClick={this.clickNext}>Next</button>
			 	:
			 	<Link to={{ pathname: '/personality_test/questions/result',
			 	state: this.props.answer}}
			     >
			     <button input="submit" className="button button2" style={{ marginLeft: '15px', marginTop: '10px', fontWeight: '600' }}>
			      See Result 
			     </button>
			     </Link>
			 }

			</div>
		)
	}
}

export default QuestionsMultipages;