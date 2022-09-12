import React from 'react';
import Logout from './Logout';
import Login from './Login';
import Spinner from './Spinner';

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
    const { isLoggedIn, turnSpinner } = this.state;

    const loginBtn = !turnSpinner && <Login onLogin={this.handleLogin} />;
    const button = isLoggedIn ? <Logout onLogout={this.handleLogout} /> : loginBtn;
    const spinner = turnSpinner && <Spinner size={50} />;

    return (
      <>
        {button}
        {spinner}
      </>
    );
  }
}
export default Auth;

/// === // == //
// class Auth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       isSpinner: false,
//     };
//   }

//   handleLogin = () => {
//     this.setState({
//       isSpinner: true,
//       // isLoggedIn: true,
//     });
//     this.state({});
//     setTimeout(() => {
//       this.setState({
//         isSpinner: false,
//         isLoggedIn: true,
//       });
//     }, 2000);
//   };

//   handleLogout = () => {
//     this.setState({
//       isLoggedIn: false,
//     });
//   };

//   render() {
//     const { isLoggedIn, isSpinner } = this.state;

//     if (isSpinner) {
//       return <Spinner size={50} />;
//     }

//     if (isLoggedIn) {
//       return <Logout onLogout={this.handleLogout} />;
//     }

//     return <Login onLogin={this.handleLogin} />;
//   }
// }

// export default Auth;

// my first variant: //

// import React from 'react';
// import Logout from './Logout';
// import Login from './Login';
// import Spinner from './Spinner';

// ====
// class Auth extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false,
//       turnSpinner: false,
//     };
//   }

//   handleLogin = () => {
//     this.setState({
//       turnSpinner: true,
//     });
//     setTimeout(() => {
//       this.setState({
//         isLoggedIn: true,
//         turnSpinner: false,
//       });
//     }, 2000);
//   };

//   handleLogout = () => {
//     this.setState({
//       isLoggedIn: false,
//     });
//   };

//   render() {
//     const loginBtn = !this.state.turnSpinner && <Login onLogin={this.handleLogin} />;
//     const button = this.state.isLoggedIn ? <Logout onLogout={this.handleLogout} /> : loginBtn;
//     const spinner = this.state.turnSpinner && <Spinner size={50} />;

//     return (
//       <>
//         {button}
//         {spinner}
//       </>
//     );
//   }
// }
// export default Auth;
