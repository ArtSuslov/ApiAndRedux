import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';


class Users extends Component {
  componentDidMount () {
    this.props.getUsers();
  }

  render () {
    const { usersList } = this.props.users;
    const filteredUsers = usersList.filter(e => !(e.id % 2));
    return (
      <div>
        <ul>
          {filteredUsers.map(user => {
            const { id, name } = user;
            return <li key={id}>
                     ID of {name} is {id} <Link to={`posts/${id}`}>Показать посты</Link>
                   </li>
          })}
        </ul>
      </div>
    )
  }
};

const mapStateToProps = store => {
  return {
    users: store.users,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
