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
					Question:
						<input type="text" value={/*this.state.question*/} />
					
					Choice A:
						<input type="text" value={/*this.state.choiceA*/} />
					
					Choice B:
						<input type="text" value={/*this.state.choiceB*/} />	
				
					Choice C:
						<input type="text" value={/*this.state.choiceC*/} />
					
					Choice D:
						<input type="text" value={/*this.state.choiceD*/} />
					
					Correct Answer:
						<input type="radio" value="A" checked/>
						<input type="radio" value="B" />
						<input type="radio" value="C" />
						<input type="radio" value="D" />

					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default QuestionForm;
