import React, { Component } from 'react';
import Question from './Question';
import { Redirect, Link } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import axios from 'axios';
import QuestionsMultipages from './test_questions_multipages.js';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Footer from '../helpers/footer';
import SubHeader from './subheader';

function AsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2000));
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class PersonalityTest extends Component {
	constructor(props){
		super(props);

		var questions = {			
		     "I don't talk a lot.": 3,					
			'I am always prepared.': 3,			
			'I get stressed out easily.': 3,					
			'I have a rich vocabulary.': 3,						
			'I talk to a lot of different people at parties.': 3,			
			'I am interested in people.': 3,			
			'I leave my belongings around.': 3,							
			'I have difficulty understanding abstract ideas.': 3,					
			'I feel comfortable around people.': 3,				
			'I insult people.': 3,
			'I am the life of the party.': 3,			
			'I pay attention to details.': 3,									
			'I have a vivid imagination.': 3,				
			'I keep in the background.': 3,				
			"I sympathize with others' feelings.": 3,				
			'I make a mess of things.': 3,			
			'I seldom feel blue.': 3,	
			'I feel little concern for others.': 3,			
			'I am not interested in abstract ideas.': 3,			
			'I start conversations.': 3,		
			"I am not interested in other people's problems.": 3,				
			'I get chores done right away.': 3,				
			'I am easily disturbed.': 3,			
			'I have excellent ideas.': 3,	
			'I often feel blue.': 3,				
			'I have little to say.': 3,
			'I worry about things.': 3,				
			'I have a soft heart.': 3,
			'I spend time reflecting on things.': 3,				
			'I often forget to put things back in their proper place.': 3,					
			'I get upset easily.': 3,					
			'I do not have a good imagination.': 3,										
			'I am not really interested in others.': 3,					
			'I like order.': 3,										
			'I am quick to understand things.': 3,					
			"I don't like to draw attention to myself.": 3,					
			'I take time out for others.': 3,					
			'I shirk my duties.': 3,
			'I am full of ideas.': 3,					
			'I have frequent mood swings.': 3,					
			'I use difficult words.': 3,					
			"I don't mind being the center of attention.": 3,					
			"I feel others' emotions.": 3,					
			'I follow a schedule.': 3,
			'I am relaxed most of the time.': 3,					
			'I get irritated easily.': 3,										
			'I am quiet around strangers.': 3,					
			'I make people feel at ease.': 3,					
			'I am exacting in my work.': 3,	
			'I change my mood a lot.': 3,								
	 	}

		this.state = {
			questions: questions,
			loading: true,
		}

		this.handleAnswer = this.handleAnswer.bind(this);
	}

	componentDidMount(){
		AsyncCall().then(() => this.setState({ loading: false }));
	}

	handleAnswer(question, answer){
		this.state.questions[question] = answer;
	}

	render(){

		const question_elements = [];

		for(var i in Object.keys(this.state.questions)){
			question_elements.push(
				<Question
				 question={Object.keys(this.state.questions)[i]}
				 question_number={String(parseInt(i) + 1)}
				 handleAnswer={this.handleAnswer}
				/>
			);
		}

		const questionAnswer = this.state.questions;

		return (
			<div>
			{
			 !this.state.loading ? 
			<div>
			<SubHeader />
			<Container>
			<div style={{marginTop: 20}}>
			   <QuestionsMultipages questions={question_elements} answer={questionAnswer} />
			</div>
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
                 timeout={2000} //2 secs
               />
		     }
		     </div>
		);
	}
};

export default PersonalityTest;