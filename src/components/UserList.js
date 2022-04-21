import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
  return (
    <div style={{display:"flex" , flexWrap : "wrap" , justifyContent:"space-around"}}>
       {
           users.map(el=><UserCard el={el}/>)
       } 
    </div>
  )
}

export default UserList