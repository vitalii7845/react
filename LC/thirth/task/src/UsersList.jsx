import React, { Component } from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  render() {
    const users = this.props.users;

    const { currentPage } = this.state;
    const { itemsPerPage } = this.state;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const usersRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {usersRender.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
