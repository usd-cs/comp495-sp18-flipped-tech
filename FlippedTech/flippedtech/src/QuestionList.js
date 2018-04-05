import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component{
	render(props) {
		var questionNodes = this.props.lists.map(function(questionData) {
			return(
				<Question questionText={questionData.question} answerA={questionData.choiceA} answerB={questionData.choiceB} answerC={questionData.choiceC} answerD={questionData.choiceD} correctAnswer = {questionData.correctAnswer}>
				</Question>
			);
		})

		return(
			<div>
				{questionNodes}
			</div>
		);
	}	
}

export default QuestionList;
