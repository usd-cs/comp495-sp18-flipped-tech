import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


var commentList = [
  {id: 1, author: "Ethan Romney", text: "It's all about the gains"},
  {id: 2, author: "Satt Maiki", text: "Odds you do it"},
  {id: 3, author: "Saul Garza", text: "Where the chickens at"}
];

class CommentBox extends Component {
  render() {
   	return(
   		<CommentList lists = {commentList}></CommentList>
   	);
  }
}

export default CommentBox;