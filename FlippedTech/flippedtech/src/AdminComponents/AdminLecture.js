import React,{Component} from 'react';
import { NavLink} from 'react-router-dom'

class AdminLecture extends Component {
    render(){
        return (
            <div>
                <span>
                	<h1 className='dib ma3'>{this.props.id}.</h1>
                	<NavLink to={'/adminLectureList/' + this.props.id}
                        className='no-underline f3 lh-copy'
                    >
                  	     {this.props.title}
                	</NavLink>
                </span>
            </div>
        );
    }
}

export default AdminLecture;