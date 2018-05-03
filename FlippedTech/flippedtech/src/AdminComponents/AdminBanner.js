import React from 'react';
import { NavLink} from 'react-router-dom'

const AdminBanner = (props) => {
	return (
		<div>
			<div className='dib w-100 bg-blue'>
				<div className='tr'>
					<NavLink to='/' className='no-underline b ph3 pv2 input-reset ba b--black bg-light-blue grow pointer f6 dib'>Sign out</NavLink>
				</div>
				<h1 className='f1 tc w-100'>Flipped Tech</h1>
			</div>

			
			<div className='dib w-100 bg-light-blue dib'>
				<div className='flex flex-wrap'>
					<NavLink to='/adminHome' className='ph3 link black hover-bg-pink bg-animate'>Home</NavLink>
					<NavLink to='/adminLectures' className='ph3 link black hover-bg-pink bg-animate'>Lectures</NavLink>
					<NavLink to='/adminAssignments' className='ph3 link black hover-bg-pink bg-animate'>Assignments</NavLink>
				</div>
			</div>
		</div>
	);
}

export default AdminBanner;