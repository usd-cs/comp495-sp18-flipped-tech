import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import LectureUpload from './LectureUpload';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Banner />
		<LectureUpload />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
