import React, {Component} from 'react';
import {validateUrl} from 'youtube-validate'

{/*Lecture Upload Page for Admins*/}
/*
const LectureUpload = (props) => {
return ( 
<div>
	<script>
	function validate() {
		var url = document.getElementByName("videolink");
		validateUrl(url)
		.then(res => { 
			return true;
		}).catch({
		})
	}
	</script>

	<h1> Video Lecture Upload Form </h1>
	<form name="lectureForm" action="/newLecture" onsubmit="return validate()" method="POST">
		Name of Lecture:<br/>
			<input type="text" name="lecture" required/><br/>
		Name of Course:<br/>
			<input type="text" name="course" required/><br/>
		Link to Lecture Video(<em>Make sure to use the embedded link</em>):<br/>
			<input type="text" name="videolink" size="35" onchange="validate(this.input)" required/><br/>
		Description of Lecture:<br/>
			<textarea name="describtion" cols="90" rows="5" required="required"></textarea><br/>
		Date to Make Available(MM/DD/YYYY):<br/>
			<input type="text" name="date" required /><br/>
		Time to Make Available(##:##):<br/>
			<input type="text" name="time" required/><br/>
			<input type="radio" name="AMorPM" value="AM" checked/> AM<br/>
			<input type="radio" name="AMorPM" value="PM"/> PM<br/>
		<br/>
			<input type="submit" value="Submit"/>
	</form>

</div>
);
}
*/

class LectureUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lecture: '',
			course: '',
			videolink: '',
			describtion: '', 
			date: '',
			time: '',
			AMorPM: ''
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault()
		alert('got here');
		validateUrl(this.state.videolink)
		.then(res => {
			alert('Your lecture was sumbitted');
		}).catch(err => {
			alert(err);
			return;
		})	
	}

	render() {
		return (
			<div>
				<h1> Video Lecture Upload Form </h1>
				<form onsubmit={this.handleSubmit}>
				<br/>
				Name of Lecture:<br/>
					<input type="text" name="lecture" value={this.state.lecture} required onChange={this.handleChange}/><br/>
				Name of Course:<br/>
					<input type="text" name="course" value={this.state.course} required onChange={this.handleChange} /><br/>
				Link to Lecture Video(<em>Make sure to use the embedded link</em>):<br/>
					<input type="text" name="videolink" size="35" value={this.state.videolink} required onChange={this.handleChange} /><br/>
				Description of Lecture:<br/>
					<textarea name="describtion" cols="90" rows="5" value={this.state.describtion} required="required" onChange={this.handleChange} ></textarea><br/>
				Date to Make Available(MM/DD/YYYY):<br/>
					<input type="text" name="date" value={this.state.date} required onChange={this.handleChange} /><br/>
				Time to Make Available(##:##):<br/>
					<input type="text" name="time" value={this.state.time} required onChange={this.handleChange} /><br/>
					<select name="AMorPM" value={this.state.AMorPM} onChange={this.handleChange}>
						<option value="AM">AM</option>
						<option value="PM">PM</option>
					</select>
				<br/>
					<input type="submit" value="Submit"/>
				</form>
			</div>

		);
	}
}

export default LectureUpload;
