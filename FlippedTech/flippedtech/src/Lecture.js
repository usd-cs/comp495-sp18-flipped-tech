import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class Lecture extends Component {
  onClick = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return (
      <div>
        <span>
          <h1 className='dib ma3'>{this.props.id}.</h1>
            <NavLink to={'/lectureList/'+this.props.id}
                  className='no-underline f3 lh-copy'
              >
                   {this.props.title}
            </NavLink>
          </span>
      </div>
    );
  }
}

export default Lecture;
