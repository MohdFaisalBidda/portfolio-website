import React from 'react'

function Contact() {
    return (
        <>
            <div className=" w-full h-screen">
                <div className=" max-w-screen-lg mx-auto flex flex-col justify-center  h-full p-4">

                    <div className="mb-10">
                        <p className='text-4xl border-b-4 inline border-amber-700'>Contact</p>
                        <p className='py-6'>Drop a mail</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className='text-5xl text-center mt-10'>Get In Touch</p>
                        <p className='mt-8 text-center font-medium'>My Inbox is always open,if you just want to say Hello👋. <br />I'll try my best to get back to you! Feel free to me about any job opportunity.</p>
                        <a><button className='text-center mt-16 bg-amber-300 w-28 h-10 font-bold text-amber-800 hover:scale-105 duration-200 rounded-lg'>Mail me</button></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
