import { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerStyle = {
    height: "100%",
    position: "relative",
  };
  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    color: "#4FA730",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    color: "#4FA730",
    zIndex: 1,
    cursor: "pointer",
  };
  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };
  const prevImg = () => {
    const firstImg = currentIndex === 0;
    const newImg = firstImg ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newImg);
  };
  const nextImg = () => {
    const lastImg = currentIndex === slides.length - 1;
    const newImg = lastImg ? 0 : currentIndex + 1;
    setCurrentIndex(newImg);
  };
  const dotContainerStyle = {
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
  };
  const dotStyle = {
    margin: "0 3px",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={containerStyle}>
      <div>
        <span className="inline-block" style={leftArrowStyle} onClick={prevImg}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span
          className="inline-block"
          style={rightArrowStyle}
          onClick={nextImg}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </div>
      <div style={slideStyle}></div>
      <div style={dotContainerStyle}>
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex}>
            <span style={dotStyle} onClick={() => goToSlide(slideIndex)}>
              &#11044;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ImageSlider;