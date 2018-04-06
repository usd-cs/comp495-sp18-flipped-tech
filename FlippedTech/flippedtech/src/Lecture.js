import React, { Component } from 'react';

const Lecture = (props) => {
  return (
    <div>
      <a href="htttps://www.google.com">
        Lecture #{props.lectureNumber}
      </a>
      <h3>
        Title: {props.lectureTitle}
      </h3>
    </div>
  );
}

export default Lecture;
