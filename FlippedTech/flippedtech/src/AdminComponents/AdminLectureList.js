import React, { Component } from 'react';
import Lecture from './AdminLecture';


class AdminLectureList extends Component {
  render(props){
    //console.log('IN LIST Component');
    //console.log(this.props.lists);
    {/*}
    var lectureNodes = this.props.lists.map(function(lecture) {
      return (
        <Lecture id={lecture.id} title={lecture.title}>
        </Lecture>
      );
    })
  */}
    return(
      //outputs the parsed data
      <div className='b--solid tc'>
        <h2>LectureList</h2>
      </div>
    );
  }
}


export default AdminLectureList;