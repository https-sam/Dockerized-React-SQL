import React, { useEffect } from 'react'
import { useState } from 'react';
import UserCard from '../components/UserCard';
import './usersPage.css'
import axios from '../utils/config';
import { config } from '../utils/config';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [inputUser, setInputUser] = useState({
    username: '',
    profile_image: '',
    description: ''
  });



  // SG 11/11/2022 19:52  A function that makes a post request to the backend to add a user
  /**
   * @param {Event} e - object
   * @returns {void}
   */
  const handleSubmit = async (e) => {

    // SG 11/11/2022 19:53  checking is the input fields are empty
    // TODO: Display an error message on the browser
    if(!inputUser || !inputUser.username || !inputUser.profile_image || !inputUser.description) return;

    e.preventDefault();
    // SG 11/11/2022 19:54  making a request
    await axios.post(config.ADD_USER_ENDPOINT, inputUser)
    .then(( {data} )=> {
      // server returns the new user, so adding it to the state array
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
  /**
   * @returns {Promise}
   */
  const fetchUsers = () => {
    return axios.get(config.FETCH_USER_ENDPOINT)
  }

  // SG 11/18/2022 13:50 fetches users at initial render
  useEffect(() => {
    fetchUsers()
    .then(({data}) => setUsers(data))
    .catch(err => console.log(err));
  }, [])

  // SG 11/18/2022 13:30 fetch not complete or no users
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