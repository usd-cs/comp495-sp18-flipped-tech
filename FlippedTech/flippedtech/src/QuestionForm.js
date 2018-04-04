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
	}

	handleSubmit() {
		//store question info 
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<br/>
					<label>
					Question:
						<input type="text" value={this.state.question} />
					</label><br/>
					<br/>
					<label>
					Choice A:
						<input type="text" value={this.state.choiceA} />
					</label><br/>
					<br/>
					<label>
					Choice B:
						<input type="text" value={this.state.choiceB} />	
					</label><br/>
					<br/>
					<label>
					Choice C:
						<input type="text" value={this.state.choiceC} />
					</label><br/>
					<br/>
					<label>
					Choice D:
						<input type="text" value={this.state.choiceD} />
					</label><br/>
					<br/>
					<label>
					Correct Answer:
						A <input type="radio" value="A" /> 
						B <input type="radio" value="B" /> 
						C <input type="radio" value="C" /> 
						D <input type="radio" value="D" /> 
					</label><br/>
					<br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default QuestionForm;
