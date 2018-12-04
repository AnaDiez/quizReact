
import { combineReducers } from 'redux';

import { QUESTION_ANSWER, CHANGE_QUESTION, SUBMIT, INIT_QUESTIONS } from './actions';


function score(state = 0, action = {}) {
	switch(action.type){
		case SUBMIT:
			var puntuacion = 0;
			var i = 0
			for (i; i< action.payload.questions.length; i++){
				if (action.payload.questions[i].answer == action.payload.questions[i].userAnswer){
					puntuacion ++;
				}
			}
			return puntuacion;

		default:
		  return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		case SUBMIT:
			return true;
		default:
		  return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_QUESTION:
			return action.payload.index;
		default:
		  return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return { ...question, 
							userAnswer: action.payload.index === i ?
										action.payload.answer : question.userAnswer}

			})
		case INIT_QUESTIONS:
			return action.payload.questions;	
		default:
		  	return state;
	}
}

const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions

}));

export default GlobalState;