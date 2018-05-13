import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

class LectureUpload extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lecture: '',
			course: '',
			videolink: '',
			describtion: '',
			date: moment(),
			time: moment()
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log('changed');
	}

	handleDateChange(newDate) {
		this.setState({
			date: newDate
		});
	}

	handleTimeChange(newTime) {
		this.setState({
			time: newTime
		});
	}
	
	handleSubmit(event) {
		event.preventDefault();
		console.log('Submitted');
	}

	render() {
		return (
			<div>
				<h1> Video Lecture Upload Form </h1>
				<form onsubmit={this.handleSubmit} method="POST">
				<br/>
				Name of Lecture:<br/>
					<input type="text" name="lecture" value={this.state.lecture} required onChange={this.handleChange}/><br/>
				Name of Course:<br/>
					<input type="text" name="course" value={this.state.course} required onChange={this.handleChange} /><br/>
				Link to Lecture Video(must be valid youtube url):<br/>
					<input type="url" name="videolink" size="35" value={this.state.videolink} required pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" onChange={this.handleChange} /><br/>
				Description of Lecture:<br/>
					<textarea name="describtion" cols="90" rows="5" value={this.state.describtion} required="required" onChange={this.handleChange} ></textarea><br/>
				Date to Make Available:<br/>
					<div>	
					<DatePicker selected={this.state.date} onChange={this.handleDateChange} dateFormat="LL" />
					</div>
					<br/>
				Time to Make Available:<br/>
					<div>
					<TimePicker value={this.state.time} onChange={this.handleTimeChange} showSecond={false} allowEmpty={false} format="h:mm a" use12Hours />
					</div>
					<br/>
					<input type="submit" value="Submit"/>
				</form>
			</div>

		);
	}
}

export default LectureUpload;

