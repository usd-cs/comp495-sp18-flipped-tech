import React from 'react';
import YouTube from 'react-youtube';

const videoIdA = 'A71aqufiNtQ';

class Youtube extends React.Component {

	//Constructor for the youtube video player
	constructor(props) {
		super(props);

		this.state = {
			videoId: videoIdA,
			player: null,
			played: false,
		};

		this.onReady = this.onReady.bind(this);
		this.onPlayVideo = this.onPlayVideo.bind(this);
		}
		//Saves the ready state of the player
		onReady(event) {
			console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
			this.setState({
				player: event.target,
			});
		}
		//Function for playing the video, keeps track of whether a student has watched lecture video or not
		onPlayVideo() {
			this.state.player.playVideo();
			if(this.state.played == false){
				this.state.played == true;
			}
		}

		render() {
		return (
			<div>
				<YouTube videoId={this.state.videoId} onReady={this.onReady} />
				<button onClick={this.onPlayVideo}>Play</button>
			</div>
		);
	}
}

export default Youtube;



