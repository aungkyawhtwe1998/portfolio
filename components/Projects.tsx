import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
    return (
        <motion.div
            className='min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3
                className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='w-full md:mt-0 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {
                    projects.map((project, i) => (
                        <div key={project._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen">
                            <motion.img
                                initial={{
                                    y: -100,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 1.2
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                src={urlFor(project.image).url()} className="rounded-lg w-80 h-52" alt="me"
                            />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#F7AB0A]/50'>
                                        Case Study {i + 1} of {projects.length} :
                                    </span>
                                    <span className='ml-2'>{project.title}</span>
                                </h4>
                                <div className='flex items-center space-x-2 justify-center'>
                                    {
                                        project.technologies.map(tech => (
                                            <img key={tech._id} src={urlFor(tech.image).url()} className="w-8 h-8" />
                                        ))
                                    }
                                </div>

                                <p className='text-sm md:text-lg text-center md:text-left'>
                                    {project.summary}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div
                className='w-full absolute top-[30%] bg-[#F7AB0A]/5 left-0 h-[500px] -skew-y-12'>
            </div>
        </motion.div>
    )
}

export default Projects