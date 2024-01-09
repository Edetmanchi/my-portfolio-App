// import { Fragment } from 'react'
// import React from 'react'
import Myresume from '../img/resume.pdf'
import { Disclosure} from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About me', href: '#', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Contact me', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="mt-3">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  
                    // <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>

                    // <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="justify-between flex items-center self-center w-full max-w-screen-xl gap-5 px-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                {/* loogo */}
                <div className="items-stretch self-center flex gap-3 my-auto">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f466301822a0123570d734f3426582db3ce0c4a1b0ec60a9a706683165bdfdcc?apiKey=6b10e59427914ab996bb6d24a4478661&"
                    className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full hidden md-block"
                    alt="logo"
                  />
                  <div className="hidden md:block text-black text-xl font-bold leading-6 tracking-tight capitalize self-center grow whitespace-nowrap my-auto hover:underline ">
                    Personal       
                  </div>
                </div>
                {/* nav items */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-grey-900 text-black' : 'text-black hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div    className="flex justify-betweenitems-stretch rounded bg-black gap-2 px-5 py-4">
                  <a href={Myresume} download="your_resume.pdf">
                    <div 
                      className="text-white text-xl font-semibold leading-6 tracking-wide grow whitespace-nowrap">
                      Resume
                    </div>
                  </a>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d68e0b508cb674652e50eeb888851b903292815d4d698a7ced624352c317d75a?apiKey=6b10e59427914ab996bb6d24a4478661&"
                    className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                    alt=""
                  />
                  </div>
              </div>
            
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-slate-200">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black bg-grey-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium bg-slate-400 text-center mx-7'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
