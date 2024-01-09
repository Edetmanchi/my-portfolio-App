import React from 'react'

export default function About() {
  return (
    <div>
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
                Im a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>{" "}
              <div className="text-zinc-500 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                I began my journey as a web developer in 2015, and since then,
                Ive continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, Im building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </div>{" "}
              <div className="text-zinc-500 text-base leading-6 tracking-wide mt-5 max-md:max-w-full">
                When Im not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
