import React, { Component } from 'react';
import Comment from './Comment';


class CommentList extends Component {
  render(props){
    //takes array and creates something that can be parsed and saves it in commentNodes
    //console.log("in commentList");
    //let test = this.props.lists[0];
    //console.log('test: ' + test)
    //console.log("comments: " + Object.getOwnPropertyNames(test));
    var commentNodes = this.props.lists.map(function(comment) {
      return (
        <Comment author={comment.author} comment={comment.text}>
          {comment.text}
        </Comment>
      );
    })
    return(
      //outputs the parsed data
      <div className='b--solid tc'>
        {commentNodes}
      </div>
    );
  }
}


export default CommentList;