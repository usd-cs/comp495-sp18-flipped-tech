import React, { Component } from 'react';
import AdminLectureList from './AdminLectureListPage';

//renders list of lectures
class AdminLectureBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      lecturelist: []
    }
  }

  componentDidMount = () => {
    //alert('mounting');
    fetch("/adminLectureList")
      .then(response => {
        const ret = response.text();
        console.log('response:' + ret);
        return ret
      })
      .then(data => {
        console.log('data: ' + data);
        const dataList = JSON.parse(data);
        console.log('datalist: ' + dataList);
        const userList = dataList.map( (userObj) => {
          return {id: userObj.id, title: userObj.title}
        });
        //console.log('userList: ' + userList);
        this.setState({lecturelist: userList});
      })
      .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <h1>Lectures</h1>
        {/*<AdminLectureList lists={this.state.lectureList}></AdminLectureList>*/}
      </div>
    );
  }
}

export default AdminLectureBox;
