import React from 'react'

const Header = (props) => {
  return (
    <div>
      <header><h2>{props.title}</h2></header>
    </div>
  )
}
Header.defaultProps={
  title:"todolist"
}
export default Header
