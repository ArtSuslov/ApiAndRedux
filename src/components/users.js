import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
  const { users, } = props;
  const filteredUsers = users.filter(e => !(e.id % 2));
  return (
    <div>
      <ul>
        {filteredUsers.map(user => {
          const { id, name } = user;
          return <li key={id}>
                   ID of {name} is {id} <Link to={`/user${id}`}>Показать посты</Link>
                 </li>
        })}
      </ul>

      {/* filteredUsers.map(user => <Route
                                    key={user.id * 10}
                                    path={`/user${user.id}posts`}
                                    render={() => <Posts userId={user.id} data={posts.postsList}/>}
                                  />
      ) */}
    </div>
    )
}

export default Users;
