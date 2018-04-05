import React, {Component} from 'react';

//URL to be used for the actual request
var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&videoCaption=closedCaption&key=AIzaSyBRDl7uhaoKWR5xPHAtdDiU9ROcOj7EGcY'

class Youtube extends Component{
	constructor(props){
		super(props);

		this.state = {
			resultyt: []
		};
		this.clicked = this.clicked.bind(this);
	}

	//Button click on page that actually runs the requesti
	//Returns info as a Json object
	clicked(){
		fetch(url)
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
			
			//Just a base video embed in case I cannot figure out API
			<div>
			<iframe width="560" height="315" src="https://www.youtube.com/embed/A71aqufiNtQ" frameBorder="0"
				 allow="autoplay; encrypted-media" allowFullScreen>
			</iframe>
				<div>
					<button onClick={this.clicked}>Generate Json Obj</button>
				</div>
			</div>
		);
	}
}

export default Youtube;



