import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center pt-10 text-violet-600'>Welcome to Personal Task Manager</h1>
        <p className='text-center mt-4 text-gray-700'>Manage your tasks efficiently and effectively.</p>
        <p className='text-center mt-2 text-gray-500'>Please login or register to get started.</p>
        <div className='flex justify-center mt-8'>
            <a href="/login" className='bg-violet-600 text-5xl text-center  text-white font-semibold px-4 py-2 rounded hover:bg-green-500 hover:text-white transition-colors'>Login</a>
            <a href="/register" className='bg-violet-600 text-5xl text-white font-semibold px-4 py-2 rounded ml-4 hover:bg-green-500 hover:text-white transition-colors'>Register</a>  
    </div>
    </div>
  )
}
export default Home