import React from 'react'
import { NavLink, Link } from 'react-router-dom';
function Footer({ background }) {
  return (
    <>
      <footer className=" text-gray-200 px-6 py-10 transition duration-700 bg-black ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-xl font-bold mb-4">Shivam</h2>
            <p className="text-sm text-gray-400">
              Frontend Developer
            </p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to={"/"} className="hover:underline">Home</NavLink></li>
              <li><NavLink to={"/about"} className="hover:underline">About Us</NavLink></li>
              <li><NavLink to={"/email"} className="hover:underline">Email Us</NavLink></li>
              <li><NavLink to={"/project"} className="hover:underline">Projects</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">Pricing</li>
              <li className="hover:underline cursor-pointer">FAQs</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4 cursor-pointer">
              <div className='w-10 h-10  rounded-full bg-[url("/images/insta.png")] bg-cover bg-center ' onClick={() => window.open("https://www.instagram.com/shivam_0_0_7_7/?hl=en", "_blank",)}></div>
              <div className='w-10 h-10  rounded-full bg-[url("/images/facebook2.png")] bg-cover bg-center ' onClick={() => window.open("https://www.facebook.com/profile.php?id=100055923891005", "_blank", "noopener,noreferrer")}></div>
              <div className='w-10 h-10  rounded-full bg-[url("/images/linkedin.png")] bg-cover bg-center ' onClick={() => window.open("https://www.linkedin.com/in/shivam-chauhan-741187284/", "_blank", "noopener,noreferrer")}></div>
              <div className='w-10 h-10  rounded-full bg-[url("/images/github.png")] bg-cover bg-center ' onClick={() => window.open("https://github.com/shivamchauhan777", "_blank", "noopener,noreferrer")}></div>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          © 2025 Shivam Chauhan. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default Footer
