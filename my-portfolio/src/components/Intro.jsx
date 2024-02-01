import React from 'react'
import Header from './Header'
import Skills from './Skills'
import Contacts from './Contacts'
import Footer from './Footer'
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Intro() {
    // const profileImg = "https://source.unsplash.com/MP0IUfwrn0A"
    const profileImg = "http://unsplash.com/photos/MP0IUfwrn0A"

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
        <div className='font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover md ' style={{ backgroundImage: `url(${profileImg})` }}>
            
            <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
                {/* <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
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
                 <IoLogoWhatsapp className="text-4xl"/>
                </a>
              </div>
            </div>
                </div> */}

                {/* img col */}
                <div className="w-full lg:w-2/5">
                    <img src={profileImg} alt=""  className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
                </div>

                {/* Pin to top right corner */}
                <div className="absolute top-0 right-0 h-12 w-20 p-4">
                    <button className="js-change-theme focus:outline-none" onClick={toggleDarkmode}>🌙</button>
                </div>  
            </div>

        </div>
        <div>
            <Skills/>
        </div>
        <div>
            <Contacts/>
        </div>
        
            <Footer/>

    </div>
  )
}
