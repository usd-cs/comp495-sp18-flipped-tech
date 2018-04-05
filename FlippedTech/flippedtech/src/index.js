import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import HomeContent from './HomeContent';
import 'tachyons';
import CommentBox from './CommentBox';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './App';


ReactDOM.render(
	<div>
		<Banner />
		<CommentBox />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
