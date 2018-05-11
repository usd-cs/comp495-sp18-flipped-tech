import React from 'react';
import AdminLectureBox from './AdminLectureBox';
import AdminBanner from './AdminBanner'
import LectureUpload from './LectureUpload'


const AdminLectureListPage = () => {
	return (
		<div>
			<AdminBanner />
			<h1>Video Lecture Upload</h1>
			<LectureUpload />
		</div>
	);
}

export default AdminLectureListPage;