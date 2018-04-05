import React, { Component } from 'react';

const Question = (props) => {
	return (
		<div>
			<h3>Question:{props.questionNumber}<br/>
				{props.questionText}
			</h3>
			<h4>
				A. {props.answerA}<br/>
				B. {props.answerB}<br/>
				C. {props.answerC}<br/>
				D. {props.answerD}<br/>
			</h4>
			<h3>Correct Answer:<br/>
				{props.correctAnswer}
			</h3>
			
		</div>	
	);
}

export default Question
			
