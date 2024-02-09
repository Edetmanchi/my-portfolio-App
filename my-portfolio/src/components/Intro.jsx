// import React from 'react'
import Header from './Header'
import Skills from './Skills'
import Contacts from './Contact';
import WebProjects from './WebProjects'
import MobileProjects from './MobileProjects'
import Profile from '../img/profile.jpg'
import Footer from './Footer'
import { Tab } from '@headlessui/react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
    const profileImg = "https://source.unsplash.com/MP0IUfwrn0A"

    const toggleDarkmode = () =>{
        const toggle = document.querySelector('.js-change-theme');
        const body = document.querySelector('body');
        const profile = document.getElementById('profile');
        toggle.addEventListener('click', () => {

        if (body.classList.contains('text-gray-900')) {
            toggle.innerHTML = "☀️";
            body.classList.remove('text-gray-900');
            body.classList.add('text-gray-100');
            profile.classList.remove('bg-white');
            profile.classList.add('bg-gray-900');
        } else {
            toggle.innerHTML = "🌙";
            body.classList.remove('text-gray-100');
            body.classList.add('text-gray-900');
            profile.classList.remove('bg-gray-900');			
            profile.classList.add('bg-white');
            
        }
        })

    }
  return (
    <div>
        <div>
            <Header/>
        </div>
            
        <div id='profile' className='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover' style={{ backgroundImage: `url(${profileImg})` }}>
          <div className="max-w-4xl flex items-center mx-auto lg:py-32 flex-wrap my-3 lg:my-0 h-screen backdrop-blur-md">
            <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
                <div>
                    A dynamic professional with a diverse background spanning Software
                    Engineering, Data Analysis, IT Support, Project Management, Virtual Assistance,
                    and Technical writing. Adept at managing multiple tasks and projects
                    simultaneously while maintaining a keen eye for detail and quality. My strong
                    communication and organizational skills enable me to collaborate with
                    cross-functional teams to achieve project objectives effectively. I'm also eager to
                    leverage technical expertise and problem-solving abilities to optimize processes
                    and drive success in a dynamic work environment.
                </div>
                <div className="items-stretch flex justify-between gap-10">
                <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black hover:text-white hover:bg-black">
                  <a href="https://github.com/Edetmanchi">
                    <FaGithub className="text-4xl"/>
                  </a>
                </div>
                <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                  <a href="https://www.linkedin.com/in/edet-effiong/">
                    <FaLinkedin className="text-4xl"/>
                  </a>
                </div>
                <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                  <a href="https://twitter.com/edetmanchi">
                    <FaTwitter className="text-4xl"/>
                  </a>
                </div>
                <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                  <a href="https://www.instagram.com/edet_manchi/">
                    <FaInstagramSquare className="text-4xl"/>
                  </a>
                </div>
                <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                  <a href="https://wa.link/bnktx6">
                    <FaWhatsapp className="text-4xl"/>
                  </a>
                </div>
            </div>
                
            </div>
            

            {/* img col */}
            <div className="w-full lg:w-2/5">
                <img src={Profile} alt=""  className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-72 h-80" />
            </div>  

              {/* Pin to top right corner */}
              <div className="absolute top-0 right-0 h-12 w-26 p-4">
                  <button className="js-change-theme focus:outline-none" onClick={toggleDarkmode}>🌙</button>
              </div>  
          </div>
        </div>
        <div>
            <Skills/>
        </div>
        <div id='projects' className="items-stretch bg-black flex w-full flex-col justify-center mt-16 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="items-stretch flex flex-col mx-5 my-2.5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
                <div className="justify-center items-center flex flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
                    <div className="flex items-stretch gap-4">
                    <div className="text-white text-5xl leading-[56.16px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                        My
                    </div>
                    <div className="text-white text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                        Projects
                    </div>
                    </div>
                </div>

                <Tab.Group>
                    <Tab.List className='mx-96 rounded-sm bg-white grid grid-cols-3 divide-x'>
                        <Tab className='text-black text-2xl font-bold items-center'>web</Tab>
                        <Tab className='text-black text-2xl font-bold'>mobile</Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel><WebProjects/></Tab.Panel>
                        <Tab.Panel><MobileProjects/></Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
        
        <div>
           < Contacts />
        </div>
        <Footer />

    </div>
  )
}
