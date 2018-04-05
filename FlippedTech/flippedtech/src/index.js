import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import QuestionForm from './QuestionForm';
import QuestionBox from './QuestionBox';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Banner />
		<QuestionBox />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
