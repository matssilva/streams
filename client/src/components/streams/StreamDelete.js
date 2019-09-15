import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/streams';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  backToList = () => {
    history.push('/');
  };

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    const { stream } = this.props;
    if (!stream) {
      return 'Loading...';
    }
    return `Are um sure you want to delete the stream with Title: ${stream.title}?`;
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          title="Stream delete"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismissCallback={this.backToList}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
