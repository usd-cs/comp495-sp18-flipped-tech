import React from 'react';
import AdminLectureBox from './AdminLectureBox';
import AdminBanner from './AdminBanner'
import LectureUpload from './LectureUpload'
import { NavLink } from 'react-router-dom'


const AdminLectureListPage = () => {
	return (
		<div>
			<AdminBanner />
			<AdminLectureBox />
			<NavLink to='/lectureUploadPage'
				className='ma3 no-underline b ph3 pv2 input-reset ba b--black bg-silver grow pointer f6 dib'>
				Add Lecture
			</NavLink>
		</div>
	);
}

export default AdminLectureListPage;