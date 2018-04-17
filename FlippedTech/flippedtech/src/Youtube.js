import React from 'react';
import YouTube from 'react-youtube';

class Youtube extends React.Component {
	render() {
		const opts = {
			height: '390',
			width: '640',
			playerVars: { // https://developers.google.com/youtube/player_parameters
			autoplay: 0
		}
	};

	return (
		<YouTube
			videoId="A71aqufiNtQ" //Will import this from teacher's form
			opts={opts}
			onReady={this._onReady}
			onPlay={this._onPlay}
		/>
		);
	}

	_onReady(event) {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	}

	_onPlay(event){
		//acces to the 
	
	}
}
export default Youtube;



