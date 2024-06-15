import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <section className="About" id="about">
    <div className="container my-24 mx-auto md:px-6">
      <section className="background-radial-gradient mb-32">
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="container mx-auto">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                  <span className="text-red-500 ">
                    About us
                  </span>
                </h1>
                <p className="text-lg text-hsl[234.5,89.5%,73.9%] ">
                Welcome to RapidRun, your premier courier service provider dedicated to delivering your packages swiftly, securely, and seamlessly. At RapidRun, we understand the importance of reliable logistics in today's fast-paced world. Whether it's urgent documents, valuable parcels, or time-sensitive deliveries, we are here to ensure your items reach their destination promptly and in pristine condition.
                </p>
              </div>
              <div className=" grid justify-items-center item-center container mb-12 lg:mb-0">
                <img
                  src={about}
                  className="  sm:h-[55vh] relative w-full overflow-hidden "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  )
}

export default About