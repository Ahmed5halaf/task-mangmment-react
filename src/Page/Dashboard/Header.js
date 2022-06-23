import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header>
      <h1>Employee Mangment software</h1>
      <div style={{margineTop:'30px',margineBottom:'18px'}}>
        <button onClick={() => setIsAdding(true)} className='round-button'>Add button</button>
      </div>
    </header>
  )
}

export default Header