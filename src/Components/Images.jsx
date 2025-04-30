

function Images() {
  const images = [
    "/images/html-5.png",
    "/images/css-3.png",
    "/images/js.png",
    "/images/tailwind.png",
    "/images/React.png",
    "/images/Node.png",
    "/images/java.png",
    "/images/python.png",
    "/images/figma.png",
    "/images/c++.png",
    "/images/github.png",
  ];

  const allImages = [...images, ...images]; // duplicate for loop effect

  return (
    <div className="w-full  overflow-hidden  py-4 mt-10  md:mt-20 ">
      <div className="flex w-max animate-scroll">
        {allImages.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`img-${i}`}
            className="w-16 h-16 mx-4 md:w-32 md:h-32 md:mx-8 rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Images;
