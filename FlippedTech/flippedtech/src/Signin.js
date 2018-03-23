import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import HomePage from './HomePage'

const Signin = (props) => {
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80 ba bg-moon-gray">
			  <form method='post'className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Username</label>
			        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			      {/*<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>*/}
			    </fieldset>
			    <div className="">
			    	<NavLink to='/home' className='no-underline b ph3 pv2 input-reset ba b--black bg-silver grow pointer f6 dib'>Signin</NavLink>
			      	{/*<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
			    	*/}
			    </div>
			    {/*}
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim black db">Sign up</a>
			      <a href="#0" className="f6 link dim black db">Forgot your password?</a>
			    </div>
				*/}
			  </form>
			</main>
		</article>
	);
}

export default Signin;