import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import SigninPage from './SigninPage'
import StudentPerformanceTable from './StudentPerformanceTable'
import ClassPerformanceTable from './ClassPerformanceTable'
import QuestionPerformanceTable from './QuestionPerformanceTable'
import QuizAnalytics from './QuizAnalytics'
import HomeContent from './HomeContent';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={SigninPage} />
			<Route exact path='/home' component={QuizAnalytics}/>
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
