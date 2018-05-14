import React, {Component} from 'react';
import {Redirect} from 'react-router';

/*
1	Limit Defintion of the Derivative
2	Derivatives 1.0: The Power Rule
3	Derivatives 2.0: The Chain Rule
4	Derivative 3.0: Trig, Exponential, and Logs
*/
class LectureUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lecture: '',
			course: '',
			videolink: '',
			description: '',
			date: '',
			time: '',
			AMorPM: '',
			submit: false
		}
	}

	submitLecture = () => {
		fetch('/newLecture', {
	      headers: {'Content-Type': 'application/json'},
	      method: 'post',
	      body: JSON.stringify({
	      	id: this.props.length+1,
	      	title: this.state.lecture,
	      	course: this.state.course,
	      	youtubelink: this.state.videolink,
	      	description: this.state.description
	      })
	    })
	    .then(response => {
	      return response.text()
	    })
	    .then(data => {
	      console.log('submitted')
	    })
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log('changed');
	};

	handleSubmit = (event) => {
		//alert('in handle submit');
		event.preventDefault();
	    this.submitLecture();
	    this.setState({submit: true})
	};

	render() {
		//console.log('length: ' + this.props.length);
		if(this.state.submit === true)
			return <Redirect to='/adminLectures' />

		return (
			<form onSubmit={this.handleSubmit}>
		        <br/>Name of Lecture:<br/>
				<input type="text" name="lecture" value={this.state.lecture} required onChange={this.handleChange}/>
				<br/>Name of Course:<br/>
				<input type="text" name="course" value={this.state.course} required onChange={this.handleChange} />
				<br/>Link to Lecture Video(must be valid youtube url):<br/>
				<input type="text" name="videolink" size="35" value={this.state.videolink} required pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" onChange={this.handleChange} />
				<br/>Description of Lecture:<br/>
				<textarea name="description" cols="90" rows="5" value={this.state.description} required="required" onChange={this.handleChange} ></textarea>
				<br/>Date to Make Available(MM/DD/YYYY):<br/>
				<input type="text" name="date" value={this.state.date} required pattern="^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$"onChange={this.handleChange} />
				<br/>Time to Make Available(##:##):<br/>
				<input type="text" name="time" value={this.state.time} required pattern="^(1[0-2]|0?[1-9]):[0-5][0-9]$"onChange={this.handleChange} />
				<br/>
					<select name="AMorPM" value={this.state.AMorPM} onChange={this.handleChange}>
						<option value="AM">AM</option>
						<option value="PM">PM</option>
					</select>
				<br/>
				<input type="submit" value="Submit"/>
	      	</form>
		);
	}
}

export default LectureUpload;
