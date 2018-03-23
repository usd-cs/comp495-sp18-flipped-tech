import React, { Component } from 'react';

var commentList = [
  {id: 1, author: "Ethan Romney", text: "It's all about the gains"},
  {id: 2, author: "Satt Maiki", text: "Odds you do it"},
  {id: 3, author: "Saul Garza", text: "Where the chickens at"}
];



//NEED TO FIGURE OUT HOW TO EXPORT MULTIPLE MODULES

const CommentBox = () => {
  return (
    <div>
        Comment Box
        <CommentList />
        <CommentForm />
    </div>
  );
}

const CommentList = () => {
  render() {
    let commentNodes = props.commentList.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
  }
  return (
    <div>
      {commentNodes}
    </div>
  );
}

const CommentForm = () => {
  return (
      <div>
        Form to submit a new comment
      </div>
    );
}

const Comment = (props) => {
  return (
    <div>
        <h2>
          {props.author}
        </h2>
        {props.children}
    </div>
    );
}

export default CommentBox;