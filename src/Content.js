import React from 'react'
import List from './List'



const Content = ({item,handlechange,handledelete}) => {
 
   
  return (
    <main>
      {(item.length)?(
        <List
          item={item}
          handlechange={handlechange}
          handledelete={handledelete}
        />
      ):
      (
        <h3>Your list is empty</h3>
      )
    }
    </main>
  )
}

export default Content
