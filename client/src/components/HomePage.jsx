import React from 'react';
import '../App.css'

const HomePage = () => {

  return (

    <div className='bg-white'>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover serenity and strength through yoga.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our experienced instructors and peaceful studio await, 
              ready to guide you on a transformative journey. 
              Take a deep breath and embrace the present moment.
            </p>
            <p className="mt-6 text-lg leading-8 text-primary">
              Nourish your body, mind, and soul with us.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className=" bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get Started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Take a look at our classes <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;