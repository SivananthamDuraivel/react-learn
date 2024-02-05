import React from 'react';

import Li from './Li';

const List = ({item,handlechange,handledelete}) => {
  return (
    <ul>
        {
          item.map((i)=>(
                <Li 
                    i={i}
                    key={i.id}
                    handlechange={handlechange}
                    handledelete={handledelete}
                />
          ))
        }
      </ul>
  )
}

export default List
