import React, { Component } from "react"
import { connect } from "react-redux"

import UserHeader from './UserHeader'
import { fetchPostsAndUsers } from "../actions"

class PostList extends Component {
	componentDidMount() {
		this.props.fetchPostsAndUsers()
	}

	renderList() {
		return this.props.posts.map(post => {
			const { id, title, body, userId } = post
			return (
				<div className="item" key={id}>
					<i className="large middle aligned icon user" />
					<div className="content">
						<div className="description">
							<h2>{title}</h2>
							<p>{body}</p>
						</div>
                        <UserHeader userId={userId} />
					</div>
				</div>
			)
		})
	}

	render() {
		return <div className="ui relaxed divided list">{this.renderList()}</div>
	}
}

const mapStateToProps = state => {
	return { posts: state.posts }
}

export default connect(
	mapStateToProps,
	{
		fetchPostsAndUsers
	}
)(PostList)
