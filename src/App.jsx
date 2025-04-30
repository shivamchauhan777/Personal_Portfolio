import React, { lazy, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from "/src/Components/NavComponents/About.jsx";
const About = lazy(() => import('./Components/NavComponents/About.jsx'))
// import EmailUs from "/src/Components/NavComponents/EmailUs.jsx"
const EmailUs = lazy(() => import('./Components/NavComponents/EmailUs.jsx'))
// import Navbar from "./Components/Navbar.jsx";
const Navbar = lazy(() => import('./Components/Navbar.jsx'))

// import Home from "/src/Components/NavComponents/Home.jsx"
const Home = lazy(() => import('./Components/NavComponents/Home.jsx'));
// import Footer from "/src/Components/Footer.jsx"
const Footer = lazy(() => import('./Components/Footer.jsx'))
// import Project from "/src/Components/NavComponents/Project.jsx"

const Project = lazy(() => import('./Components/NavComponents/Project.jsx'));


function App() {
  const [background,setBackground]=useState(true);
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar setBackground={setBackground} background={background} />

      <div className="w-screen h-full pt-12  " style={{backgroundColor:background?"#101010":"white"}}   >

        <Routes>
          <Route path="/" element={<Home setBackground={setBackground} background={background} />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/service" element={<Service />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/project" element={<Project setBackground={setBackground} background={background} />}  />  {/* ✅ Fixed space issue */}
          <Route path="/email" element={<EmailUs setBackground={setBackground}  background={background} />}  />
          
        </Routes>
        <Footer setBackground={setBackground} background={background}  />
      </div>
      
      
 </Router>

    // <>
    // <div background={background} setBackground={setBackground}  >
    // <Navbar />
    //   <Home />
    //   <About />
    //   <EmailUs />
    //   <Project /> 
    // </div>

    // </>
  );
}

export default App;


// import React, { useState, lazy } from "react";
// import { Link } from "react-scroll"; // For smooth scrolling
// const About = lazy(() => import('./Components/NavComponents/About.jsx'))
// const EmailUs = lazy(() => import('./Components/NavComponents/EmailUs.jsx'))
// const Navbar = lazy(() => import('./Components/Navbar.jsx'))
// const Home = lazy(() => import('./Components/NavComponents/Home.jsx'));
// const Footer = lazy(() => import('./Components/Footer.jsx'))
// const Project = lazy(() => import('./Components/NavComponents/Project.jsx'));

// function App() {
//   const [background, setBackground] = useState(true); // Dark mode by default

//   return (
//     <div style={{ backgroundColor: background ? "#101010" : "white" }} className="w-screen h-full">
//       {/* Navbar */}
//       <Navbar setBackground={setBackground} background={background} />

//       {/* Sections */}
//       <div id="home">
//         <Home setBackground={setBackground} background={background} />
//       </div>

//       <div id="about">
//         <About setBackground={setBackground} background={background} />
//       </div>

//       <div id="email">
//         <EmailUs setBackground={setBackground} background={background} />
//       </div>

//       <div id="projects">
//         <Project setBackground={setBackground} background={background} />
//       </div>

//       {/* Footer */}
//       <Footer setBackground={setBackground} background={background} />
//     </div>
//   );
// }

// export default App;
