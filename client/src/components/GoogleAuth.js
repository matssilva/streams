import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, setUserId } from '../actions';

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: '#',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => this.auth.signIn();

  onSignOutClick = () => this.auth.signOut();

  onAuthChange = isSignedIn => {
    const { signIn, signOut, setUserId } = this.props;
    if (isSignedIn) {
      const userId = this.auth.currentUser.get().getId();
      signIn();
      setUserId(userId);
    } else {
      signOut();
      setUserId(null);
    }
  };

  renderAuthButtons() {
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui blue google button">
          <i className="google icon" />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButtons()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut, setUserId }
)(GoogleAuth);
