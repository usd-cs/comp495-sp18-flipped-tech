import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import SigninPage from './SigninPage'
import Youtube from './Youtube'
import HomeContent from './HomeContent';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

import App from './App';


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={SigninPage} />
			<Route exact path='/home' component={Youtube}/>
		</Switch>
	</BrowserRouter>

	, document.getElementById('root'));
registerServiceWorker();
