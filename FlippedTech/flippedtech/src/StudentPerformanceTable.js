import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

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
	}]
}
const calculateMean = function(numbers) {
		var total = 0, 
			i;
		for (i = 0; i < numbers.length; i += 1) {
			total += numbers[i];
		}
		return (total / numbers.length) * 100;	
}

class StudentPerformanceTable extends React.Component {

	render() {
		const data = response.studentData

		const columns = [{
			Header: 'Name',
			accessor: 'name'
			}, {
			Header: 'Score on Questions', 
			id: 'questionScores',
			accessor: 'answers',
			render: ({value}) =>{
				const answerList = value.map(q=>q).join(", ")
				return <span>{answerList}</span>
			}
			}, {
			Header: 'Grade',
			accessor: 'grade'
		}]
	
		return (
			<div>
				<h1>Student Quiz Performance Analytics</h1>
				<ReactTable
				data={data}
				columns={columns}
				noDataText="No Data Available" />
			</div>
		);
	}
}

export default StudentPerformanceTable;

