import React from 'react'
import {Button, Card , CardGroup}  from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const UserCard = ({el}) => {
    const navigate = useNavigate()
  return (
    <div>
        
        <Card style={{width:"300px" , height:"360px"}}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{el.name}</Card.Title>
      <Card.Text>
        email : {el.email} <br/>
        phone number : {el.phone} <br/>
        <Button onClick={()=>navigate(`/api/profile/${el.id}`)} > more info</Button>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
    </div>
  )
}

export default UserCard