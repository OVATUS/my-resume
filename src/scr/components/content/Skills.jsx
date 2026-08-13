import React from 'react'
import { Code } from 'lucide-react';
 
const Skills = () => {
  //js body   
  const languages = ['Python','javaScript','Java','Golang'];
  const framework = ['Django','Tailwind css','React Js '];
  const tools = ['Github','Figma','n8n','Postman','Docker'];
  const database = ['MySQL','PostgreSQL'];

  return (
    <div className='flex flex-col gap-2 border p-4'>
      <h1 className='text-3xl font-semibold'>Skills</h1>

      {/* content ภาษาก Tool DataBase กล่องใหญ่ */}
      <div className='grid grid-cols-4 gap-4'>

        {/* กล่องเล็กของ Languages */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-normal'>Languages</h1>
          <div className='border flex-1'>
            {
              languages.map((value, index)=>{
                return <ul key={index} className='px-2 py-1'>
                  {value}
                </ul>
              })
            }
          </div>  
        </div>
        {/* กล่องเล็กของ Framework */}
        <div className='flex flex-col gap-2'>
          <h1 className='font-normal'>Framework</h1>
          <div className='border flex-1'>
            {
              framework.map((value, index)=>{
                return <ul key={index} className='px-2 py-1'>
                  {value}
                </ul>
              })
            }
          </div>  
        </div>

        {/* กล่องใหญ่ของเนื้อหา Tools */}
        <div className="flex flex-col gap-2">
          <h1>Tools</h1>
          {/* กล่อวเล็กของ Tools */}
          <div className='border flex-1'>
            {
              tools.map((v, i)=>{
                return <ul key={i} className="px-2 py-1"> 
                  {v}
                </ul>
              })
            }
          </div>
        </div>
        {/* กล่องใหญ่ของเนื้อหา DATABASE */}
        <div className="flex flex-col gap-2">
          <h1>Database</h1>
          {/* กล่อวเล็กของ Tools */}
          <div className='border flex-1'>
            {
              database.map((v, i)=>{
                return <ul key={i} className="px-2 py-1"> 
                  {v}
                </ul>
              })
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default Skills