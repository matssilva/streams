import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/streams';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderButtonsList(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    const { streams } = this.props;
    return streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderButtonsList(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <Link to={`/streams/${stream.id}`}>{stream.title}</Link>

            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreateLink() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="streams/new" className="ui button primary">
            Create
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreateLink()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.user.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
