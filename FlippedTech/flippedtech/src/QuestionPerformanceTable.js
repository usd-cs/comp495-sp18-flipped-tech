import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const response = {
	questionData: [{
		missed: [1, 3, 4, 2, 1],
		mostMissed: 3	
	}]
}

class QuestionPerformanceTable extends React.Component {
	render() {
		const data = response.questionData

		const columns = [{
			Header: 'Number of Students that Missed Each Question',
			accessor: 'missed'
		}, {
			Header: 'Most Missed Question',
			accessor: 'mostMissed'
		}]

		return(
			<div>
				<h1>Quiz Question Performance Analytics</h1>
				<ReactTable
				data={data}
				columns={columns}
				noDataText="No Data Available" 
				defaultPageSize={1} 
				pageSizeOptions={[1]} />
			</div>
		);
	}
}

export default QuestionPerformanceTable;
