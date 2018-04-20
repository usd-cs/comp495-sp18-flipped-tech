import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const response = {
	classData: [{
		meanGrade: 56,
		numOfStudents: 5,
		lowestScore: 0,
		highestScore: 100}
	]
}

class ClassPerformanceTable extends React.Component {
	render() {
		const data = response.classData

		const columns = [{
			Header: 'Number of Students',
			accessor: 'numOfStudents'
		},{
			Header: 'Average Grade',
			accessor: 'meanGrade'
		}, {
			Header: 'Lowest Score',
			accessor: 'lowestScore'
		}, {
			Header: 'Highest Score',
			accessor: 'highestScore'
		}]

		return(
			<div>
				<h1>Class Quiz Perfomance Analytics</h1>
				<ReactTable	
				data={data}
				columns={columns}
				noDataText="No Data Available" 
				defaultPageSize={1} 
				pageSizeOptions={[1]}/>
			</div>
		);
	}
}

export default ClassPerformanceTable;
