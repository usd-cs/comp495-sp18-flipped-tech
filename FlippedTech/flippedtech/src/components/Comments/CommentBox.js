import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import 'tachyons';


var newCommentList = [
  {id: 1, author: "Ethan Romney", text: "What are the benefits of using React over traditional Web Dev?"},
  {id: 2, author: "Satt Maiki", text: "Are you able to nest comments within one another?"}
];

class CommentBox extends Component {
  //constructor applies necessary data to the component
	constructor(props){
		super(props)
    //binds comment list to state and will continually update
		this.state = {
			commentlist: []
		}
    //bind to handler allows handler to work on comments
    this.handler = this.handler.bind(this);
    
	}

  componentDidMount = () => {
    fetch("/testLecture")
      .then(response => {
        return response.text()
      })
      //.then(text => console.log('text: ' + text))
      .then(data => {
        //console.log("data: " + data);
        const dataList = JSON.parse(data);
        const userList = dataList.map( (userObj) => {
          const author = userObj.username;
          const text = userObj.comment
          //console.log('author: ' + author + '  text: ' + text);
          return {author: author, text: text}
        });
        //console.log('userList: ' + userList[0].author);
        //console.log('length: '+ userList.length)
        //console.log("comment: " + user.comment);
        //const ar = [{author: user.username, text: user.comment}];
        //ar.push("jadjlksajdlkasjd");
        //console.log('ar: ' + ar.length);
        this.setState({commentlist: userList});
        //console.log("YEAHHH " + this.state.commentlist);
      })
      .catch(error => console.log(error))
      /*
    this.callAPI()
      .then(res => this.setState({ commentlist: res.express }))
      .catch(err => console.log(err));
      */
     
  }

  getComments = () => {

  }
  callAPI = async () => {
    const response = await fetch('/testLecture');
    const body = await response.json();

    if(response.status !== 200)
      throw Error(body.message);
    return body;
  };

  //handler adds comment to list but because it renders every update, the array fails to update
  //page reupdates so once backend is set up we're set
	handler(commentText) {
    const text = commentText;
    fetch('/newComment', {
      method: 'post',
      body: JSON.stringify({id: ++this.state.commentlist.length, author: "Erick Perez", text:text})
    })
    .then(response => response.text())
    .then(data => console.log(data))

    fetch("/testLecture")
      .then(response => {
        return response.text()
      })
      //.then(text => console.log('text: ' + text))
      .then(data => {
        //console.log("data: " + data);
        const dataList = JSON.parse(data);
        const userList = dataList.map( (userObj) => {
          const author = userObj.username;
          const text = userObj.comment
          //console.log('author: ' + author + '  text: ' + text);
          return {author: author, text: text}
        });
        //console.log('userList: ' + userList[0].author);
        //console.log('length: '+ userList.length)
        //console.log("comment: " + user.comment);
        //const ar = [{author: user.username, text: user.comment}];
        //ar.push("jadjlksajdlkasjd");
        //console.log('ar: ' + ar.length);
        this.setState({commentlist: userList});
        //console.log("YEAHHH " + this.state.commentlist);
      })
      .catch(error => console.log(error))
    /*
    var comments = this.state.commentlist
    comments.push()    
    newCommentList = comments
    //setState will then re render whole page
    this.setState((state) => ({commentlist: newCommentList}));
*/
	}
  	render() {
   		return(
   			<div className='b--solid tc'>
   				<h1>Comment Box</h1>
   				<CommentList lists = {this.state.commentlist}></CommentList>
   				<h1></h1>
   				<CommentForm handler = {this.handler} />
   			</div>
	   	);
 	 }
}

export default CommentBox;