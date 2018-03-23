import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import HomeContent from './HomeContent';
import CommentBox from './Comments';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<CommentBox />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
