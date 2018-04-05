import React, {Component} from 'react';

{/*Lecture Upload Page for Admins*/}

const LectureUpload = (props) => {
return ( 
<div>
	<h1> Video Lecture Upload Form </h1>
	<form action="/newLecture" method="POST">
		Name of Lecture:<br/>
			<input type="text" name="lecture"/><br/>
		Name of Course:<br/>
			<input type="text" name="course"/><br/>
		Link to Lecture Video(<em>Make sure to use the embedded link</em>):<br/>
			<input type="text" name="videolink" size="35"/><br/>
		Describtion of Lecture:<br/>
			<textarea name="describtion" cols="90" rows="5" required="required"></textarea><br/>
		Date to Make Available(MM/DD/YYYY):<br/>
			<input type="text" name="date"/><br/>
		Time to Make Available(##:##):<br/>
			<input type="text" name="time"/><br/>
			<input type="radio" name="AMorPM" value="AM" checked/> AM<br/>
			<input type="radio" name="AMorPM" value="PM"/> PM<br/>
		<br/>
			<input type="submit" value="Submit"/>
	</form>
</div>
);
}

export default LectureUpload;
