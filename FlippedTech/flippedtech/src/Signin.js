import React from 'react'
import { NavLink } from 'react-router-dom'

const Signin = (props) => {
	return (
		<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			{/*Main content of the Signin Component*/}
			<main className="pa4 black-80 ba bg-moon-gray"> 
				{/*Signin Form*/}
				<form method='post'className="measure center">
					<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						{/*Username Entry*/}
					  <div className="mt3">
					    <label className="db fw6 lh-copy f6" htmlFor="email-address">Username</label>
					    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
					  </div>
						{/*Password Entry*/}
					  <div className="mv3">
					    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
					  </div>
					</fieldset>
					<div className="">
						<NavLink to='/home' className='no-underline b ph3 pv2 input-reset ba b--black bg-silver grow pointer f6 dib'>Signin</NavLink>
					</div>
				</form>
			</main>
		</article>
	);
}

export default Signin;