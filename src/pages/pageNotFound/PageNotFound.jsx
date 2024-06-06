import React from 'react'
import { Link} from "react-router-dom";
function PageNotFound() {
  return (
    <div className='min-h-screen'>
      <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
        <h1 className='text-[50vw] font-semibold text-zinc-700 -rotate-12'>404</h1>
        <div  className='absolute'>
          <h2 className='text-2xl font-semibold'>The page you're looking for does't exist</h2>
          <Link to={'/'}>
          <div className='w-full flex items-center justify-center'><p className='p-2 border w-fit border-zinc-700 rounded-lg'>Go to Home</p></div>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default PageNotFound