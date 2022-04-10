import React from 'react'
import { useQuery } from 'react-query';
import api, { getUser, updateUser, getUsers } from './usersApi';


function User({ setUserId }: { setUserId: Function }) {
  const { data } = useQuery(['users'], getUsers)
  console.log(data)
  return (
    <div>
      <ul>
        {
          data && data?.map(user => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => setUserId(user.id)}>view</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default User