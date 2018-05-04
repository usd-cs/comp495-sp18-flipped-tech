import React, { Component } from 'react';
import Lecture from './Lecture';

class LectureList extends Component {

  render(props){
    //makes array usable
    var lectureNodes = this.props.lists.map(function(lecture){
      return(
        <Lecture lectureNumber = {lecture.number} lectureTitle = {lecture.title}>
        </Lecture>
      );
    })
    return(
      <div>
        {lectureNodes}
      </div>
    );
  }
}

export default LectureList;
