import React, { Component } from 'react';
import Lecture from './AdminLecture';

//renders list of lectures
class AdminLectureBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      lecturelist: []
    }
  }

  render() {
    const lectures = this.props.lecturelist
    console.log('lectures: ' + lectures);
    return(
      <div>
        <h1 className='ma3 underline'>Lectures</h1>
        <div>
          {lectures.map(function(lecture) {
            const index = lectures.findIndex(el => el.id == lecture.id) + 1;

            return (
              <Lecture id={index} title={lecture.title}>
              </Lecture>
            );
            })
          } 
        </div>  
      </div>
    );
  }
}

export default AdminLectureBox;
