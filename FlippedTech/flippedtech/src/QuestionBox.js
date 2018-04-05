import React, { Component } from 'react';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

var questionList = [
		{number: 1, question:"what is the meaning of life?", choiceA: "no",
			choiceB: "yes", choiceC: "maybe", choiceD: "all", correctAnswer: "a"},
		{number: 2, question:"are you happy?", choiceA: "no",
			choiceB: "yes", choiceC: "maybe", choiceD: "all", correctAnswer: "b"}
]

class QuestionBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			questionlist: questionList
		}
	}
	

	handler(question) {
	/*set new state when question added*/
		alert("got it")
	}
	render() {
		alert(questionList)
		return(
			<div>
				<h1>Created Quiz Questions</h1>
				<QuestionList lists={this.state.questionlist}></QuestionList>
				<br/>
				<QuestionForm handler={this.handler}> </QuestionForm>
			</div>
		);
	}
}
export default QuestionBox;

