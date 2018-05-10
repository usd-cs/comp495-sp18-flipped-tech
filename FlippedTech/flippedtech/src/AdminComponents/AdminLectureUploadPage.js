import React from 'react';
import AdminLectureBox from './AdminLectureBox';
import AdminBanner from './AdminBanner'
import LectureUpload from './LectureUpload'


const AdminLectureListPage = () => {
	return (
		<div>
			<AdminBanner />
			<LectureUpload />
		</div>
	);
}

export default AdminLectureListPage;