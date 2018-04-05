import React, { Component } from 'react';
import Signin from './Signin'
import Logo from './Logo'

//SigninPage element that will display all the components of a signin page
const SigninPage = (props) => {
	return (
		<div>
			<Logo />
			<Signin/>
		</div>
	);
}

export default SigninPage;