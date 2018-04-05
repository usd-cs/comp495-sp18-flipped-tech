import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import Youtube from './Youtube';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Banner />
		<Youtube />
	</div>
	, document.getElementById('root'));
registerServiceWorker();
