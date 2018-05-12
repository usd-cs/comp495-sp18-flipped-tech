import React, { Component } from 'react';
import LectureList from './LectureList';
import Lecture from './Lecture';

//renders list of lectures
class LectureBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: 0,
      title: '',
      link: '',
      lecturelist: []
    }
  };

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
  };

  lectureClicked = (id) => {
    console.log('clicked')
    fetch('/lecturelist/'+id) 
      .then(response => response.text())
      .then(data => {
        console.log('data: ' + data);
        const dataList = JSON.parse(data)
        console.log('dataList: ' + dataList);
        const title = dataList.title;
        const link = dataList.youtubelink
        this.setState({title: title, link: link});
        console.log(this.state.title + ' ' + this.state.link);
    })
    .catch(error => console.log(error))
  };

  render() {
    const id = this.state.id;

    const element = (id === 0 ?
          <div>
            
          </div> 
            :
          <div>
            <h1>made it</h1>
          </div>)

    return(
      <div>
        <h1 className='ma3 underline'>Lectures</h1>
            <div>
              {this.state.lecturelist.map((lecture) => {
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

export default LectureBox;
