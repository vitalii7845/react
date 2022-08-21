import React from 'react';
import Logout from './Logout.jsx';
import Login from './Login.jsx';
import Spinner from './Spinner.jsx';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      turnSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      turnSpinner: true,
    });
    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        turnSpinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    const loginBtn = !this.state.turnSpinner && <Login onLogin={this.handleLogin} />;
    const button = this.state.isLoggedIn ? <Logout onLogout={this.handleLogout} /> : loginBtn;
    const spinner = this.state.turnSpinner && <Spinner size={50} />;

    return (
      <>
        {button}
        {spinner}
      </>
    );
  }
}
export default Auth;
