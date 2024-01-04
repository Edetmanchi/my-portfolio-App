import * as React from "react";
import myResume from '../src/img/resume.pdf';
import inno from '../src/img/innoconnect.png'
import ebudget from '../src/img/ebudget.jpg'
import checkin from '../src/img/checkin.jpg'
import hotel from '../src/img/hotel.jpg'
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";






export default function MyComponent(props) {
  const myImage = "https://cdn.hashnode.com/res/hashnode/image/upload/v1704302659496/676ebe7f-81de-43fa-ac8b-4dee416fe7b1.png?auto=compress,format&format=webp"   
  return (
    <div className="items-start bg-white flex flex-col pt-6">
      {/* navbar */}
      <div className="justify-between items-stretch self-center flex w-full max-w-screen-xl gap-5 px-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch self-center flex gap-3 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f466301822a0123570d734f3426582db3ce0c4a1b0ec60a9a706683165bdfdcc?apiKey=6b10e59427914ab996bb6d24a4478661&"
            className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
            alt="logo"
          />
          <div className="text-black text-xl font-bold leading-6 tracking-tight capitalize self-center grow whitespace-nowrap my-auto hover:underline ">
            Personal       
          </div>
        </div>
        <div className="justify-between items-stretch self-center flex gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-xl font-semibold leading-6 tracking-tight capitalize grow whitespace-nowrap hover:underline">
            <a href="#about">
            About Me
            </a>
          </div>
          <div className="text-black text-xl font-semibold leading-6 tracking-tight capitalize hover:underline">
            <a href="#skills">
              Skills
            </a>
          </div>
          <div className="text-black text-xl font-semibold leading-6 tracking-tight capitalize hover:underline">
            <a href="#project">
              Project
            </a>
          </div>
          <div className="text-black text-xl font-semibold leading-6 tracking-tight capitalize grow whitespace-nowrap hover:underline">
            <a href="#contact">
              Contact Me
            </a>
          </div>
        </div>
        <div className="justify-between items-stretch rounded bg-black flex gap-2 px-5 py-4">
          <a href={myResume} download="your_resume.pdf">
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
      {/* intro page */}
      <div id="intro" className="items-stretch self-stretch flex w-full flex-col justify-center mt-6 px-16 py-12 max-md:max-w-full max-md:px-5"> 
        <div className="flex items-center justify-center">
          <div className="justify-between flex flex-col pl-8 py-12 items-start max-md:px-5">
            <div className="items-stretch flex gap-4 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-black text-5xl leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Hello I’am
              </div>
              <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Edet Effiong.
              </div>
            </div>
            <div className="items-stretch flex gap-4 mt-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Frontend/mobile
              </div>
              <div className="text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Developer
              </div>
            </div>
            <div className="items-stretch flex gap-4 mt-5 max-md:max-w-full max-md:flex-wrap">
              <div className="text-black text-5xl leading-[56.16px] tracking-tighter grow shrink basis-auto max-md:text-4xl">
                Based In
              </div>
              <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter max-md:text-4xl">
                Nigeria.
              </div>
            </div>
            <div className="text-zinc-500 text-base leading-6 tracking-wide w-[600px] max-w-full mt-8 mb-14 max-md:mb-10">
              As a dynamic professional, I bring a versatile background encompassing Software Engineering, Data Analysis, IT Support, Project Management, Virtual Assistance, and Technical Writing.
              With a proven ability to manage multiple tasks and projects concurrently, I uphold a keen eye for detail and quality. 
              My effective communication and organizational skills empower seamless collaboration with cross-functional teams to achieve project objectives.
               Eager to leverage technical expertise and problem-solving abilities, I aim to optimize processes and drive success in dynamic work environments.
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
                <a href="https://github.com/Edetmanchi">
                  <FaXTwitter className="text-4xl"/>
                </a>
              </div>
              <div className="justify-center items-center flex  w-14 h-14 rounded-lg border-2 border-black  hover:text-white hover:bg-black">
                <a href="https://www.instagram.com/edet_manchi/">
                 <FaInstagramSquare className="text-4xl"/>
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src={myImage} alt=""/>
          </div>
        </div>
      </div>
      {/* skills page */}
      <div id="skills" className="items-stretch self-center flex w-full max-w-screen-xl flex-col mt-16 pb-5 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="justify-center items-center flex flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
          <div className="flex items-stretch gap-4">
            <div className="text-black text-5xl leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
              My
            </div>
            <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
              Skills
            </div>
          </div>
        </div>
        <div className="justify-between items-stretch flex gap-5 mt-10 py-5 max-md:max-w-full max-md:flex-wrap">
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            < FaGitAlt className="text-4xl"/>
            <div className="self-stretch  text-black text-center text-xl font-bold leading-6 capitalize whitespace-nowrap mt-8">
              Git
            </div>
          </div>
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <FaGithub className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              github
            </div>
          </div>
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <IoLogoJavascript className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              Javascript
            </div>
          </div>
          
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <FaReact className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              React.Js
            </div>
          </div>
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <RiReactjsLine className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              React-Native.Js
            </div>
          </div>
        </div>
        <div className="hover:scale-75 transition delay-100 ease-in-out justify-between items-stretch flex gap-5 py-5 max-md:max-w-full max-md:flex-wrap">
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <SiTailwindcss className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              Tailwindcss
            </div>
          </div>
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <FaBootstrap className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              Bootstrap
            </div>
          </div>
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <FaFigma className="text-4xl"/>
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              Figma
            </div>
          </div>
          <div className="hover:scale-125 transition duration-300 ease-in-out justify-center items-center rounded border-[color:var(--Primary-Black,#000)] bg-white flex flex-col w-[186px] h-[186px] px-6 border-2 border-solid max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b369a1cac6b463685c84812c1f161fdb41ba88d2ab562ccb56b203e20063427?apiKey=6b10e59427914ab996bb6d24a4478661&"
              className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full"
              alt=""
            />
            <div className="self-stretch text-black text-center text-xl font-bold leading-6 tracking-tight capitalize whitespace-nowrap mt-8">
              Sass/scss
            </div>
          </div>
         
        </div>
      </div>
      {/* experience page */}
      <div id="experience" className="items-stretch bg-black self-stretch flex w-full flex-col justify-center mt-16 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="justify-center items-stretch flex flex-col mx-5 my-2.5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
          <div className="justify-center items-center flex flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
            <div className="flex items-stretch gap-4">
              <div className="text-white text-5xl leading-[56.16px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                My
              </div>
              <div className="text-white text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Experience
              </div>
            </div>
          </div>
          <div className="items-stretch flex flex-col mt-5 px-6 py-10 max-md:max-w-full max-md:px-5">
            <div className="items-stretch border border-[color:var(--Zinc-500,#71717A)] flex flex-col px-6 py-8 rounded-xl border-solid max-md:max-w-full max-md:px-5">
              <div className="justify-between items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0430cc0fa43516a03a3ba3895b831df2caf122ee29731d900f4f949b5486815?apiKey=6b10e59427914ab996bb6d24a4478661&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                    alt=""
                  />
                  <div className="text-white text-center text-2xl font-semibold leading-7 tracking-tight self-center grow whitespace-nowrap my-auto">
                    Lead Software Engineer at Google
                  </div>
                </div>
                <div className="text-zinc-300 text-center text-base font-semibold leading-5 tracking-tight grow whitespace-nowrap mt-1.5 self-start">
                  Nov 2019 - Present
                </div>
              </div>
              <div className="text-zinc-300 text-base leading-6 tracking-wide mt-7 max-md:max-w-full">
                As a Senior Software Engineer at Google, I played a pivotal role
                in developing innovative solutions for Google's core search
                algorithms. Collaborating with a dynamic team of engineers, I
                contributed to the enhancement of search accuracy and
                efficiency, optimizing user experiences for millions of users
                worldwide.
              </div>
            </div>{" "}
            <div className="items-stretch bg-zinc-800 flex flex-col mt-8 px-6 py-8 rounded-xl max-md:max-w-full max-md:px-5">
              <div className="justify-between items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e76a149be5bf57355e92fbffe544d8d8154d32a269ac440849a7bb5ed15f9e2c?apiKey=6b10e59427914ab996bb6d24a4478661&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                    alt=""
                  />{" "}
                  <div className="text-white text-center text-2xl font-semibold leading-7 tracking-tight self-center grow whitespace-nowrap my-auto">
                    Software Engineer at Youtube
                  </div>
                </div>{" "}
                <div className="text-zinc-300 text-center text-base font-semibold leading-5 tracking-tight grow whitespace-nowrap mt-1.5 self-start">
                  Jan 2017 - Oct 2019
                </div>
              </div>{" "}
              <div className="text-zinc-300 text-base leading-6 tracking-wide mt-7 max-md:max-w-full">
                At Youtube, I served as a Software Engineer, focusing on the
                design and implementation of backend systems for the social
                media giant's dynamic platform. Working on projects that
                involved large-scale data processing and user engagement
                features, I leveraged my expertise to ensure seamless
                functionality and scalability.
              </div>
            </div>
            <div className="items-stretch border border-[color:var(--Zinc-500,#71717A)] flex flex-col mt-8 px-6 py-8 rounded-xl border-solid max-md:max-w-full max-md:px-5">
              <div className="justify-between items-stretch flex gap-0 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef3d76d48790765fc42b4e9f6cfc981d4a3dd885d0b6db1b923c7a75c4f4298d?apiKey=6b10e59427914ab996bb6d24a4478661&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                    alt=""
                  />
                  <div className="text-white text-center text-2xl font-semibold leading-7 tracking-tight self-center grow whitespace-nowrap my-auto">
                    Junior Software Engineer at Apple
                  </div>
                </div>
                <div className="text-zinc-300 text-center text-base font-semibold leading-5 tracking-tight grow whitespace-nowrap mt-1.5 self-start">
                  Jan 2016 - Dec 2017
                </div>
              </div>
              <div className="text-zinc-300 text-base leading-6 tracking-wide mt-7 max-md:max-w-full">
                During my tenure at Apple, I held the role of Software
                Architect, where I played a key role in shaping the architecture
                of mission-critical software projects. Responsible for designing
                scalable and efficient systems, I provided technical leadership
                to a cross-functional team.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About page */}
      <div id="about" className="justify-between self-center w-full max-w-screen-xl mt-16 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b30ce57024eb6e43b40b8809b9d3e3bf7677f1b38d679d12dbeded93598f95c?apiKey=6b10e59427914ab996bb6d24a4478661&"
              className="aspect-[0.92] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt=""
            />
          </div>
          <div className="flex flex-col items-stretch w-[54%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col pb-8 max-md:max-w-full max-md:mt-10">
              <div className="items-stretch flex justify-between gap-4 pr-20 py-5 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="text-black text-5xl leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                  About
                </div>
                <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                  Me
                </div>
              </div>
              <div className="text-zinc-500 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>{" "}
              <div className="text-zinc-500 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </div>{" "}
              <div className="text-zinc-500 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* projects page */}
      <div id='projects' className="items-stretch bg-black self-stretch flex w-full flex-col justify-center mt-16 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
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
                {/* className="aspect-[1.33] object-contain object-center w-full shadow-xl overflow-hidden my-auto max-md:max-w-full max-md:mt-10" */}
          <div className="mt-5 py-12 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] h-{80%} max-md:w-full max-md:ml-0">
                <img 
                  className=" rounded-xl w-full h-full"
                  src={inno} alt=''
                />         
              </div>
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-white text-5xl font-extrabold leading-[56.16px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                    01
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold leading-10 tracking-tighter mt-7 max-md:max-w-full">
                    Innoconnect
                  </div>
                  <div className="self-stretch text-zinc-500 text-base leading-6 tracking-wide mt-7 max-md:max-w-full">
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    specimen book.
                  </div>
                  <button className="rounded-lg bg-white px-7 py-2 my-10">
                    <a href="https://innoconnect.vercel.app/" className="flex gap-5">
                      <FaExternalLinkAlt className="text-2xl"/>
                     <span className="font-bold text-lg">live preview</span>
                    </a>
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 py-12 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                <div className="items-start self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-white text-5xl font-extrabold leading-[56.16px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                    02
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold leading-10 tracking-tighter mt-7 max-md:max-w-full">
                    E-Budget
                  </div>
                  <div className="self-stretch text-zinc-500 text-base leading-6 tracking-wide mt-7 max-md:max-w-full">
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    specimen book.
                    <br />
                    when an unknown printer took a galley of type and scrambled
                    it to specimen book.
                  </div>
                  <button className="rounded-lg bg-white px-7 py-2 my-10">
                    <a href="https://my-e-budget.netlify.app/" className="flex gap-5">
                      <FaExternalLinkAlt className="text-2xl"/>
                     <span className="font-bold text-lg">live preview</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col items-stretch w-[48%] h-{80%} max-md:w-full max-md:ml-0">
                    <img 
                    className=" rounded-xl w-full h-full"
                    src={ebudget} alt=''
                    />         
                  </div>
              </div>
            </div>
          </div>
          <div className="mt-5 py-12 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                <div className="flex flex-col items-stretch w-[48%] h-{80%} max-md:w-full max-md:ml-0">
                  <img 
                    className=" rounded-xl"
                    src={checkin} alt=''
                  />         
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-start self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-white text-5xl font-extrabold leading-[56.16px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                    03
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold leading-10 tracking-tighter mt-8 max-md:max-w-full">
                    checkin Resturant App
                  </div>
                  <div className="self-stretch text-zinc-500 text-base leading-6 tracking-wide mt-8 max-md:max-w-full">
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    specimen book.
                  </div>
                  <button className="rounded-lg bg-white px-7 py-2 my-10">
                    <a href="https://hungrymancheckin.netlify.app/" className="flex gap-5">
                      <FaExternalLinkAlt className="text-2xl"/>
                     <span className="font-bold text-lg">live preview</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 py-12 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                <div className="items-start self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="self-stretch text-white text-5xl font-extrabold leading-[56.16px] tracking-tighter max-md:max-w-full max-md:text-4xl">
                    04
                  </div>
                  <div className="self-stretch text-white text-3xl font-bold leading-10 tracking-tighter mt-7 max-md:max-w-full">
                    The Euphoria - Ecommerce (Apparels) Website
                  </div>
                  <div className="self-stretch text-zinc-500 text-base leading-6 tracking-wide mt-7 max-md:max-w-full">
                    I'm Evren Shah Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    specimen book.
                    <br />
                    when an unknown printer took a galley of type and scrambled
                    it to specimen book.
                  </div>
                  <button className="rounded-lg bg-white px-7 py-2 my-10">
                    <a href="google.com" className="flex gap-5">
                      <FaExternalLinkAlt className="text-2xl"/>
                     <span className="font-bold text-lg">live preview</span>
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7073dadda76cc03b88a26ef46d9a2e5a52cdd5e2d8572d57eb532cf5edaa7864?apiKey=6b10e59427914ab996bb6d24a4478661&"
                  className="aspect-[1.33] object-contain object-center w-full shadow-xl overflow-hidden my-auto max-md:max-w-full max-md:mt-10"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonial" className="items-stretch bg-white self-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="justify-center items-stretch flex flex-col mx-5 my-2.5 px-8 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
          <div className="justify-center items-center flex flex-col px-16 py-5 max-md:max-w-full max-md:px-5">
            <div className="flex items-stretch gap-4">
              <div className="text-black text-5xl leading-[56.16px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                My
              </div>
              <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                Testimonial
              </div>
            </div>
          </div>
          <div className="justify-between mt-5 px-6 py-10 max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="justify-center items-center shadow-lg bg-white flex grow flex-col w-full p-10 rounded-3xl max-md:mt-10 max-md:px-5">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-24 max-w-full items-center pl-16 pt-12 rounded-[50%] max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba2ec3cbd87c9b61ab493a4eb29feed989734dd6279bcc9af4e7571ec3b91d8?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden mt-4"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch text-neutral-700 text-center text-base leading-5 tracking-wide mt-6">
                    I recently had to jump on 10+ different calls across eight
                    different countries to find the right owner.
                  </div>
                  <div className="bg-black flex w-[120px] shrink-0 h-0.5 flex-col mt-6" />
                  <div className="self-stretch text-neutral-700 text-center text-xl font-semibold leading-6 tracking-tight capitalize whitespace-nowrap mt-6">
                    Evren Shah
                  </div>
                  <div className="self-stretch text-zinc-500 text-center text-base font-semibold leading-5 tracking-tight whitespace-nowrap mt-6">
                    Designer
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center shadow-lg bg-black flex grow flex-col w-full p-10 rounded-3xl max-md:mt-10 max-md:px-5">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-24 max-w-full items-center pl-16 pt-12 rounded-[50%] max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a45acdb4c47d9e532580e452e7fb3882f3685b739ff4437459996e57ddcab1a2?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/60b09f741e64c965b18df0a998dea55d3c2d4945aaa01cd9bf706f5cb56d110f?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden mt-4"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch text-white text-center text-base leading-5 tracking-wide mt-6">
                    I recently had to jump on 10+ different calls across eight
                    different countries to find the right owner.
                  </div>
                  <div className="bg-white flex w-[120px] shrink-0 h-0.5 flex-col mt-6" />
                  <div className="self-stretch text-white text-center text-xl font-semibold leading-6 tracking-tight capitalize whitespace-nowrap mt-6">
                    Flora sheen
                  </div>
                  <div className="self-stretch text-white text-center text-base font-semibold leading-5 tracking-tight whitespace-nowrap mt-6">
                    Designer
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center items-center shadow-lg bg-white flex grow flex-col w-full p-10 rounded-3xl max-md:mt-10 max-md:px-5">
                  <div className="flex-col overflow-hidden relative flex aspect-square w-24 max-w-full items-center pl-16 pt-12 rounded-[50%] max-md:pl-5">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8ffec3ef9a0395d2293c8b54a539187dff16459a666960831c76f8c8d8072060?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="absolute h-full w-full object-cover object-center inset-0"
                      alt=""
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ba2ec3cbd87c9b61ab493a4eb29feed989734dd6279bcc9af4e7571ec3b91d8?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden mt-4"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch text-neutral-700 text-center text-base leading-5 tracking-wide mt-6">
                    I recently had to jump on 10+ different calls across eight
                    different countries to find the right owner.
                  </div>
                  <div className="bg-black flex w-[120px] shrink-0 h-0.5 flex-col mt-6" />
                  <div className="self-stretch text-neutral-700 text-center text-xl font-semibold leading-6 tracking-tight capitalize whitespace-nowrap mt-6">
                    Evren Shah
                  </div>
                  <div className="self-stretch text-zinc-500 text-center text-base font-semibold leading-5 tracking-tight whitespace-nowrap mt-6">
                    Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="items-stretch bg-white self-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="justify-between mx-5 my-2.5 px-8 py-5 max-md:max-w-full max-md:mr-2.5 max-md:px-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch self-stretch flex grow flex-col max-md:max-w-full max-md:mt-5">
                <div className="text-zinc-500 text-base leading-5 tracking-tight items-stretch rounded border-[color:var(--Primary-Black,#000)] justify-center px-6 py-5 border-[1.4px] border-solid max-md:max-w-full max-md:px-5">
                  Your name
                </div>
                <div className="text-zinc-500 text-base leading-5 tracking-tight items-stretch rounded border-[color:var(--Primary-Black,#000)] justify-center mt-5 px-6 py-5 border-[1.4px] border-solid max-md:max-w-full max-md:px-5">
                  Email
                </div>
                <div className="text-zinc-500 text-base leading-5 tracking-tight items-stretch rounded border-[color:var(--Primary-Black,#000)] justify-center mt-5 px-6 py-5 border-[1.4px] border-solid max-md:max-w-full max-md:px-5">
                  Your website (If exists)
                </div>
                <div className="text-zinc-500 text-base leading-5 tracking-tight items-stretch rounded border-[color:var(--Primary-Black,#000)] justify-center mt-5 px-6 py-4 border-[1.4px] border-solid max-md:max-w-full max-md:px-5">
                  How can I help?*
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="text-white text-xl font-semibold leading-6 tracking-wide whitespace-nowrap justify-center items-stretch rounded bg-black grow px-5 py-4">
                    Get In Touch
                  </div>
                  <div className="justify-center items-center rounded bg-black flex aspect-square flex-col w-14 h-14 px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/271db03cebe29178ef03b80bf06b7ffeede4dfdfa22cefc2efa53bfc3614e3fa?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                      alt=""
                    />
                  </div>
                  <div className="justify-center items-center rounded border-[color:var(--Primary-Black,#000)] flex aspect-square flex-col w-14 h-14 px-5 border-2 border-solid">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/79b5ec9aa45b3144a55830fde4021401799429d7dfb2a59d256c022cb1d1f80a?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                      alt=""
                    />
                  </div>
                  <div className="justify-center items-center rounded border-[color:var(--Primary-Black,#000)] flex aspect-square flex-col w-14 h-14 px-5 border-2 border-solid">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae18bc3c634cf3e691965d66ae63f4481345209bb5979e8c17197d2097807adf?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                      alt=""
                    />
                  
                  </div>
                  <div className="justify-center items-center rounded border-[color:var(--Primary-Black,#000)] flex aspect-square flex-col w-14 h-14 px-5 border-2 border-solid">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd375fe72dbd81a73c698fc7aa2aa28c3b59ed47cf6e40e0944795c5f57db3ac?apiKey=6b10e59427914ab996bb6d24a4478661&"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch self-stretch flex grow flex-col py-12 max-md:max-w-full max-md:mt-5">
                <div className="items-stretch flex gap-4 mt-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                    Let’s
                  </div>
                  <div className="text-5xl font-extrabold leading-[56.16px] tracking-tighter max-md:text-4xl">
                    talk
                  </div>
                  <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter grow whitespace-nowrap max-md:text-4xl">
                    for
                  </div>
                </div>
                <div className="text-black text-5xl font-extrabold leading-[56.16px] tracking-tighter mt-3 max-md:max-w-full max-md:text-4xl">
                  Something special
                </div>
                <div className="text-zinc-500 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                  I seek to push the limits of creativity to create
                  high-engaging, user-friendly, and memorable interactive
                  experiences.
                </div>
                <div className="text-black text-3xl font-semibold leading-8 tracking-tight mt-10 max-md:max-w-full">
                  Youremail@gmail.com
                </div>
                <div className="text-black text-3xl font-semibold leading-8 tracking-tight my-4 max-md:max-w-full">
                  1234567890
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-black self-stretch flex w-full flex-col justify-center px-16 py-6 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-center flex gap-5 mx-5 px-8 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:px-5">
          <div className="items-stretch flex gap-3 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c88de65f1b5af8e5fc07c456808eee04ad636b8137f6c3c636905ed618bc2390?apiKey=6b10e59427914ab996bb6d24a4478661&"
              className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
              alt=""
            />
            <div className="text-white text-xl font-bold leading-6 tracking-tight capitalize self-center grow whitespace-nowrap my-auto">
              Personal
            </div>
          </div>
          <div className="items-stretch self-stretch flex flex-col">
            <div className="text-white text-right text-base font-semibold leading-5 tracking-tight whitespace-nowrap">
              @ 2024
            </div>
            <div className="text-white text-right text-base font-semibold leading-5 tracking-tight whitespace-nowrap mt-3 self-end">
              Made with love my Edet Effiong
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}










