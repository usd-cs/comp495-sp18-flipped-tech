import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import HomeContent from './HomeContent';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import LectureBox from './LectureBox';

ReactDOM.render(
	<div>
		<Banner />
		<LectureBox />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
