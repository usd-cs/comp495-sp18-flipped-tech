import React from 'react';
import './css/LectureUpload.css'

const LectureBorder = (props) => {
	return (
		<div className='container'>
				<img src={require('./images/chalkboard.jpg')} alt="LectureBorder" className='mw6'/>
				<h1 className='LectureBorder centered'>Video Lecture Upload Form</h1>
		</div>
/*
		<div className='container'>
			<img src={require('./images/Sticky_logo.png')} alt="Logo" className='measure w-50'/>
			<h1 className='measure centered Logo f1 tc '>Flipped Tech</h1>
		</div>*/
	);
}

export default LectureBorder;
