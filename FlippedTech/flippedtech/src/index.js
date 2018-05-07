import React from 'react';
import ReactDOM from 'react-dom';
//import Banner from './Banner';
import SigninPage from './SigninPage'
import HomePage from './HomePage'
//import HomeContent from './HomeContent';
import LecturePage from './LecturePage'
import LectureUpload from './LectureUpload'
import BookmarksPage from './BookmarksPage'
import CalendarPage from './CalendarPage'
import TestLecturePage from './TestLecturePage'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//import App from './App';


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={SigninPage} />
			<Route exact path='/home' component={LectureUpload}/>
			<Route exact path='/lectures' component={LecturePage}/>
			<Route exact path='/bookmarks' component={BookmarksPage}/>
			<Route exact path='/calendar' component={CalendarPage}/>
			<Route exact path='/testLecture' component={TestLecturePage}/>
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
