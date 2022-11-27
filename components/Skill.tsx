import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'
import { urlFor } from '../sanity';
import { Skill } from '../typings';
type Props = {
  directionLeft?: boolean;
  skill: Skill;
}

function Skill({ skill, directionLeft }: Props) {
  const image = require('/profile.jpeg')
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        // x:directionLeft ?-100:100,
        opacity:0
      }}
      whileInView={{
        opacity:1, x:0
      }}
      transition={{
        duration:1
      }}
         className='rounded-full border-2 p-2 border-gray-500 object-cover w-20 h-20 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out' 
         src={urlFor(skill?.image).url()}
          alt="me"
      />
      <div className='absolute opacity-0 group-hover:opacity-90 transition duration-500 ease-in-out group-hover:bg-[#F7AB0A] h-20 w-20 xl:w-20 xl:h-20 rounded-full z-0'>
      <div className='flex items-center justify-center h-full'>
        <p className='text-3xl font-bold text-gray-50 opacity-100'>{skill?.progress}%</p>
      </div>
      </div>
    </div >
  )
}

export default Skill