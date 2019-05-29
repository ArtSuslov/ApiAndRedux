import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions';
import { selectEvenUsers } from '../selectors/userSelectors';


class Users extends Component {
  componentDidMount () {
    this.props.getUsers();
  }

  render () {
    const { usersList } = this.props;
    return (
      <div>
        <ul>
          {usersList.map(user => {
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

const mapStateToProps = state => {
  return {
    usersList: selectEvenUsers(state),
  }
};
//selectUsersList(store),
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
