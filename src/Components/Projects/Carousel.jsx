import { useState, useRef, useEffect } from "react";

// Data
import data from "./Data";

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div>
      <div className="relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src="https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867759__340.jpg"
          alt="heroImage"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full bg-gray-800 bg-opacity-70 backdrop-blur-xs"
        ></div>
        <div className="carousel relative container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-6 py-20 md:px-8 lg:px-24">
          <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-50 text-center">
            Featured Projects
          </h2>
          <div className="relative overflow-hidden ">
            <div className="flex justify-between absolute top left w-full h-full">
              <button
                onClick={movePrev}
                className=" text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("prev")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Prev</span>
              </button>
              <button
                onClick={moveNext}
                className=" text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                disabled={isDisabled("next")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-20 -ml-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            </div>
            <div
              ref={carousel}
              className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
            >
              {data.map((resource, index) => {
                return (
                  <div
                    key={index}
                    className="carousel-item text-center relative min-w-full min-h-full  md:h-60 flex md:flex-row flex-col items-center justify-between gap-4 snap-start"
                  >
                    <div
                      className=" h-auto w-full md:w-[50%] aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                      style={{
                        backgroundImage: `url(${resource.imageUrl || ""})`,
                      }}
                    >
                      <img
                        src={resource.imageUrl || ""}
                        alt={resource.title}
                        className="w-full  aspect-square "
                      />
                    </div>
                    <div className=" md:w-[50%] w-auto h-[100%] space-y-4 flex  flex-col ">
                      <h6 className="text-purple-600 font-bold text-xs uppercase">
                        {resource.title}
                      </h6>
                      <h2 className="text-white font-bold text-xl uppercase">
                        {resource.projectTitle}
                      </h2>
                      <h6 className="text-white font-medium text-sm  uppercase">
                        {resource.projectSubTitle}
                      </h6>
                      <p className="text-justify text-sm text-white leading-relaxed">
                        {resource.projectText}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
