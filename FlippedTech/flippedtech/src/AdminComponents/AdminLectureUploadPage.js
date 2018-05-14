import React,{Component} from 'react';
import AdminLectureBox from './AdminLectureBox';
import AdminBanner from './AdminBanner'
import LectureUpload from './LectureUpload'


class AdminLectureListPage extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      lecturelist: []
	    }
	};
	
	componentDidMount = () => {
		fetch("/lectureList")
		.then(response => {
			return response.text();
		})
		.then(data => {
			const dataList = JSON.parse(data);
			const userList = dataList.map( (userObj) => {
				return {id: userObj.id, title: userObj.title}
			});
			this.setState({lecturelist: userList});
		})
		.catch(error => console.log(error))
	};

	render() {
		return (
			<div>
				<AdminBanner />
				<h1>Video Lecture Upload</h1>
				<LectureUpload length={this.state.lecturelist.length}/>
			</div>
		);
	}
}

export default AdminLectureListPage;