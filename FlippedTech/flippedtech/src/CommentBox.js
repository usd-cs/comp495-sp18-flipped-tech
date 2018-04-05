import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';


/*
class CommentBox extends Component{
	
  getInitialState() {
    return {
      data: commentData
    }
  }
  handleCommentSubmit(comment) {
    this.props.data.push(comment);
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
  }
  render() {
    return (
      <div >
        <CommentForm data={this.props.data} onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.props.data} />
      </div>
    );
  }
}
class CommentList extends Component{
  render() {
    return (
      <div >
        {this.props.data.map(function(c){
          return (
            <Comment author={c.author} text={c.text} />
          );
        })}
      </div>
    );
  }
}
class CommentForm extends Component{
  handleSubmit(e) {
    e.preventDefault();
    var authorVal = e.target[0].value.trim();
    var textVal = e.target[1].value.trim();
    if (!textVal || !authorVal) {
      return;
    }
    this.props.onCommentSubmit({author: authorVal, text: textVal});
    e.target[0].value = '';
    e.target[1].value = '';
    return;
  }
  render() {
    return(
      <form  onSubmit={this.handleSubmit}>
        <div >
          <span >Name</span>
          <input type="text" placeholder="Your name"  />
        </div>
        <div >
          <span >Comment</span>
          <input type="text" placeholder="Say something..."  />
        </div>
        <input type="submit" value="Post"  />
      </form>
    );
  }
}
class Comment extends Component{
  render() {
    return (
      <div >
        <h2 >{this.props.author}</h2>
        {this.props.text}
      </div>
    );
  }
}
*/




var newCommentList = [
  {id: 1, author: "Ethan Romney", text: "This site is cool. I wish I knew about it earlier"},
  {id: 2, author: "Satt Maiki", text: "How do you do problem 1"},
  {id: 3, author: "Saul Garza", text: "@Satt Maiki Go to 1:45. The answer is there"}
];

class CommentBox extends Component {
	constructor(props){
		super(props)
    alert(newCommentList)
		//alert("updated")
		this.state = {
			commentlist: newCommentList
		}
    this.handler = this.handler.bind(this);
    
	}

	handler(commentText) {
    alert(commentText)

    var comments = this.state.commentlist

    comments.push({id: ++comments.length, author: "Erick Perez", text:commentText})    
    
    newCommentList = comments
    alert(newCommentList)
    this.setState((state) => ({commentlist: newCommentList}));
    /*
		this.props.commentlist.push(commentText);
		var comments = this.state.commentlist;

		var newComments = comments.concat([commentText]);
		this.setState({commentlist:newComments});
		
		*/
    /*
    this works kinda
		newCommentList = this.state.commentlist
		
		
		newCommentList.push({id: ++newCommentList.length, author: "Erick Perez", text:commentText})
*/
		//this.state.commentlist.push({id: (++this.state.commentlist.length), author: "Erick Perez", text:commentText})
		//alert(this.state.commentlist.length)

		//this.state.commentlist.concat({id: ++commentList.length, author: "Erick Perez", text:commentText})
		//alert(commentText)
		/*
		this.setState({
      commentlist: newCommentList
			//commentlist: newCommentList
			//this.state.commentlist.concat([{id: ++commentList.length, author: "Erick Perez", text:commentText}])
		});
    */ 
		//this.state.commentlist.concat([{id: ++commentList.length, author: "Erick Perez", text:commentText}])


	}
  	render() {
   		return(
   			<div>
   				<h1>Comment Box</h1>
   				<CommentList lists = {this.state.commentlist}></CommentList>
   				<h1></h1>
   				<CommentForm handler = {this.handler} />
   			</div>
	   	);
 	 }
}

export default CommentBox;