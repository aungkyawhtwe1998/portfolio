import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
type Props = {
    pageInfo: PageInfo
}

function Hero({pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi",
            `My name is ${pageInfo?.name}`,
            `I am ${pageInfo?.role}`,
            "<Coding Is My Bias/>"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <img
                className='relative rounded-full h-40 w-40 mx-auto object-center'
                src={urlFor(pageInfo?.heroImage).url()}
                alt="me"
            />
            <div className='z-20 '>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo?.role}
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div >
                <Link  href="#about">
                <button className='heroButton'>About</button>

                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>

                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>

                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>

                </Link>


            </div>
            </div>
           
        </div>
    )
}

export default Hero