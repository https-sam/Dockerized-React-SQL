import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import UserCard from '../components/UserCard';
import './usersPage.css'

const UsersPage = () => {
  const FETCH_USER_ENDPOINT = 'http://localhost:8080/fetch-users';
  const ADD_USER_ENDPOINT = 'http://localhost:8080/add-user';

  const [users, setUsers] = useState([]);
  const [inputUser, setInputUser] = useState({
    username: '',
    profile_image: '',
    description: ''
  });


  // SG 11/11/2022 19:52  A funciton that makes a post request to the backend to add a user
  const handleSubmit = async (e) => {
    // SG 11/11/2022 19:53  checking is the input fields are empty
    if(!inputUser || !inputUser.username || !inputUser.profile_image || !inputUser.description) return;

    e.preventDefault();
    // SG 11/11/2022 19:54  making a call
    await axios.post(ADD_USER_ENDPOINT, inputUser)
    .then(( {data} )=> {
      console.log(data)
      setUsers([...users, data])
    })
    .catch(e => console.log(e))

    // SG 11/11/2022 19:54 setting back states values to empty strings
    setInputUser({
      username: '',
      profile_image: '',
      description: ''
    })
  }

  // SG 11/11/2022 19:54  fetches users, returns a promise
  const fetchUsers = () => {
    return axios.get(FETCH_USER_ENDPOINT)
  }

  useEffect(() => {
    fetchUsers()
    .then(({data}) => setUsers(data))
    .catch(err => console.log(err));
  }, [])

  console.log(users)
  
  // SG 11/11/2022 19:55  if no users, return nothing (we could render a loading icon / message here)
  if(users.length === 0) return null;

  return (
    <main className='users-page'>
    {/* A form that takes username & description & profile image uri */}
      <form className='user-form flex-center'>
        <div className='flex-center'>
          <input type="text" placeholder="username" 
            value={inputUser.username} // s-way binding
            onChange={(e) => setInputUser // setting the state to the input value
            ({...inputUser, username: e.target.value})} // copying the current state and updating the username property
          />
          <input type="text" placeholder="profile image URL"
            value={inputUser.profile_image} 
            onChange={(e) => setInputUser
            ({...inputUser, profile_image: e.target.value})}
          />
        </div>
        <input type="text" placeholder="description" id="form-description"
          value={inputUser.description} 
          onChange={(e) => setInputUser
          ({...inputUser, description: e.target.value})}
        />
        <button type="button" onClick={(e) => handleSubmit(e)}>Add User</button>
      </form>

      <div className='users-container flex-center'>
        {/* // mapping over the users array and rendering a UserCard component  */}
        {users.map((user, i) => <UserCard key={i} user={user} />)} 
      </div>
    </main>
  )
}

export default UsersPage