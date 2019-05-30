import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers, sendUsersName } from '../actions/userActions';
import { selectEvenUsers, selectName } from '../selectors/userSelectors';


class Users extends Component {

  componentDidMount () {
    this.props.getUsers();
  }

  renderTemplate = () =>{
    if(this.props.exactUsersList.length){
      return (
        <ul>
          {this.props.exactUsersList.map(user => {
            const { id, name } = user;
            return <li key={id}>
                    ID of {name} is {id} <Link to={`posts/${id}`}>Показать посты</Link>
                    </li>
                  })}
        </ul>
      )
    } else return <h3>Введите имя пользователя</h3>
  }

  handleInput = e => {
    this.props.sendUsersName(e.target.value);
  }
  render () {
    const { evenUsersList } = this.props;
    return (
      <div>
        <h2>Поиск юзера</h2>
        <input type='text' placeholder='Введите имя' onChange={this.handleInput}></input>
        {this.renderTemplate()}
        <h2>Юзеры с ID кратным 2</h2>
        <ul>
          {evenUsersList.map(user => {
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
    evenUsersList: selectEvenUsers(state),
    exactUsersList: selectName(state),
  }
};
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    sendUsersName: name => dispatch(sendUsersName(name)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
