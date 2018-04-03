import React, { Component } from 'react';


var comments = [
  {id: 1, author: "Ethan Romney", text: "It's all about the gains"},
  {id: 2, author: "Satt Maiki", text: "Odds you do it"},
  {id: 3, author: "Saul Garza", text: "Where the chickens at"}
];


class CommentList extends React.Component {
	render(){
		console.log(this.props.comments)
		var commentNodes = this.props.comments.map(function(comment){
			return(
					<Comment author = {comment.author} key = {comment.id}>
						{comment.text}
					</Comment>
				);
		});
		return (
			<div>
				{commentNodes}
			</div>
		);
	}
}

class CommentForm extends React.Component {
	render(){
		return (
			<div>CommentForm</div>
		);
	}
}

class CommentBox extends React.Component {
	constructor(props){
		super();
		this.state = {
			comments:props.comments
		}
	}
	render(){
		return (
			<div>
				<h1>Comments</h1>
				<CommentList comments = {this.state.comments} />
				<CommentForm />
			</div>
		);
	}
}

class Comment extends React.Component {
	render(){
		return (
			<div>
				<div>
					{this.props.children}
				</div>
				<div>
					{this.props.author}
				</div>
			</div>
		);
	}
}

var commentBox = React.render(
		<CommentBox comments = {comments}/>,
		document.getElementbyId('content')
);

export default CommentBox;

