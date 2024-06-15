import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <section id="home">
    <div className="parallax-1 p-3">
      <div className="  justify-center bg-gray-00">
        <span className=" text-white text-[30px]  p-2  m-4 sm:text-[45px] font-semibold   ">
          {" "}
          The courier delivered the package safely and on time.
        </span>
        <div><Link to={'./quote_type'}> <button className='p-2 m-3 pl-4 text-[20px] bg-red-500 w-[150px] rounded-xl text-white sm:w-[250px] sm:text-[35px] font-semibold'>
            Get a Quote
        </button></Link></div>
       
      </div>
    </div>
  </section>
  )
}

export default Header