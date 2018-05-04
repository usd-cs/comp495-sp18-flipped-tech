import React, { Component } from 'react';
import QuestionList from './QuestionList';
import QuestionForm from './QuestionForm';
//import 'tachyons';

//dummy data
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
			questionlist: questionList,
			quizName: '',
			connectedLecture: '',
			dueDate: '',
			time: '',
			AMorPM: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	//Set up for backend
	
	componentDidMount = () => {

	}

	addQuestion = (questionText, A, B, C, D, rightAnswer) => {

	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	render() {
		return(
			<div>
				<h1> Quiz Creation Form </h1>
				<form onSubmit={this.handleSubmit} method="POST">
				<br/>
					Name of Quiz:<br/>
						<input type="text" name="quizName" value={this.state.quizName} required onChange={this.handleChange}/><br/>
					Name of Connected Lecture:<br/>
						<input type="text" name="connectedLecture" value={this.state.connectedLecture} required onChange={this.handleChange}/><br/>
					Due Date(MM/DD/YYYY):<br/>
					<input type="text" name="dueDate" value={this.state.dueDate} required pattern="^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$" onChange={this.handleChange} /><br/>
					Time(##:##):<br/>
					<input type="text" name="time" value={this.state.time} required pattern="^(1[0-2]|0?[1-9]):[0-5][0-9]$" onChange={this.handleChange} /><br/>
					<select name="AMorPM" value={this.state.AMorPM} onChange={this.handleChange}>
						<option value="AM">AM</option>
						<option value="PM">PM</option>
					</select>
				<br/>
					<div>
						<h2>Add Questions </h2>
						<QuestionForm handler={this.addQuestion}> </QuestionForm>
						<br/>
						<h3>Created Quiz Questions</h3>
						<QuestionList lists={this.state.questionlist}></QuestionList>
					</div>
					<br/>
					<input type="submit" value="Create Quiz"/>

				</form>
			</div>
		);
	}
}
export default QuestionBox;
