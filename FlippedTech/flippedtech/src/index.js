import React from 'react';
import ReactDOM from 'react-dom';
//import Banner from './Banner';
import SigninPage from './SigninPage'
import HomePage from './HomePage'
//import HomeContent from './HomeContent';
import LecturePage from './LecturePage'
import BookmarksPage from './BookmarksPage'
import CalendarPage from './CalendarPage'
import TestLecturePage from './TestLecturePage'
//Admin components
import AdminHomePage from './AdminComponents/AdminHomePage';
import AdminLectureListPage from './AdminComponents/AdminLectureListPage';
import AdminLectureUploadPage from './AdminComponents/AdminLectureUploadPage'

import { BrowserRouter, Route, Switch} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={SigninPage} />
			<Route exact path='/home' component={HomePage}/>
			<Route exact path='/lectures' component={LecturePage}/>
			<Route exact path='/bookmarks' component={BookmarksPage}/>
			<Route exact path='/calendar' component={CalendarPage}/>
			<Route exact path='/testLecture' component={TestLecturePage}/>

			<Route exact path='/adminHome' component={AdminHomePage}/>
			<Route exact path='/adminLectures' component={AdminLectureListPage}/>
			<Route exact path='/lectureUploadPage' component={AdminLectureUploadPage}/>

			<Route path='/lectureList/' component={TestLecturePage}/>
			<Route path='/adminlectureList/' component={TestLecturePage}/>
		</Switch>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
