import React from 'react';
import YouTube from 'react-youtube';

const videoId = 'F9GujgK0y2M';//Need to import the id code from the LectureUpload form

class YoutubeVideo extends React.Component {
	//Constructor for the youtube video player
	constructor(props) {
		super(props);

		this.state = {
			videoId: videoId,
			player: null,
			played: false,
		};

		this.onReady = this.onReady.bind(this);
		this.onPlayVideo = this.onPlayVideo.bind(this);
	}

	//Saves the ready state of the player
	onReady(event) {
		//console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
		this.setState({player: event.target});
	}
	
	//Function for playing the video, keeps track of whether a student has watched lecture video or not
	onPlayVideo() {
		this.state.player.playVideo();
		if(this.state.played == false){
			this.state.played == true;
		}
	}

	parseId = () => {
		const link = this.props.link;
		//console.log('link: ' + link)
    	const idIndex = link.indexOf("v=")
    	//console.log('idIndex: ' + idIndex)
    	const id = link.substring(idIndex+2);
    	console.log('id:' + id)
    	return id;
	}

	render() {
		const id = this.parseId()
		return (
			<div className='tc'>
				<YouTube videoId={id} onReady={this.onReady} />
			{/*	<button onClick={this.onPlayVideo}>Play</button> */}
			</div>
		);
	}
}

export default YoutubeVideo;
