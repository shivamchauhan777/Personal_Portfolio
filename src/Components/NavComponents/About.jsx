import { useEffect } from 'react';
const About = () => {

  useEffect(() => {
    window.scroll(0, 0);
  })
  return (
    <>
      <section id="about">


        <div className="h-full pb-10 ">

          <div className=" flex px-2 flex-col items-center">

            <div className=" w-[300px] h-[300px] md:h-[350px] rounded-full md:w-[350px] bg-[url('/images/shivam2.png')] bg-cover mb-10 ">


            </div>


            <div className="w-[99%] lg:w-[70%]    bg-gray-300 rounded-xl px-8 py-10" >
              <h1 className="text-center text-3xl underline">About Me</h1>
              <p className="text-xl mt-10">
                * Hi, I'm Shivam Chauhan, a passionate Frontend Developer who loves turning ideas into interactive and visually appealing web     experiences. With expertise in React, JavaScript, and Tailwind CSS, I build responsive, high-performance websites that enhance  user engagement.
                <div className="mt-5 mb-5"></div>

                * I enjoy problem-solving, optimizing UI/UX, and learning new technologies to stay ahead in the ever-evolving web development landscape. Whether it’s creating pixel-perfect designs or writing clean, maintainable code, I thrive on bringing creativity and functionality together.

                <div className="mt-5 mb-5"></div>
                *Currently, I'm diving into backend development while building innovative solutions like the Farmer’s Field to Market project. Always exploring new ideas—let’s connect and create something amazing.
                <div className="mt-5 mb-5"></div>

                * Demonstrated ability to break down complex problems and develop efficient, scalable solutions. Proficient in data structures and algorithms with hands-on experience solving 130+ problems on platforms like LeetCode. Adept at analytical thinking, debugging, and optimizing code for performance.



              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About;