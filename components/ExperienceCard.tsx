import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from '../typings'

type Props = {
    experience:Experience
}

function ExperienceCard({experience}: Props) {
    return (
        <article className='flex flex-col rounded-l  items-center space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-70 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            
            initial={{
                y:-100,
                opacity:0
            }}
            transition={{duration:1.2}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
             className='w-32 h-32 xl:w-[150px] xl:h-[150px] rounded-lg object-cover object-center' 
             src={urlFor(experience?.companyImage).url()} 
             alt="me"

            />
            <div className=''>
                <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1 '>{experience?.company}</p>
                <div className='flex space-x-2 my-1'>
                    {
                        experience?.technologies.map(tech=>(
                            <img src={urlFor(tech.image).url()} key={tech._id} className='rounded-full w-10 h-10'/>
                        ))
                    }
              </div>
                <p className='uppercase py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()}- {experience.isCurrentlyWorkingHere? 'Present':new Date(experience.dateEnded).toDateString()} </p>
                <ul className='list-disc space-y-5 ml-5 text-lg pr-5 h-60 md:h-40 overflow-y-scroll scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
                    {
                        experience?.points.map((p,index)=>(
                            <li key={index}>{p}</li>
                        ))
                    }
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard