import React, { Component } from 'react';

const Lecture = (props) => {
  return (
    <div>
      <h2>
        Lecture #{props.lectureNumber}
      </h2>
      <h3>
        Title: {props.lectureTitle}
      </h3>
    </div>
  );
}

export default Lecture;
