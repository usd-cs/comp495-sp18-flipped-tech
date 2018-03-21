import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import HomeContent from './HomeContent';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Banner />
		<HomeContent />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
