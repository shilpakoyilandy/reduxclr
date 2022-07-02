import React from 'react'
import { useDispatch } from 'react-redux'
import {login,logout} from '../../reducers/user'
import {useSelector} from 'react-redux'
function Profile() {
    const user=useSelector((state)=>state.user.value)
    const dispatch=useDispatch()
    const themeColor=useSelector((state)=>state.theme.value)
    
  return (
    <div style={{color:themeColor}}>
      
      <h1>Profile Page</h1><br/>
      <label>Name:{user.uname}</label><br/>
      <label>Place:{user.place}</label><br/>
      <label>Email:{user.email}</label><br/>
      <div>
      <button onClick={()=>{dispatch(login({uname:"shilpa",place:"kyl",email:"ssss"}))}}>Login</button>
      <button onClick={()=>{dispatch(logout())}}>Logout</button>
      </div>
      
      </div>
  )
}

export default Profile
