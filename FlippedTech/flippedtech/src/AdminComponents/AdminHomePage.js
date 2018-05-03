import React from 'react';
import AdminBanner from './AdminBanner'
import AdminHomeContent from './AdminHomeContent'

const AdminHomePage = (props) => {
	return (
		<div>
			<AdminBanner/>
			<AdminHomeContent/>	
		</div>
	);
}

export default AdminHomePage;