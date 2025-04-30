import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Home = ({ setBackground, background }) => {
  useEffect(() => {
    window.scroll(0, 0);
  })



  function handleResumeDownload() {
    const link = document.createElement("a");
    link.href = "/Shivam_Developer_Resume_1.pdf";
    link.download = "Developer_Shivam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <section id="home">
        <div className="w-full sm:w-[100vw]   flex flex-col md:flex-row  mb-4 md:py-24   ">
          <div className="w-auto h-auto  md:h-96  lg:w-20 lg:items-center lg:ml-12 text-white   flex md:flex-col gap-8  cursor-pointer justify-center  md:ml-5 ">

            <div className="w-10 h-10  rounded-full bg-[url('/images/github.png')] bg-cover text-teal-300 cursor-pointer" onClick={() => window.open("https://github.com/shivamchauhan777", "_blank", "noopener,noreferrer")}></div>
            <div className="w-10 h-10  rounded-full bg-[url('/images/leetcode.png')] bg-cover text-teal-300 cursor-pointer" onClick={() => window.open("https://leetcode.com/u/shivam_chauhan_77/")}></div>
            <div className="w-10 h-10 rounded-full bg-[url('/images/linkedin.png')] bg-cover cursor-pointer " onClick={() => window.open("https://www.linkedin.com/in/shivam-chauhan-741187284/", "_blank", "noopener,noreferrer")}></div>
            <div className="w-10 h-10 rounded-full bg-[url('/images/twitter.png')] bg-cover" onClick={() => window.open("https://x.com/0ShivamChauhan0", "_blank", "noopener,noreferrer")}></div>
            <div className="w-10 h-10 rounded-full bg-[url('/images/insta.png')] bg-cover" onClick={() => window.open("https://www.instagram.com/shivam_0_0_7_7/?hl=en", "_blank",)}></div>
          </div>


          <div className=" h-auto w-auto  md:ml-7 xl:ml-16 lg:h-96 lg:ml-  text-center md:text-start  mt-10 md:mt-0  ">
            <div className=" w-full   md:mt-5 ">
              <h1 className="text-xl sm:text-2xl  lg:text-3xl  font-bold transition " style={{ color: background ? "white " : "black" }}>HI,   I AM </h1>
              <h1 className=" mt-2  font-bold text-2xl sm:text-4xl lg:text-5xl transition " style={{ color: background ? "white " : "black" }}>Shivam Chauhan</h1>
              <h1 className="  text-2xl md:text-4xl lg:text-5xl mt-2 font-bold transition " style={{ color: background ? "white " : "black" }}>And I'm <span className="bg-gradient-to-r from-blue-500 h-2 via-purple-500 to-teal-400 text-transparent bg-clip-text" >FrontEnd Developer</span> </h1>
            </div>


            <div className="w-full md:w-[50vw] h-auto mt-5 md:mt-0  pr-64 text-center  ">
              <p className="text-md w-[100vw] md:w-[48vw] md:text-start md:mt-10 md:text-lg lg:text-xl  px-5 md:px-0" style={{ color: background ? "#9CA3AF" : "" }}> "Passionate Frontend Developer skilled in React, JavaScript, and Tailwind CSS. I create responsive, user-friendly web apps with clean UI/UX, ensuring seamless performance across all devices."</p>
              <div className="text-center w-[100vw] md:w-[45vw] lg:text-start mt-5 flex flex-col md:flex-row  items-center   gap-5">
                <button
                  onClick={handleResumeDownload}
                  className="bg-gradient-to-r from-red-700 to-purple-700 px-2 rounded-md py-2 w-52 font-semibold text-white"
                >
                  Download Resume
                </button>

                <NavLink to={"/email"}><button className="bg-gradient-to-r from-green-500 to-purple-500  text-transparent bg-clip-text border-2   px-2 rounded-md py-2 w-52 font-bold " style={{ borderColor: background ? "white" : "black" }}>Contact Me</button></NavLink>

              </div>
            </div>


          </div>

          <div className="w-full flex justify-center md:ml20 lg:pr-5  xl:ml-16     ">
            <div className=" w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80  xl:w-[360px] xl:h-[360px]  bg-[url('/images/dev.png')]   bg-cover bg-center  mt-10 md:mt-0"></div>
          </div>



        </div>

        <div className="bg-white h-[1px] w-[90vw] mx-5 sm:mx-10 lg:ml-10 xl:ml-20  " style={{ backgroundColor: background ? "white" : "black" }}></div>
        <div className=" ">
          <h1 className="text-2xl sm:text-4xl text-center font-bold mt-10 " style={{ color: background ? "#ffff" : "black" }}>What's In My Tool Kit</h1>
          <h1 className=" sm:text-2xl text-center px-8  mt-5 " style={{ color: background ? "#ffff" : "black" }}>Everything needed to build great products on the web.</h1>

          <div className=" flex flex-wrap gap-12 px- justify-center mt-10  border-red-500">
            <div className="text-white w-[300px]  py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl  " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10  bg-[url('/images/code.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2 =">Clean Code</h1>
              <h1 className="mt-2  ">Writing clean code means crafting simple, readable, and efficient solutions. It emphasizes clarity, consistency, and maintainability, ensuring that every function, variable, and structure serves a clear purpose and makes the overall codebase easier to understand, debug, and extend.  </h1>
            </div>
            <div className="text-white w-[300px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-8 bg-[url('/images/coding.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Responsive Design</h1>
              <h1 className="mt-2">Responsive design ensures that websites adapt seamlessly across all devices, offering an optimal viewing experience by adjusting layouts, images, and functionalities to fit different screen sizes, enhancing user engagement, accessibility, and overall satisfaction. </h1>
            </div>
            <div className="text-white w-[300px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/ui.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Modern UI Design</h1>
              <h1 className="mt-2">Modern design focuses on clean layouts, bold typography, intuitive navigation, and minimalistic aesthetics, combining functionality with visual appeal to create engaging, user-friendly experiences that align with current trends and evolving digital expectations.

              </h1>
            </div>
            <div className="text-white w-[300px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/performance.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Optimum Performance </h1>
              <h1 className="mt-2">Optimum performance ensures that applications run smoothly, load quickly, and operate efficiently, focusing on speed, scalability, and resource management to deliver a seamless and satisfying user experience across all platforms.  </h1>
            </div>

          </div>

        </div>
        <div className="bg-white h-[1px] w-[90vw] mx-5 sm:mx-10 lg:ml-10 xl:ml-20 mt-10 mb-5 " style={{ backgroundColor: background ? "white" : "black" }}></div>


        <div className="w-screen h-  flex flex-col items-center transition  my-10  border-red-500" >

          <h1 className="text-white text-center text-3xl underline mt-10 " style={{ color: background ? "white" : "black" }}>My Skills</h1>




          <div className="grid-cols-4 flex gap-16 md:gap-24 justify-center mt-10 flex-wrap ">
            <div className="text-white w-[300px]  sm:w-[400px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl  " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className="h-10 w-10 mt-2 bg-cover   bg-[url('/images/html-5.png')]"></div>

              </div>
              <h1 className="text-2xl font-medium pt-2">HTML</h1>
              <div className="w-full bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-red-500 h-2 to-yellow-500 w-[90%]  border-black"></div></div>
            </div>
            <div className="text-white  w-[300px] sm:w-[400px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/css-3.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">CSS</h1>
              <div className="w-full bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-blue-500 h-2 to-green-500 w-[80%]  border-black"></div></div>
            </div>
            <div className="text-white w-[300px] h-52 sm:w-[400px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/js.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Javascript</h1>
              <div className="w-full bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-blue-500 h-2 to-purple-500 w-[95%]  border-black"></div></div>
            </div>
            <div className="text-white w-[300px] h-52 sm:w-[400px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className="h-10 w-10 mt-2 bg-cover   bg-[url('/images/tailwind.png')] "></div>


              </div>

              <h1 className="text-2xl font-medium pt-2">Tailwind Css </h1>

              <div className="w-full  bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-green-500 h-2 to-pink-500 w-[98%]  border-black"></div></div>
            </div>
            <div className="text-white h-52 w-[300px] sm:w-[400px] py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/React.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">React Js </h1>
              <div className="w-[90%] bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-green-500 h-2 to-yellow-500 w-[85%]  border-black"></div></div>
            </div>
            <div className="text-white w-[300px] sm:w-[400px] h-52 py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/Node.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Node.js </h1>
              <div className="w-[90%] bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-gray-500 h-2 to-green-500 w-[90%]  border-black"></div></div>
            </div>
            <div className="text-white w-[300px] sm:w-[400px] h-52 py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/Post.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Postgres SQL </h1>
              <div className="w-[90%] bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-blue-500 h-2 to-gray-500 w-[90%]  border-black"></div></div>
            </div>
            <div className="text-white w-[300px] sm:w-[400px] h-52 py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/Mongo.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Mongo DB</h1>
              <div className="w-[90%] bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-green-500 h-2 to-orange-500 w-[90%]  border-black"></div></div>
            </div>
            <div className="text-white w-[300px] sm:w-[400px] h-52 py-5 rounded-xl px-5 bg-black transition-transform duration-300 transform hover:scale-105 cursor-pointer shadow-2xl " style={{ backgroundColor: background ? "black" : "white", color: background ? "white" : "black" }}>

              <div>
                <div className=" border-white h-10 w-10 bg-[url('/images/github.png')] bg-cover mt-2"></div>
              </div>
              <h1 className="text-2xl font-medium pt-2">Github </h1>
              <div className="w-[90%] bg-gray-400 h-2  rounded-2xl mt-10"><div className="bg-gradient-to-r from-blue-500 h-2 to-green-500 w-[90%]  border-black"></div></div>
            </div>

          </div>

          {/* <Images /> */}

        </div>
      </section>

    </>
  )
}
export default Home;