import React, {Component} from 'react';
import {Redirect} from 'react-router';
import DatePicker from 'react-datepicker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import 'rc-time-picker/assets/index.css';

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
			date: moment(),
			time: moment(),
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

	handleDateChange = (newDate) => {
		this.setState({
			date: newDate
		});
	}

	handleTimeChange = (newTime) => {
		this.setState({
			time: newTime
		});
	}


	render() {
		//console.log('length: ' + this.props.length);
		if(this.state.submit === true)
			return <Redirect to='/adminLectures' />

		return (
			<div>
				<LectureBorder />
			</div>
			<div className="flex flex-column justify-center items-center">
				<form onSubmit={this.handleSubmit}>
				<br/>Name of Lecture:<br/>
					<input type="text" name="lecture" value={this.state.lecture} required onChange={this.handleChange}/>
					<br/>Name of Course:<br/>
					<input type="text" name="course" value={this.state.course} required onChange={this.handleChange} />
					<br/>Link to Lecture Video(must be valid youtube url):<br/>
					<input type="text" name="videolink" size="35" value={this.state.videolink} required pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" onChange={this.handleChange} />
					<br/>Description of Lecture:<br/>
					<textarea name="description" cols="90" rows="5" value={this.state.description} required="required" onChange={this.handleChange} ></textarea>
					<br/>Date to Make Available:<br/>
					<div>
						<DatePicker selected={this.state.date} onChange={this.handleDateChange} dateFormat="LL" />
					</div>
					<br/>Time to Make Available:<br/>
					<div>
						<TimePicker value={this.state.time} onChange={this.handleTimeChange} showSecond={false} allowEmpty={false} format="h:mm a" use12Hours />
					</div>
					<br/>
					<br/>
					<div className="flex flex-column justify-center items-center">
						<input type="submit" className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba" value="Submit"/>
					</div>
				</form>
			</div>
		);
	}
}

export default LectureUpload;
