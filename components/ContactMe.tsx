import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

function ContactMe({ }: Props) {
    const {
        register,
        handleSubmit
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:aungkyawhtwe.mdy49@gmail.com?subject=${formData.subject}&body=Hi, my name is  ${formData.name}. ${formData.message} (${formData.email})`;
    };

    return (
        <div className='h-screen pt-24 relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <h4 className='text-3xl font-semibold text-center'>
                Is there anything you need?{""}
                <span className='underline decoration-[#F7AB0A]/50'> Contact me</span>
            </h4>
            <div className='space-y-3'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-1xl'>+959798802184</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-1xl'>aungkyawhtwe.mdy49@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-1xl'>Mandalay, Myanmar</p>
                </div>

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 justify-center mx-auto'>
                <div className='flex space-x-2'>
                    <input
                        {...register('name')}
                        className='contactInput'
                        placeholder='Name'
                        required
                        type="text" />
                    <input
                        {...register('email')}
                        placeholder='Email'
                        className='contactInput'
                        required
                        type="email" />
                </div>
                <input
                    {...register('subject')}
                    className='contactInput'
                    required
                    placeholder='Subject'
                    type="text" />
                <textarea
                    {...register('message')}
                    required
                    placeholder='Message'
                    className='contactInput' />
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>

            </form>
        </div>
    )
}

export default ContactMe