import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const Li = ({i,handlechange,handledelete}) => {
  return (
    <li className='list' key={i.id}>
    <input  onChange={()=>handlechange(i.id)} type="checkbox" checked={i.checked} name="" id="" />
    <label style={(i.checked)?{textDecoration:'line-through'}:null}  onDoubleClick={()=>handlechange(i.id)} htmlFor="">{i.task}</label>
    <FaTrashCan id="trash" onClick={()=>handledelete(i.id)} role='button' tabIndex="0"/>
  </li>
  )
}

export default Li
