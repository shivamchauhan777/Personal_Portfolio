import { useEffect } from 'react';
const Project = ({ background }) => {

    useEffect(() => {
        window.scroll(0, 0);
    })
    const handleClick = () => {
        window.open('https://shivam-blogs-707.netlify.app/', "_blank")
    }

    const handleClick2 = () => {
        window.open('https://magical-frangipane-51b2e6.netlify.app/');
    }
    const handleClick3 = () => {
        window.open('https://shivam-farmer-707.netlify.app/');
    }
    return (
        <>


            <section id="projects" className='h-full lg:mb-40 flex flex-col sm:gap-20'>
                <h1 className=" text-4xl text-center   transition duration-700 " style={{ color: background ? "white" : "black" }} >Projects</h1>


                <div className="w-screen  md:h-full pb-10 px-10">
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                        <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-4 cursor-pointer">
                            <img src="/images/portfolio1.png" alt="Sample Image" class="rounded-xl mb-3" />
                            <h3 class="text-xl font-semibold mb-2">Personal Portfolio</h3>
                            <p class="text-gray-600">A sleek and responsive single-page portfolio showcasing my projects, skills, and experience. Built with modern web technologies to highlight both design aesthetics and performance. It serves as a central hub for potential employers and collaborators to explore my work.

</p>
                        </div>
                        <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-4 cursor-pointer" onClick={handleClick3}>
                            <img src="/images/Farmer.png" alt="Sample Image" class="rounded-xl mb-3" />
                            <h3 class="text-xl font-semibold mb-2">Faremer To Market</h3>
                            <p class="text-gray-600">A user-centric web platform designed to bridge the gap between farmers and markets. It enables farmers to showcase their produce directly to consumers or retailers, improving visibility and reducing middlemen. Built with a modern frontend stack and focused on accessibility, ease of use, and impact.</p>
                        </div>
                        <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-4 cursor-pointer" >
                            <img src="/images/Blog.png" alt="Sample Image" class="rounded-xl mb-3" onClick={handleClick} />
                            <h3 class="text-xl font-semibold mb-2">Blogs</h3>
                            <p class="text-gray-600">A fully responsive blog layout built with React, Vite, and Tailwind CSS. This project dynamically renders blog content from a structured list of articles, featuring smooth animations, clean design, and excellent readability across all devices.</p>
                        </div>
                    </div>

                    {/* <h1 className="text-4xl  text-center mt-10 transition duration-700 "  style={{color:background?"white":"black"}}>Mini Projects</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-4 cursor-pointer" onClick={handleClick2}>
            <img src="https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sample Image" class="rounded-xl mb-3" />
            <h3 class="text-xl font-semibold mb-2">Currency Conveter</h3>
            <p class="text-gray-600">This card includes an image with responsive design.</p>
        </div>
        <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-4 cursor-pointer">
            <img src="https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sample Image" class="rounded-xl mb-3" />
            <h3 class="text-xl font-semibold mb-2">Netflix UI Clone</h3>
            <p class="text-gray-600">This card includes an image with responsive design.</p>
        </div>
        <div class="max-w-sm mx-auto p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 mt-4 cursor-pointer" >
            <img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sample Image" class="rounded-xl mb-3" />
            <h3 class="text-xl font-semibold mb-2">Resturant Website</h3>
            <p class="text-gray-600">This card includes an image with responsive design.</p>
        </div>
    </div> */}



                </div>

            </section>

        </>
    )
};
export default Project