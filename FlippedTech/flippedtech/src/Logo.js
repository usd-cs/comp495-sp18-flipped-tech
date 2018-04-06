import React, { Component } from 'react';
import './css/SigninPage.css'

const Logo = (props) => {
	return (
		<div className='container'>
				<img src={require('./images/Sticky_logo.png')} alt="Logo" className='mw5'/>
				<h1 className='Logo centered'>Flipped Tech</h1>
		</div>
/*
		<div className='container'>
			<img src={require('./images/Sticky_logo.png')} alt="Logo" className='measure w-50'/>
			<h1 className='measure centered Logo f1 tc '>Flipped Tech</h1>
		</div>*/
	);
}

export default Logo;