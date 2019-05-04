import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getUsers } from './actions/pageActions';


class App extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <ul>
          {users.map(user => {
            const { id, name, key } = user;
            return !(id % 2) ? <li key={key}>ID of {name} is {id}</li> : null
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    users: store.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
