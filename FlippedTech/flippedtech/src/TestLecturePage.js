import React from 'react';
import Banner from './Banner'
import Youtube from './Youtube'
import CommentBox from './components/Comments/CommentBox'

const TestLecturePage = (props) => {
	return (
		<div>
			<Banner />
			<Youtube />
			<CommentBox />
		</div>
	);
}

export default TestLecturePage;