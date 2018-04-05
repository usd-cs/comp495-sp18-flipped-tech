import React, { Component } from 'react';

class QuestionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			choiceA: '',
			choiceB: '',
			choiceC: '',
			choiceD: '',
			correctAnswer: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	handleSubmit(event) {
		//store question info 
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<br/>
				<label>
				Question:
					<input type="text" name="question" value={this.state.question} onChange={this.handleChange} />
				</label><br/>
				<br/>
				<label>
				Choice A:
					<input type="text" name="choiceA" value={this.state.choiceA} onChange={this.handleChange} />
				</label><br/>
				<br/>
				<label>
				Choice B:
					<input type="text" name="choiceB" value={this.state.choiceB} onChange={this.handleChange} />	
				</label><br/>
				<br/>
				<label>
				Choice C:
					<input type="text" name="choiceC" value={this.state.choiceC} onChange={this.handleChange} />
				</label><br/>
				<br/>
				<label>
				Choice D:
					<input type="text" name="choiceD" value={this.state.choiceD} onChange={this.handleChange} />
				</label><br/>
				<br/>
				<label>
				Correct Answer:
					<select name="correctAnswer" value={this.state.correctAnswer} onChange={this.handleChange} >
						<option value="A">Choice A</option> 
						<option value="B">Choice B</option> 
						<option value="C">Choice C</option> 
						<option value="D">Choice D</option>
					</select> 
				</label><br/>
				<br/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default QuestionForm;