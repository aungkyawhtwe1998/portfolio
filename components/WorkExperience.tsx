import { motion } from 'framer-motion'
import React from 'react'
import { Experience } from '../typings'
import ExperienceCard from './ExperienceCard'

type Props = {
    experience:Experience[]
}

function WorkExperience({experience }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='min-h-screen flex relative overflow-hidden flex-col text-lft max-w-full px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Experience
            </h3>
            <div className='mt-32 w-full flex overflow-x-scroll space-x-5 p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
                {
                    experience?.map((exp)=>(
                        <ExperienceCard key={exp._id} experience={exp}/>

                    ))
                }
                
            </div>
        </motion.div>
    )
}

export default WorkExperience