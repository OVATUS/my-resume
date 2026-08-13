import Me from '../../../assets/Me.png'
import Github from '../../../assets/Github.png'
import { Mail,Phone,MoveDown,CodeXml } from 'lucide-react';



const Intro = () => {
  return (
    <div >
    {/* กล่องแบ่งแยก ช้าย ขวา */}
     <div className='flex justify-between p-4 gap-2'> 
      {/* เนื้อหาด้านซ้าย */}
      <div className='px-4 py-2 flex'> 
        <img src={Me} className="object-cover rounded-full bg-blue-500 "/>
        
      </div>

      {/* เนื้อหาด้านขวา */}
      <div className='flex flex-col gap-5 flex-1 px-20 pt-12 '> 
        <h1 className='text-5xl font-bold'>Nontapan Boontrkarn</h1>
        <h1 className='text-2xl font-medium'>Full-Stak Developer Internship</h1>
        
        <div className="flex gap-10">
           <p className='text-xs flex gap-4 items-center'><Mail/> Gmail: n9ntapan@gmail.com</p>
           <p className='text-xs flex gap-4 items-center'><Phone />Phone: 0889509069</p>
           <p className='text-xs flex gap-2 items-center'><CodeXml />Github: github.com/OVATUS</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className=''>About Me</h1>
          <p className='bg-blue-100 shadow-2xs p-3'>
            A 4th-year Data Science and Software Innovation student at Ubon Ratchathani University, experienced 
            in building full-stack applications with Django, Alpine.js, and Tailwind CSS. Passionate about creating
            practical software solutions and actively seeking a Software Developer internship to gain real-world
            experience and contribute to a collaborative team.
            </p>
        </div>

        <div className='flex justify-center mt-15'>
          <button className='flex items-center justify-center border rounded-3xl shadow-2xl px-6 py-2 text-xl bg-blue-800 text-white hover:bg-blue-600 hover:text-white'>
            <MoveDown />Read More
          </button>
        </div>

      </div>

     </div>
    </div>
  )
}

export default Intro