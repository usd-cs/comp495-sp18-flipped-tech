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

  componentDidMount = () => {
    console.log('did mounting');
    fetch("/lectureList")
      .then(response => {
        return response.text();
      })
      .then(data => {
        console.log('data: ' + data);
        const dataList = JSON.parse(data);
        console.log('datalist: ' + dataList);
        const userList = dataList.map( (userObj) => {
          console.log('id: ' + userObj.id);
          console.log("title: " + userObj.title);
          return {id: userObj.id, title: userObj.title}
        });
        console.log('userList: ' + userList);
        this.setState({lecturelist: userList});
      })
      .catch(error => console.log(error))
  }

  componentWillMount = () => {
    console.log('will mount');
  }

  componentDidUpdate = () => {
    console.log('updated');
  }

  render() {
    return(
      <div>
        <h1 className='ma3 underline'>Lectures</h1>
        <div>
          {this.state.lecturelist.map(function(lecture) {
            return (
              <Lecture id={lecture.id} title={lecture.title}>
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
