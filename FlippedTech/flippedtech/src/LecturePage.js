import React, {Component} from 'react';
import Youtube from './YoutubeVideo';
import Banner from './Banner'
import CommentBox from './components/Comments/CommentBox';

class Lecture extends Component{


  constructor(props){
    super(props);
    this.state = {
      title: '',
      link: '',
      description: ''
    }
  };

  getData = async () => {
    fetch('/lecturelist/'+this.props.match.params.id) 
      .then(response => response.text())
      .then(data => {
        console.log('data: ' + data);
        const dataList = JSON.parse(data)[0]
        console.log('dataList: ' + dataList);
        console.log(Object.getOwnPropertyNames(dataList));
        const title = dataList.title;
        const link = dataList.youtubelink
        const description = dataList.description
        console.log('title: ' + title);
        console.log('link: ' + link);
        console.log('description: ' + description);
        this.setState({title: title, link: link, description: description});
        console.log(this.state.title + ' ' + this.state.link);
    })
    .catch(error => console.log(error))
  }
  componentDidMount = () => {
    //alert('did mount');
    console.log('in will mount');
    this.getData()
  };

  render(){
    console.log('in render');
    console.log('link: ' + this.state.youtubelink)
    return (
      <div>
        <Banner/>
        <h1 className='tc'>{this.state.title}</h1>
        <Youtube id="F9GujgK0y2M" />
        <h3>{this.state.description}</h3>
        <CommentBox />
      </div>
    );
  }
}

export default Lecture;
