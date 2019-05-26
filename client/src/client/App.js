import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Basketbar from '../components/Basketbar';
import Merch from '../components/Merch';
import Footer from '../components/Footer';
import PostForm from '../components/Poster';
import 'semantic-ui-css';
import '../styles/App.css';
import { connect } from 'react-redux';
import { changeActiveItem } from '../store/actions/postActions';

class App extends Component {
	componentDidMount() {
		this.props.changeActiveItem('Store');
	}
	renderStore() {
		if (this.props.activeItem === 'Store') {
			return (
				<div className="other">
					<Sidebar />
					<Merch />
					<Basketbar />
				</div>
			);
		} else if (this.props.activeItem === 'Post') {
			return <PostForm />;
		}
	}
	render() {
		return (
			<div className="body">
				<Navbar />
				<div>{this.renderStore()}</div>
				<Footer />
			</div>
		);
	}
}

export default connect(
	state => ({
		activeItem: state.active.activeItem
	}),
	{ changeActiveItem }
)(App);
