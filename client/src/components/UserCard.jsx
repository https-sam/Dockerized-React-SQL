import React from 'react'

const UserCard = ({user}) => {
  const {username, profile_image, description} = user;
  return (
    <div className='user-card-container flex-center'>
      <img src={profile_image} alt={username} className="avatar-image"/>
      <p className='p-bold'>{username}</p>
      <p className='p-light'>{description}</p>
      <button>Wave</button>
    </div>
  )
}

export default UserCard