import React, { Component } from 'react';
import Comment from './Comment';


var commentList = [
  {id: 1, author: "Ethan Romney", text: "It's all about the gains"},
  {id: 2, author: "Satt Maiki", text: "Odds you do it"},
  {id: 3, author: "Saul Garza", text: "Where the chickens at"}
];
/*
class CommentList extends Component {
  render(props){
    var commentNodes = this.props.lists.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );}
    return(
      <div>
        {commentNodes}
      </div>
    );
  }
}
*/

var CommentList = React.createClass({
  render: function(props) {
    var commentNodes = this.props.lists.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});


/*
const CommentList = () => {
  return (
    <div>
      <Comment author = "toby">Thats cool</Comment>
      <Comment author = "toby">Thats cool</Comment>
    </div>
  );
}
*/

export default CommentList;