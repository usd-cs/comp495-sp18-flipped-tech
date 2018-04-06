import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const Lecture = (props) => {
  return (
    <div>
      <NavLink to='/testLecture' className=''>
        Lecture #{props.lectureNumber}
      </NavLink>
      <h3>
        Title: {props.lectureTitle}
      </h3>
    </div>
  );
}

export default Lecture;
