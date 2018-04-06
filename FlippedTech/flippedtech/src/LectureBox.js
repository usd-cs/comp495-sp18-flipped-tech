import React, { Component } from 'react';
import LectureList from './LectureList';

//dummy data
var lectureList = [
  {number: "1", title: "Limit Defintion of the Derivative"},
  {number: "2", title: "Derivatives 1.0: The Power Rule"},
  {number: "3", title: "Derivatives 2.0: The Chain Rule"},
  {number: "4", title: "Derivative 3.0: Trig, Exponential, and Logs"},
]

//renders list of lectures
class LectureBox extends Component {
  render() {
    return(
      <div>
        <h1>MATH150 Lectures</h1>
        <LectureList lists = {lectureList}></LectureList>
      </div>
    );
  }
}

export default LectureBox;
