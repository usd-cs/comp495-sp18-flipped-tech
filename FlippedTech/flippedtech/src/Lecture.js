import React from 'react';
import { NavLink } from 'react-router-dom'

const Lecture = (props) => {
  return (
    <div>
      <span>
        <h1 className='dib ma3'>{props.id}.</h1>
          <NavLink to={'/lectureList/' + props.id}
                className='no-underline f3 lh-copy'
            >
                 {props.title}
          </NavLink>
        </span>
    </div>
    );
}

export default Lecture;
