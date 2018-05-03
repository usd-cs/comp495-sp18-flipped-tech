import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import AdminHomePage from './AdminComponents/AdminHomePage'
import Signin from './Signin'
import Logo from './Logo'

//SigninPage element that will display all the components of a signin page
class SigninPage extends Component{
	/*
	onSubmit = (name) => {
		<Route exact path='/' render={() => (
			name === 'admin' ? <Redirect to='/adminHomePage' /> : <Redirect to='/' />
		)}
		/>
	}
*/
	render(){
		return(
			<div>
				<Logo />
				<Signin/>
			</div>
		)
	};
}

export default SigninPage;