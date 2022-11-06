import React from 'react'

function About() {
  
  return (
    <>
      <div  className="w-full h-screen bg-gradient-to-b from-white to-amber-100 text-black dark:bg-slate-900">
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-yellow-600'>About</p>
          </div>
          <p className=' text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore numquam minus et excepturi ipsa voluptates reiciendis quia ut eos tenetur? Alias ullam necessitatibus eius aperiam officia vel, dicta iure molestias ea aliquid, tempora tempore vitae, perspiciatis consequatur reprehenderit repellat placeat non! Suscipit vel modi sequi asperiores? Sunt veritatis laborum saepe!</p>
          <br />
          <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quasi rerum quam nulla non, aliquid quas reiciendis ut recusandae harum quae voluptatum debitis cumque? At velit nisi impedit expedita laudantium delectus, eligendi voluptates. Molestias, delectus, veniam obcaecati vero esse accusantium sunt reiciendis sed maxime necessitatibus, omnis iste. Reiciendis, iusto quae!</p>
        </div>
      </div>
    </>
  )
}

export default About
