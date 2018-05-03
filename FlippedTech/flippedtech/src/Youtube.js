import React, {Component} from 'react';

class Youtube extends Component{
	render(){
		return(
			//Just a base video embed in case I cannot figure out API
			<div className=' tc'>
				<h1>Intro to React</h1>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/A71aqufiNtQ" frameBorder="0"
					 allow="autoplay; encrypted-media" allowFullScreen>
				</iframe>
				<p><strong>Summary:</strong>React is a JavaScript library for building user interfaces to improve speed, simplicity, and scalability.</p>
			</div>

		);
	}
}

export default Youtube;



