import React, {Component} from 'react';

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
			AMorPM: ''
		}
	}

	submitLecture = () => {
		console.log('ahhh');
		fetch('/newLecture', {
	      headers: {'Content-Type': 'application/json'},
	      method: 'post',
	      body: JSON.stringify({title:this.state.lecture})
	    })
	    .then(response => {
	      return response.text()
	    })
	    .then(data => {
	      fetch('/adminLectureListPage');
	    })
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		console.log('changed');
	};

	empty = () => {
		if(this.state.lecture === '')
			return false;
		else if(this.state.course === '')
			return false;
		else if(this.state.videolink === '')
			return false;
		else if(this.state.description === '')
			return false;
		else if(this.state.date === '')
			return false;
		else if(this.state.time === '')
			return false;
		else if(this.state.AMorPM === '')
			return false;
		else 
			return true;
	};

	handleSubmit = (event) => {
		alert('in handle submit');
		event.preventDefault();
	    if(!this.empty()){
	      this.submitLecture();
	    }
	    else
	      alert('Empty sections are not allowed');
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
		        <br/>Name of Lecture:<br/>
				<input type="text" name="lecture" value={this.state.lecture} required onChange={this.handleChange}/>
				<br/>Name of Course:<br/>
				<input type="text" name="course" value={this.state.course} required onChange={this.handleChange} />
				<br/>Link to Lecture Video(must be valid youtube url):<br/>
				<input type="url" name="videolink" size="35" value={this.state.videolink} required pattern="http://www\.youtube\.com\/(.+)|https://www\.youtube\.com\/(.+)" onChange={this.handleChange} />
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
