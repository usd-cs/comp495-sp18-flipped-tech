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
    fetch('/testLecture')
      .then(response => {
        console.log(response)
        return response
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))

    //console.log(this.commen
  }

  //handler adds comment to list but because it renders every update, the array fails to update
  //page reupdates so once backend is set up we're set
	handler(commentText) {
    var comments = this.state.commentlist
    comments.push({id: ++comments.length, author: "Erick Perez", text:commentText})    
    newCommentList = comments
    //setState will then re render whole page
    this.setState((state) => ({commentlist: newCommentList}));

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