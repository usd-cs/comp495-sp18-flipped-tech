import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import QuestionForm from './QuestionForm';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Banner />
		<QuestionForm />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
