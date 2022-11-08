import React, { useState } from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar(props:any) {
    const [nav, setNav] = useState(false);

    
    

    const lists = [
        {
            id: "1",
            link: "Home",
        },
        {
            id: "2",
            link: "About",
        },
        {
            id: "3",
            link: "Projects",
        },
        {
            id: "4",
            link: "Experience",
        },
        {
            id: "5",
            link: "Contact",
        }
        ,
        {
            id: "6",
            link: <BsMoonStarsFill className='text-black dark:text-blue-900' onClick={props.handleTheme}/>,
        }
    ]

    return (
        <>
            <div className=' py-10 px-10 flex justify-between items-center text-center w-full dark:bg-black'>
                <div className="">
                    <h1 className=' font-serif font-bold text-amber-500 text-5xl font-signature dark:text-blue-900'>Faisal</h1>
                </div>

                <ul className='hidden lg:flex'>
                    {lists.map(({id,link}) => {
                        return <>
                            <li key={id} className='px-8 cursor-pointer capitalize font-medium text-amber-500 hover:scale-105 duration-200 text-2xl'>{link}</li>
                        </>
                    })}
                </ul>


                <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 lg:hidden">
                    {nav ? <FaTimes className=' dark:text-blue-900' size={25} /> : <FaBars size={25} className=' dark:text-blue-900'/>}
                </div>

                {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-amber-600 bg-opacity-50  text-black transition-all duration-200'>

                    {lists.map(({id,link}) => {
                        console.log(id);
                        
                        return <>
                            <li key={id} className='px-4 cursor-pointer capitalize font-medium  hover:scale-105 duration-200 py-6 text-4xl'>{link}</li>
                        </>
                    })}

                </ul>}


            </div>


        </>
    )
}

export default NavBar
