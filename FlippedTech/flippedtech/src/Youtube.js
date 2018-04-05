import React, {Component} from 'react';

class Youtube extends Component{
	render(){
		return(
			//Just a base video embed in case I cannot figure out API
			<div>
				<iframe width="560" height="315" src="https://www.youtube.com/embed/A71aqufiNtQ" frameBorder="0"
					 allow="autoplay; encrypted-media" allowFullScreen>
				</iframe>
			</div>
		);
	}
}

export default Youtube;



