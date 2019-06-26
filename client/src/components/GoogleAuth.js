import React from 'react';

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: null
    };
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '821970994014-fg3ebdopsqockd6mq2k78mki73it4qv4.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignInClick = () => this.auth.signIn();

  onSignOutClick = () => this.auth.signOut();

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButtons() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
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

export default GoogleAuth;
