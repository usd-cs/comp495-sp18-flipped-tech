import React, { Component } from 'react';
import LectureList from './LectureList';


var lectureList = [
  {number: "1", title: "how to do this"},
  {number: "2", title: "computer science"},
  {number: "3", title: "taylor coury"},
  {number: "4", title: "computer systems intro"},
]

class LectureBox extends Component {
  render() {
    return(
      <div>
        <h1>COMP280 Lectures</h1>
        <LectureList lists = {lectureList}></LectureList>
      </div>
    );
  }
}

export default LectureBox;
