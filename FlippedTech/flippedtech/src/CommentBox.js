import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


var commentList = [
  {id: 1, author: "Ethan Romney", text: "This site is cool. I wish I knew about it earlier"},
  {id: 2, author: "Satt Maiki", text: "How do you do problem 1"},
  {id: 3, author: "Saul Garza", text: "@Satt Maiki Go to 1:45. The answer is there"}
];

class CommentBox extends Component {
  render() {
   	return(
   		<div>
   			<h1>Comment Box</h1>
   			<CommentList lists = {commentList}></CommentList>
   			<h1></h1>
   			<CommentForm />
   		</div>
   	);
  }
}

export default CommentBox;