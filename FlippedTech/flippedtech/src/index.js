import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import HomeContent from './HomeContent';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';

var commentData = [
  { 
    author:"Shawn Spencer", 
    text:"I've heard it both ways"
  },
  { 
    author:"Burton Guster", 
    text:"You hear about Pluto? That's messed up" 
  }
];

ReactDOM.render(
	<div>
		<Banner />
		<CommentBox data = {commentData}/>
	</div>
	, document.getElementById('root'));
registerServiceWorker();
