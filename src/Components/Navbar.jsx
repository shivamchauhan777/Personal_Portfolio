

import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Navbar = ({ setBackground, background }) => {
  const handleClick = () => {
    setBackground(!background);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-screen h-16 flex justify-between items-center px-6 md:px-16 sticky top-0 z-30 bg-black shadow-md">
      <div className="text-white text-3xl flex items-center">
        <div className="w-10 h-10 bg-[url('/images/s.png')] bg-cover mr-2 rounded-full shadow-lg"></div>
        Shivam
      </div>

      <button 
       className="text-white md:hidden" 
       onClick={() => setMenuOpen(!menuOpen)}
     >
       ☰
    </button>

      {/* Menu */}
      {/* {
        path:'10',label:About}
      } */}
      <ul
        className={`fixed md:static top-16 left-0 w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 md:p-0 bg-black md:bg-transparent text-white text-lg md:text-xl transition-all duration-500 ease-in-out z-20
        ${menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0"
          }`}
      >
        {["/", "/about", "/email", "/project"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            onClick={handleLinkClick}
            className={({ isActive }) =>
              `${isActive ? "bg-gradient-to-r  from-blue-500    via-purple-500 to-teal-300 text-transparent bg-clip-text" : ""} transition-colors duration-300`
            }
          >
            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}

        {/* Theme Switch */}
        <button
          onClick={handleClick}
          style={{
            backgroundImage: `url(${background ? "/images/sun.png" : "/images/moon.png"})`,
          }}
          className="w-7 h-7 bg-cover transition-all duration-300"
        ></button>
      </ul>
    </div>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-scroll"; // Import react-scroll for smooth scrolling

// const Navbar = ({ setBackground, background }) => {
//   const handleClick = () => {
//     setBackground(!background);
//   };

//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <div className="w-screen h-16 flex justify-between items-center px-6 md:px-16 sticky top-0 z-30 bg-black shadow-md">
//       <div className="text-white text-3xl flex items-center">
//         <div className="w-10 h-10 bg-[url('/images/s.png')] bg-cover mr-2 rounded-full shadow-lg"></div>
//         Shivam
//       </div>

//       <button
//         className="text-white md:hidden"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         ☰
//       </button>

//       {/* Menu */}
//       <ul
//         className={`fixed md:static top-16 left-0 w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 md:p-0 bg-black md:bg-transparent text-white text-lg md:text-xl transition-all duration-500 ease-in-out z-20
//         ${menuOpen
//             ? "opacity-100 translate-y-0 pointer-events-auto"
//             : "opacity-0 -translate-y-4 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0"
//           }`}
//       >
//         {["home", "about", "email", "projects"].map((section, i) => (
//           <li key={i}>
//             <Link
//               to={section} // Target section id
//               spy={true} // Smooth scroll
//               smooth={true}
//               offset={-70} // Adjust scroll position
//               duration={500} // Time for smooth scroll
//               onClick={handleLinkClick}
//               className={({ isActive }) =>
//                 `${isActive ? "bg-gradient-to-r from-blue-500 via-purple-500 to-teal-300 text-transparent bg-clip-text" : ""} transition-colors duration-300`
//               }
//             >
//               {section.charAt(0).toUpperCase() + section.slice(1)}
//             </Link>
//           </li>
//         ))}

//         {/* Theme Switch */}
//         <button
//           onClick={handleClick}
//           style={{
//             backgroundImage: `url(${background ? "/images/sun.png" : "/images/moon.png"})`,
//           }}
//           className="w-7 h-7 bg-cover transition-all duration-300 hover:scale-110" // added hover effect for interaction
//         ></button>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


