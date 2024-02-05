import React from 'react'

const Footer = ({len}) => {
  return (
    <div>
    <footer>
      <p>You still have {len} {len>1?("works"):("work")}</p><br />
    
    </footer>
    </div>
  )
}

export default Footer
