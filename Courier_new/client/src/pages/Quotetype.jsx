import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Quotetype = () => {
  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center mt-[80px] sm:mt-[150px]">
    <div className="flex flex-col w-full max-w-md px-4 py-8  rounded-lg shadow-xl shadow-2xl shadow-red-500/60 sm:px-6 md:px-8 lg:px-10 justify-items-center m-3">
     
      <div className="self-center mb-6 text-lg  font-semibold font-light  sm:text-3xl ">
        Select your Shipment Method
      </div>
      <div className="mt-8">
        <Link to="/international">
          <button
            type="submit"
            className="py-2 px-4  bg-gray-800 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  "
          >
            International
          </button>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-6">
        
      </div>
      <Link to="/domestic">
        <button
          type="submit"
          className="py-2 px-4  bg-gray-800 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  "
        >
          Domestic
        </button>
      </Link>
    </div>
  </div>
  </>
  )
}

export default Quotetype