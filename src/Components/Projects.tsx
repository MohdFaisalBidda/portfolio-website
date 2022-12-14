import React from 'react'
import colorApp from "../assets/project3.png"
import newsApp from "../assets/news.png"
import gApp from "../assets/project2.png"


interface Project {
    id : number,
    src : any,
    pName : string,
    description : string,
    code : string,
    preview : string
}

const Projects = ()=> {
    const lists:Project[] = [
        {
            id: 1,
            src: colorApp,
            pName:"Color App",
            description:"lorem10",
            code: "https://github.com/MohdFaisalBidda/Color_Picker",
            preview: "https://color-picker-snowy.vercel.app/",

        },
        {
            id: 2,
            src: newsApp,
            pName:"News App",
            description:"lorem10",
            code: "https://github.com/MohdFaisalBidda/News-App",
            preview: "https://news-app-mohdfaisalbidda.vercel.app/"

        },
        {
            id: 3,
            src: gApp,
            pName:"Github Profile Viewer",
            description:"lorem10",
            code: "https://github.com/MohdFaisalBidda/Github-Profile-Viewer",
            preview: "https://github-profile-viewer-three.vercel.app/"

        }
        ,
        {
            id: 4,
            src: gApp,
            pName:"Github Profile Viewer",
            description:"lorem10",
            code: "https://github.com/MohdFaisalBidda/Github-Profile-Viewer",
            preview: "https://github-profile-viewer-three.vercel.app/"

        }
        ,
        {
            id: 5,
            src: gApp,
            pName:"Github Profile Viewer",
            description:"lorem10",
            code: "https://github.com/MohdFaisalBidda/Github-Profile-Viewer",
            preview: "https://github-profile-viewer-three.vercel.app/"

        }
        

    ]
    return (
        <>
            <div className='w-full min-h-screen dark:bg-primary pt-96'>
                <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                    <div className="pb-8">
                        <p className='text-4xl font-bold inline border-b-4 border-black dark:text-secondary dark:border-secondary'>Portfolio</p>
                        <p className='py-6 text-gray-600 dark:text-gray-400'>Here is some of my work.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 sm:px-0 justify-center z-[9] w-full h-full">
                        {React.Children.toArray(lists.map(({src,pName,description,code,preview},index) => {
                            return <>
                                <div key={index} className="relative flex items-center justify-center h-auto w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-2 hover:bg-gradient-to-r from-gray-200 to-gray-300 dark:shadow-secondary dark:shadow-mditems-center dark:bg-gradient-to-r dark:from-primary group">
                                    {/* <BsGithub className='text-8xl'/> */} <img src={src} className=' rounded-xl group-hover:opacity-10 w-full h-full' alt="" />
                                    <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
                                        <h2 className='border-b-2 border-black dark:border-secondary text-2xl font-medium dark:text-secondary'>{pName}</h2>
                                        <p className='mt-2 text-gray-600 dark:text-gray-300'>{description}</p>
                                        <div className="flex">
                                            <a className=' px-4 py-3 m-4 rounded-xl  bg-primary dark:bg-secondary text-white duration-200 hover:scale-105 dark:text-primary text-lg ' href={code} target="_blank" rel="noreferrer">Github</a>
                                            <a className='px-4 py-3 m-4 rounded-xl bg-primary text-white duration-200 hover:scale-105 dark:bg-secondary dark:text-primary text-lg' target="_blank" rel="noreferrer" href={preview}>Preview</a>
                                        </div>

                                    </div>
                                </div>

                            </>
                        }))}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Projects
