import React, { Component } from 'react';
import Banner from './Banner'
import HomeContent from './HomeContent'

const HomePage = (props) => {
	return (
		<div>
			<Banner />
			<HomeContent/>
		</div>
	);
}

export default HomePage;