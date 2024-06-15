import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-red-500  py-2">
              Copyright © <span id="get-current-year">2024</span>
            RapidRun courier
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer