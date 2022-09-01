import React from 'react';
import UserForm from './UserForm.jsx';

class App extends React.Component {
  createUser(userArr) {
    event.preventDefault();
    console.log(userArr);
  }

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
