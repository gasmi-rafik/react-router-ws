import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = ({users}) => {
    const {id} = useParams()
   const user = users.find(el => el.id== id)
  
  return (
    <div> name : {user.name} <br/>
          username : {user.username} <br/>
          email : {user.email} <br/>
          phone : {user.phone} <br/>
          website : {user.website} <br/>
          adress : {user && user.address && user.address.street} <br/>
    </div>
  )
}

export default Profile