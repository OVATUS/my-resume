import React from 'react'

const Header = () => {
  return (
    <nav>
      <div className='flex gap-8 bg-gray-50 justify-end p-2 shadow-lg m'>
        <button className='p-1 rounded-lg hover:bg-blue-100 font-medium hover:text-blue-700'>About me</button>
        <button className='p-1 rounded-lg hover:bg-blue-100 font-medium hover:text-blue-700'>Skills</button>
        <button className='p-1 rounded-lg hover:bg-blue-100 font-medium hover:text-blue-700'>Project </button>
        <button className='p-1 rounded-lg hover:bg-blue-100 font-medium hover:text-blue-700'>Education</button>
      </div>
    </nav>
  )
}

export default Header