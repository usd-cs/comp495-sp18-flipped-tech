import React, {Component} from 'react';

//http request is not working at the moment
//var url = 'https://www.googleapis.com/youtube/v3/search?key={AIzaSyBRDl7uhaoKWR5xPHAtdDiU9ROcOj7EGcY}&channelId={UCXgGY0wkgOzynnHvSEVmE3A}&part=snippet,id&order=date&maxResults=5'

//Just a base video embed in case I cannot figure out API
class Youtube extends Component{
	render(){
		console.log(url);
		return(
			<div>
			<button>Get Youtube Videos</button>
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/A71aqufiNtQ" frameborder="0"
						 allow="autoplay; encrypted-media" allowfullscreen>
					</iframe>
				</div>
			</div>
		);
	}
}

export default Youtube;



