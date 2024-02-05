import React from 'react'
import { useRef } from 'react'



const Additem = ({newItem,newSetItem,handlesubmit}) => {

      //useref
      const refforinput={useRef}

  return (
    <form className='addlist' onSubmit={handlesubmit}>
        <div className='container'>
          <input
          ref={refforinput} 
          type="text"
          placeholder='add-item'
          required 
          value={newItem}
          onChange={(e)=>{newSetItem(e.target.value)}}
          />
          <button onClick={(e)=>refforinput.current.focus()}  type='submit'>Add-item</button>
        </div>
        
    </form>
  )
}

export default Additem
