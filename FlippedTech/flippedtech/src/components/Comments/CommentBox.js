import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import 'tachyons';
import './cssComments/myBox.css'

class CommentBox extends Component {
  //constructor applies necessary data to the component
	constructor(props){
		super(props)
    //binds comment list to state and will continually update
		this.state = {
			commentlist: []
		}
    //bind to handler allows handler to work on comments
    //this.handler = this.handler.bind(this);
	}

  componentDidMount = () => {
    fetch("/testLecture")
      .then(response => {
        return response.text()
      })
      //.then(text => console.log('text: ' + text))
      .then(data => {
        //console.log("data: " + data);
        //this.setState({commentlist: []});
        const dataList = JSON.parse(data);
        console.log('datalist: ' + dataList);
        const userList = dataList.map( (userObj) => {
          const author = userObj.username;
          const text = userObj.comment
          console.log('author: ' + author + '  text: ' + text);
          return {author: author, text: text}
        });
        //console.log('userList: ' + userList[0].author);
        console.log('length: '+ userList.length)
        //console.log("comment: " + user.comment);
        //const ar = [{author: user.username, text: user.comment}];
        //ar.push("jadjlksajdlkasjd");
        //console.log('ar: ' + ar.length);
        this.setState({commentlist: userList});
        //console.log("YEAHHH " + this.state.commentlist);
      })
      .catch(error => console.log(error))
  }

  addComment = (commentText) => {
    fetch('/newComment', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify({id: ++this.state.commentlist.length, author: "Erick Perez", text:commentText})
    })
    .then(response => {
      return response.text()
    })
    .then(data => {
      const dataList = JSON.parse(data);
      console.log('datalist: ' + dataList);
      const userList = dataList.map( (userObj) => {
        const author = userObj.username;
        const text = userObj.comment
        console.log('author: ' + author + '  text: ' + text);
        return {author: author, text: text}
      });
      console.log('length: '+ userList.length)
      this.setState({commentlist: userList});
    })
  }

	render() {
 		return(
			 			<div className='b--solid tc container'>
			 				<h1>Comment Box</h1>
							<div class="myBox center">
			 				<CommentList lists = {this.state.commentlist}></CommentList>
			 				<h1></h1>
							</div>
			 				<CommentForm handler = {this.addComment} />
			 			</div>
   	);
	}
}

export default CommentBox;
