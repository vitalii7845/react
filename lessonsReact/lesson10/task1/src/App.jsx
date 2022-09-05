import React from 'react';
import UserProfile from './UserProfile';
import UserMenu from './UserMenu';

class App extends React.Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    this.fetchUserData(this.props.userId);
  }

  fetchUserData = userId => {
    const userUrl = `https://api.github.com/users/${userId}`;
    fetch(userUrl)
      .then(response => response.json())
      .then(userData => {
        this.setState({
          userData,
        });
      });
  };
  render() {
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state.userData} />
        </header>
        <UserProfile userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
