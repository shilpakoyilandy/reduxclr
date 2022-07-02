import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {colorChange} from '../../reducers/theme'
function Clrpic() {
    const [color,setColor]=useState("")
    const dispatch=useDispatch()
    console.log(color)
  return (
    <div>
      <h4>select color</h4>
      <input type="color" onChange={(e)=>{setColor(e.target.value)}}/><br/>
      <h4>selected color:{color}</h4>
      <button onClick={()=>{dispatch(colorChange(color))}}>change color</button>
    </div>
  )
}

export default Clrpic
