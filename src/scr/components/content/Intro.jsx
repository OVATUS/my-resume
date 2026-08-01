import React from 'react'
import myPhoto from '../../../assets/myPhoto.png'

const Intro = () => {
  return (
    <div >
     <div className='flex justify-between p-4 gap-4'>

      <div className='p-4 flex'>
        <img src={myPhoto} className="w-64 h-64 object-cover rounded-full"/>
        <h1 className='py-8 px-10 text-3xl font-bold'>Nontapan Boontrakarn</h1>
      </div>

      <div className='border'> 
        <p>เนื้อหาด้านขวา</p>
      </div>
     </div>
    </div>
  )
}

export default Intro