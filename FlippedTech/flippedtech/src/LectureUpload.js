import React, {Component} from 'react';
import LectureBorder from './LectureBorder'


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
		console.log('changed');
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log('Submitted');
	}

	render() {
		return (
			<div>
				<div>
					<LectureBorder />
				</div>
				<div className="flex flex-column justify-center items-center">
					<form className="w-80" onsubmit={this.handleSubmit} method="POST">
					<br/>
						Name of Lecture:<br/>
						<input type="text" name="lecture" value={this.state.lecture} required onChange={this.handleChange}/><br/>
						Name of Course:<br/>
							<input type="text" name="course" value={this.state.course} required onChange={this.handleChange} /><br/>
						Link to Lecture Video(must be valid youtube url):<br/>
							<input type="url" name="videolink" size="35" value={this.state.videolink} required pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" onChange={this.handleChange} /><br/>
						Description of Lecture:<br/>
							<textarea name="describtion" cols="105" rows="3" value={this.state.describtion} required="required" onChange={this.handleChange} ></textarea><br/>
						Date to Make Available(MM/DD/YYYY):<br/>
							<input type="text" name="date" value={this.state.date} required pattern="^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$"onChange={this.handleChange} /><br/>
						Time to Make Available(##:##):<br/>
							<input type="text" name="time" value={this.state.time} required pattern="^(1[0-2]|0?[1-9]):[0-5][0-9]$"onChange={this.handleChange} /><br/>
							<select name="AMorPM" value={this.state.AMorPM} onChange={this.handleChange}>
								<option value="AM">AM</option>
								<option value="PM">PM</option>
							</select>
							<div className="flex flex-column justify-center items-center">
							<input type="submit" className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba" value="Submit"/>
							</div>
					</form>
				</div>
			</div>

		);
	}
}

export default LectureUpload;
