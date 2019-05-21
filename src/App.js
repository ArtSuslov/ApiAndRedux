import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getUsers } from './actions/userActions';
import { getPosts } from './actions/postActions';
import Users from './components/users';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { UsersButton } from './components/usersButton';
import Posts from './components/posts';


class App extends Component {
  componentWillMount() {
    this.props.getPosts();
    this.props.getUsers();
  }


  render() {
    const { users } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={UsersButton} />
          <Route path='/users' render={() => <Users users={users.usersList} />} />
          <Route path='/user:id' component={Posts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
