import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	render() {
		const { comments } = this.props;

		return (
			<ul className="comment-list">
				{comments.map((comment, index) => {
					return <li key={index}>{comment}</li>;
				})}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
