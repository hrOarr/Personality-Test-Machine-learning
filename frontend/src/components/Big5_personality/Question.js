import React, { PropTypes } from 'react';
import { Container, Row, Col, Card, Button, Radio } from 'reactstrap';
import './question.css';

class Question extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			answer: 3,
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {

		var value;
		if(e.target.value === "1")value = 1;
		else if(e.target.value === "2")value = 2;
		else if(e.target.value === "3")value = 3;
		else if(e.target.value === "4")value = 4;
		else value = 5;

		if (this.props.question in [
			"I don't talk a lot.",
			'I keep in the background.',
			'I have little to say.',
			"I don't like to draw attention to myself.",
			'I am quiet around strangers.',
			'I am relaxed most of the time.',
			'I seldom feel blue.',
			'I feel little concern for others.',
			'I insult people.',
			"I am not interested in other people's problems.",
			'I am not really interested in others.',
			'I leave my belongings around.',
			'I make a mess of things.',
			'I often forget to put things back in their proper place.',
			'I shirk my duties.',
			'I am exacting in my work.',
			'I have difficulty understanding abstract ideas.',
			'I am not interested in abstract ideas.',
			'I do not have a good imagination.',
	 	]) {
	 		value = 6 - value;
	 	}

		this.setState({answer: value});
		console.log(value)
		console.log(this.state.answer)
		this.props.handleAnswer(this.props.question, value);
	}

	render(){
		const { question, question_number, handleAnswer } = this.props;
		const text_answers = [
		    "Strongly Disagree",
		    "Disagree",
		    "Neutral",
		    "Agree",
		    "Strongly Agree"
		]

		return (

			<Container>
			   <div className="card card2 d-flex" style={{ fontFamily: 'sans-serif',fontWeight: '300', width: '60%' }}>
			      <p> {question_number}. &nbsp; {question} </p>

			      <div className="radio">
			        <label>
			           <input type="radio" value="1"
			            checked={this.state.answer === 1}
			            onChange={this.handleChange}
			           />
			           &nbsp; Strongly Disagree
			        </label>
			      </div>

			      <div className="radio">
			        <label>
			           <input type="radio" value="2"
			            checked={this.state.answer === 2}
			            onChange={this.handleChange}
			           />
			           &nbsp; Disagree
			        </label>
			      </div>

			      <div className="radio">
			        <label>
			           <input type="radio" value="3"
			            checked={this.state.answer === 3}
			            onChange={this.handleChange}
			           />
			           &nbsp; Neutral
			        </label>
			      </div>

			      <div className="radio">
			        <label>
			           <input type="radio" value="4"
			            checked={this.state.answer === 4}
			            onChange={this.handleChange}
			           />
			           &nbsp; Agree
			        </label>
			      </div>

			      <div className="radio">
			        <label>
			           <input type="radio" value="5"
			            checked={this.state.answer === 5}
			            onChange={this.handleChange}
			           />
			           &nbsp; Strongly Agree
			        </label>
			      </div>

			   </div>
			</Container>

		);
	}
};

export default Question;