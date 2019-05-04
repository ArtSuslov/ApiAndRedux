import React, { Component } from 'react';
import './App.css';
import uuidv4 from 'uuid/v4'
import { connect } from 'react-redux'
import { getUsers } from './actions/pageActions';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props;
    return (
      <div>
        <ul>
          {users.map(user => {
            const { id, name } = user;
            const key = uuidv4();
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
