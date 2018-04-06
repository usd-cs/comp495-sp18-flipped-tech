import React from 'react';

const HomeContent = (props) => {
	return (
		<div class="mw9 center">	  
		    <div class="fl w-100 w-third-ns pa1 pv4">
		      	<b>Notifications:</b>
		      	<ul>
		      		<li>COMP 495
		      			<ul>
		      				<li>External Feedback Needed for Sprint #2</li>
		      				<li>Demo Grocery App</li>
		      			</ul>
		      		</li>
		      		<li>COMP 310
		      			<ul>
		      				<li>Midterm on Tues (3/13)</li>
		      			</ul>
		      		</li>
		      	</ul>
		    </div>
		    <div class="fl w-100 w-third-ns pa1 pv4">
		      <b>Courses:</b>
		      	<ul>
		      		<li>COMP 495: 495 Senior Project</li>
		      		<li>COMP 310: Operating Systems</li>
		      	</ul>
		    </div>
		    <div class="fl w-100 w-third-ns pa1 pv4">
		      <b>Upcoming Assignments:</b>
		      	<ul>
		      		<li>COMP 495
		      			<ul>
		      				<li>Sprint #2 Due Fri (3/9)</li>
		      				<li>Wireframes Due Fri (3/9)</li>
		      			</ul>
		      		</li>
		      		<li>COMP 310
		      			<ul>
		      				<li>Lab 4 Due Fri (3/9)</li>
		      			</ul>
		      		</li>
		      	</ul>
		    </div> 
		</div>
	);
}

export default HomeContent;
