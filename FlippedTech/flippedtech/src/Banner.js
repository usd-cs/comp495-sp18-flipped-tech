import React, { Component } from 'react';


const Banner = (props) => {
	return (
		<div>
			<div className='dib w-100 bg-silver'>
				<div className='tr'>
					<a href='' className='link black'>Sign out</a>
				</div>
				<h1 className='f1 tc w-100'>Flipped Tech</h1>
			</div>

			<div className='dib w-100 bg-blue dib'>
				<div className='flex flex-wrap'>
					<a href='' className='ph3 link black hover-bg-pink bg-animate'>Home</a>
					<a href='' className='ph3 link black hover-bg-pink bg-animate'>Courses/Lectures</a>
					<a href='' className='ph3 link black hover-bg-pink bg-animate'>Bookmarks</a>
					<a href='' className='ph3 link black hover-bg-pink bg-animate'>Calendar</a>
				</div>
			</div>
		</div>
	);
}

export default Banner;