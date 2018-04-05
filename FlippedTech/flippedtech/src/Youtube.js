import React, {Component} from 'react';

//http request is not working at the moment
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&videoCaption=closedCaption&key=AIzaSyBRDl7uhaoKWR5xPHAtdDiU9ROcOj7EGcY'

//Just a base video embed in case I cannot figure out API
class Youtube extends Component{

	click(){
		fetch('https://facebook.github.io/react-native/movies.json')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson)
				//return responseJson.movies;
			})
			.catch((error) => {
				console.error(error);
			});
	}
	render(){
		return(
			<div>
			<button>Get Youtube Videos</button>
				<div>
					<iframe width="560" height="315" src="https://www.youtube.com/embed/A71aqufiNtQ" frameBorder="0"
						 allow="autoplay; encrypted-media" allowFullScreen>
					</iframe>
				</div>
			</div>
		);
	}
}

export default Youtube;



