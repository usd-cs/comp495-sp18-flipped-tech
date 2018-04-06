import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './Banner';
import SigninPage from './SigninPage'
import HomePage from './HomePage'
//import HomeContent from './HomeContent';
import LecturePage from './LecturePage'
import BookmarksPage from './BookmarksPage'
import CalendarPage from './CalendarPage'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//import App from './App';


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={SigninPage} />
			<Route exact path='/home' component={HomePage}/>
			<Route exact path='/lectures' component={LecturePage}/>
			<Route exact path='/bookmarks' component={BookmarksPage}/>
			<Route exact path='/calendar' component={CalendarPage}/>
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
