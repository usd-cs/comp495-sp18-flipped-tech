import React, { Component } from 'react';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';

class LectureBox extends Component {
	constructor(props) {
		super(props)
		this.state = { questionList = []}
	}

	handler(question) {
	{/*set new state when question added*/}
	}
	render() {
		return(
			<div>
				<h1>Created Quiz Questions</h1>
				<QuestionList lists={this.state.questionList}></QuestionList>
				<br/>
				<QuestionForm handler={this.handler}> </QuestionForm>
			</div>
		);
	}
}
export default QuestionBox;

