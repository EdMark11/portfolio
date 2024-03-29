import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import reactImg from '../assets/reactImg.png';
import postgresql from '../assets/postgresql.png';



const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-b from-[#001220] to-[#a84147fc] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#ef5f67]  '>Skills</p>
                <p className='py-4'>These are the some of the technologies I have worked with:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="HTML icon" /> 
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="CSS icon" /> 
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={javascript} alt="JavaScript icon" /> 
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={reactImg} alt="React icon" /> 
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt="Node icon" />
                    <p className='my-4'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={postgresql} alt="postgreSQL icon" /> 
                    <p className='my-4'>PostgreSQL</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills