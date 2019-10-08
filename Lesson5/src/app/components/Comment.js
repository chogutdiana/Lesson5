import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Comment extends Component {
  render() {
    const { name, email, body } = this.props;

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/comments/${this.props.id}`}>
            {name}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{body}</p>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}