import React, {Component} from 'react';
import YoutubeVideo from '../YoutubeVideo';
import AdminBanner from './AdminBanner'
import CommentBox from '../components/Comments/CommentBox';

//Global to hold the youtube link of chosen lecture
//I think this is bad practice because this should be set within setState()
//but for some reason 'link' does not get set, but 'title' and 'description' does
//Printing out value of link before and after the call to setState prints the correct value, but printing after
//the callback closure function does not.
var ylink = ''

class AdminLecture extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      link: '',
      description: ''
    }
  };

  getData = () => {
    fetch('/lecturelist/'+this.props.match.params.id) 
      .then(response => response.text())
      .then(data => {
        //console.log('data: ' + data);
        const dataList = JSON.parse(data)[0]
        //console.log('dataList: ' + dataList);
        //console.log(Object.getOwnPropertyNames(dataList));
        const title = dataList.title;
        ylink = dataList.youtubelink;
        const link = String(dataList.youtubelink)
        const description = dataList.description
        //console.log('title: ' + title);
        //console.log('link: ' + link);
        //console.log('ylink: ' + ylink)
        //console.log('description: ' + description);
        this.setState({title: title, 
          link: link, 
          description: description},
          function() {
            console.log('IN CALLBACK');
            console.log('title: ' + this.state.title)
            console.log('description: ' + this.state.description)
            console.log('link: ' +this.state.youtubelink)
          }
        );
        //console.log(this.state.title + ' ' + this.state.link);
    })
    .catch(error => console.log(error))
  }
  componentDidMount = () => {
    //alert('did mount');
    //console.log('in did mount');
    this.getData()
  };

  render(){
    //console.log('in render');
    //console.log('title: ' + typeof(this.state.title))
    //console.log('description: ' + typeof(this.state.description))
    //console.log('link: ' + ylink)
    return (
      <div>
        <AdminBanner/>
        <h1 className='tc'>{this.state.title}</h1>
        <YoutubeVideo link={ylink} />
        <h3 className='tc'>{this.state.description}</h3>
        <CommentBox />
      </div>
    );
  }
}

export default AdminLecture;
