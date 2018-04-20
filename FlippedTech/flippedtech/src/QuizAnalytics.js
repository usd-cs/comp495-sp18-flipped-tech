import React, { Component } from 'react';
import StudentPerformanceTable from './StudentPerformanceTable';
import ClassPerformanceTable from './ClassPerformanceTable';
import QuestionPerformanceTable from './QuestionPerformanceTable';

const response = {
	studentData: [{
		name: 'Taylor Coury', 
		answers: [1, 1, 1, 1, 1], 
		grade: 100
		}, {
		name: 'Amanda Ennis', 
		answers: [1, 1,  0, 1, 1], 
		grade: 80
		}, {
		name: 'Levi Pike', 
		answers: [1, 0, 0, 0, 1], 
		grade: 40
		}, {
		name: 'Bob Marley', 
		answers: [1, 0, 0, 1, 1], 
		grade: 60
		}, {
		name: 'Shelby Burns', 
		answers: [0, 0, 0, 0, 0], 
		grade: 0
	}], 
	questionData: [{
		missed: [1, 3, 4, 2, 1],
		mostMissed: 3	
	}], 
	classData: [{
		meanGrade: 56,
		numOfStudents: 5,
		lowestScore: 0,
		highestScore: 100
	}]
}

class QuizAnalytics extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			studentPerformance: response.studentData,
			classPerformance: response.classData, 
			questionPerformance: response.questionData
		}
	}

	render() {
		return(
			<div>
				<h1>Quiz 1 Analytics</h1>
				<StudentPerformanceTable data={this.state.studentPerformance}></StudentPerformanceTable>
				<ClassPerformanceTable data={this.state.classPerformance}></ClassPerformanceTable>
				<QuestionPerformanceTable data={this.state.questionPerformance}></QuestionPerformanceTable>
						
			</div>	
		);
	}
	
} 

export default QuizAnalytics;
