import React, { Component } from 'react';

const Comment = (props) => {
  return (
    <div>
        <h2>
          {props.author}
        </h2>
        {props.comment}
    </div>
    );
}

export default Comment;