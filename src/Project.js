import React from 'react'

const Project = ({color,setColor,hex,setHex,tog,setTog}) => {
    var toHex = require('colornames')
  return (
    <form className='project' onSubmit={(e)=>e.preventDefault()}>
        <div 
            className='box'
            style={{width:'400px',height:'400px',border:'2px solid black',margin:'auto',
                    backgroundColor:color
                    }}
        >
            <p style={{color:tog?"black":"white"}}>{color?color:''}</p>
            <p style={{color:tog?"black":"white"}}>{hex?hex:''}</p>
        </div>
        <br />
        <input 
            type="text"
            placeholder='type-color'
            value={color}
            onChange={(e)=>{setColor(e.target.value);
                       setHex(toHex(e.target.value))
            }         
            }
        />
        <button
            onClick={(e)=>setTog(!(tog))}
        >Toggle</button>
    </form>
  )
}
Project.defaultProps={
    color:"no color given"
}

export default Project
