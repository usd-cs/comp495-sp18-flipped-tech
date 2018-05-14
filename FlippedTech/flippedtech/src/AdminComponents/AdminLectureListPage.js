import React,{Component} from 'react';
import AdminLectureBox from './AdminLectureBox';
import AdminBanner from './AdminBanner'
import LectureUpload from './LectureUpload'
import { NavLink } from 'react-router-dom'


class AdminLectureListPage extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      lecturelist: []
	    }
	};

	componentDidMount = () => {
		console.log('did mounting');
		fetch("/lectureList")
		.then(response => {
			return response.text();
		})
		.then(data => {
			console.log('data: ' + data);
			const dataList = JSON.parse(data);
			console.log('datalist: ' + dataList);
			const userList = dataList.map( (userObj) => {
				console.log('id: ' + userObj.id);
				console.log("title: " + userObj.title);
				return {id: userObj.id, title: userObj.title}
			});
			console.log('userList: ' + userList);
			this.setState({lecturelist: userList});
		})
		.catch(error => console.log(error))
	};

	render(){
		return (
			<div>
				<AdminBanner />
				<AdminLectureBox lecturelist={this.state.lecturelist}/>
				<NavLink to='/lectureUploadPage'
				className='ma3 no-underline b ph3 pv2 input-reset ba b--black bg-silver grow pointer f6 dib'>
					Add Lecture
				</NavLink>
			</div>
		);
	}
}

export default AdminLectureListPage;