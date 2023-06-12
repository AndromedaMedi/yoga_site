import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { UserContext } from "../UserContext";

const navigation = [
  { name: 'Our Story', href: '#' },
  { name: 'Wellbeing', href: '#' },
  { name: 'Classes', href: '#' },
  { name: 'Contact', href: '#' },
]

const navigation2 = [
  { name: 'Login', href: '/login' },
  { name: 'Book Class', href: '#' },
]


const Header = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { user } = useContext(UserContext);

  return (

    <header className='absolute inset-x-0 top-0 z-50 p-2'>
      <nav className='flex items-center justify-between p-6 lg:px-8" aria-label="Global'>
        <div className='flex lg:flex-1'>
          <a href="/" className="flex items-center gap-2 -m-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
            <span className='font-bold text-xl text-primary'>Suzanne's Yoga Studio</span>
          </a>
        </div>
        <div className='flex lg:hidden'>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-md hover:text-secondary font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
          <div className="top-1">
            {!!user && (
              <a href="/profile" className="text-md text-primary hover:text-secondary font-semibold">
                {user.name}
              </a>
            )}
          </div>

          <a href="/login" user={user} className="p-1 hover:text-secondary border border-primary hover:border-secondary shadow-sm shadow-gray-300 overflow-hidden">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative items-center top-1">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
          </a>

          <a href="#" className="text-md hover:text-secondary font-semibold text-primary border border-primary hover:border-secondary p-2 shadow-sm shadow-gray-300">
            <div >
              Book A Class
            </div>
          </a>

        </div>

        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5">
          {user ? (
            <div>
              <a href="#" className="text-md 	text-decoration-line:underline hover:text-secondary font-semibold leading-6 text-gray-900 p-2">
                {user.name}
              </a>
            </div>
          ) : (
            <div>
              <a href="/login" className="text-md hover:text-secondary font-semibold leading-6 text-gray-900 p-2">
                Log in
              </a>
            </div>
          )}
          <div>
            <a href="#" className="text-md hover:text-secondary font-semibold leading-6 text-gray-900 border border-primary hover:border-secondary p-2 shadow-sm shadow-gray-300">
              Book A Class
            </a>
          </div>
        </div> */}

      </nav>


      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
              </svg> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-secondary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-primary hover:bg-secondary"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;