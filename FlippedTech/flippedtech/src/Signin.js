import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Signin extends Component{
	constructor(props) {
    	super(props);
    	this.state = {value: ''};
  	}

	handleChange = (event) => {
	    this.setState({value: event.target.value});
	};

/*
	submitHandler = (e) => {
		e.preventDefault();
		alert('submit event val: ' + this.state.value);
		this.props.onSubmit(this.state.value);
	};
*/
	//INside username input tag
	//{/*name="email-address"  id="email-address"*/}

	render() {
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				{/*Main content of the Signin Component*/}
				<main className="pa4 black-80 ba bg-moon-gray"> 
					{/*Signin Form*/}
					<form className="measure center" >
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
							{/*Username Entry*/}
						  <div className="mt3">
						    <label className="db fw6 lh-copy f6" >Username</label>
						    <input value={this.state.value} onChange={this.handleChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" />
						  </div>
							{/*Password Entry*/}
						  <div className="mv3">
						    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
						    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
						  </div>
						</fieldset>
						<div className="">
							<NavLink to={this.state.value === 'admin' ? '/adminHome' : '/home'} className='no-underline b ph3 pv2 input-reset ba b--black bg-silver grow pointer f6 dib'>Signin</NavLink>
						</div>
					</form>
				</main>
			</article>
		);
	}
}

export default Signin;