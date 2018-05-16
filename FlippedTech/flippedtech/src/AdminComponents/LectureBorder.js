import React from 'react';
import './LectureUpload.css'

const LectureBorder = (props) => {
	return (
		<div className='container'>
				<img src={require('./images/chalkboard.jpg')} alt="LectureBorder" className='mw6'/>
				<h1 className='LectureBorder centered'>Video Lecture Upload Form</h1>
		</div>
  );
}

export default LectureBorder;
