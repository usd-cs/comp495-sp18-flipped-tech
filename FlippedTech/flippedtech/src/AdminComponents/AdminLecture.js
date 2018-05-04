import React from 'react';

const AdminLecture = (props) => {
  return (
    <div>
    	<span>
    		{props.id}
        	<h2>
          	{props.title}
        	</h2>
        </span>
    </div>
    );
}

export default AdminLecture;