import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-[#c62368] to-[#001220] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ef5f67]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Edgaras, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am a graduate Sport Therapist who has always had an interest in sports and tech.
                            During the pandemic I decided to explore my interest in tech and now my focus is to take this
                            interest to the next level and establish myself as a successful Software Developer, creating apps 
                            and websites that are responsive and easy to use.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About