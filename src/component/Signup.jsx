import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <section className='w-full h-screen items-center bg-[#002853] pt-[5rem] '>
      <div className='w-full md:w-1/4 mb-6 md:mb-0 text-center md:text-left'> 
        <img src="src/assets/LOgo.png" alt="" className=" mr-2 " />
      </div>
        <div type='h1-full' className=' text-white text-center  font-semibold  text-4xl'>
         <h3> Sign Up As:</h3>
        </div>
        <div className='w-3/5 bottom-2 py-10 m-auto flex mb-2  flex-col '>
<div className='flex  flex-col space-x-20 mt-11 items-center '>
    <Link to="/UserType">
      <button className="bg-red-700 hover:bg-blue-800 text-white  w-[250px] h-20 py-2 px-9 rounded-[13px]"> User </button>
    </Link>
</div>
      <div className=' flex  flex-col space-x-20 mt-11  items-center'>
          <Link to="/ExchangerSignUp">
            <button className=" text-white border-black  w-[250px] hover:bg-blue-800 hover:ring-blue-800 h-20 py-2 px-9 rounded-[13px] ring-red-600 ring-4"> Exchanger</button>
          </Link>
        </div> 
      </div>

    </section>
  )
}

export default Signup