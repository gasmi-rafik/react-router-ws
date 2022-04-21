import React from 'react'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children , log }) => {
    const navigate = useNavigate()
  return (<>
  {log ? children :  navigate('/') } </>)
}

export default PrivateRoute