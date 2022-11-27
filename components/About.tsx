import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { Component } from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
    pageInfo:PageInfo
}

export default function About({ pageInfo}: Props) {
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
            className="h-screen px-10 md:pt-10 mx-auto flex relative flex-col max-w-7xl justify-evenly items-center"
        >
            <h3
                className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'
            >About</h3>
           <div className='absolute top-28 flex flex-col md:flex-row items-center justify-center'> 
           <motion.img
            
                initial={{
                    x: -200,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
            
                src={urlFor(pageInfo?.profileImage).url()}
                className='-mb-20 md:mb-0 flex-shrink-0 w-95 h-56 object-cover rounded-lg md:w-60 md:h-95 xl:w-[600px] xl:h-[400px]'
                alt="me"
                />

            <div className='mt-10 text-center md:text-start px-0 md:px-10 '>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                    </h4>
                <p className='text-sm mt-5 px-2'>
                    {pageInfo.backgroundInformation}
                </p>
            </div>
           </div>

        </motion.div>
    )
}
