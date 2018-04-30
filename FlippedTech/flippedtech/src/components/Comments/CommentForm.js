import React from 'react';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //any change in text will be outputted
  handleChange = (event) => {
    this.setState({value: event.target.value});
  };
  /*
  //when submit happens, calls handler from comment box to use
  handleSubmit() {

  	this.props.handler(this.state.value)
  	//alert(this.state.value)
  }
  */
  submitHandler = () => {
    const commentText = this.state.value;
    this.props.handler(commentText);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>
          Comment:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommentForm;