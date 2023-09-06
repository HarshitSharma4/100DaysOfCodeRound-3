import { React, useState } from "react";
import { image } from "./CarouselData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Carousel(props) {
  console.log(props);
  const [currentImage, changeImage] = useState(props.index);

  return (
    <div className="carousel">
      {/* <div className="indicator">
        <div
          className="indctr"
          onClick={() => {
            changeImage(0);
          }}
        ></div>
        <div
          className="indctr"
          onClick={() => {
            changeImage(1);
          }}
        ></div>
        <div
          className="indctr"
          onClick={() => {
            changeImage(2);
          }}
        ></div> 
      </div> */}
      <div
        className="left-icon"
        onClick={() => {
          currentImage === 0
            ? changeImage(image.length - 1)
            : changeImage(currentImage - 1);
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className="carousel-img">
        <img src={image[currentImage].img} alt={image[currentImage].Title} />
        <div className="intro">
          <h1>{image[currentImage].Title}</h1>
          <p>{image[currentImage].Subtitle}</p>
        </div>
      </div>
      <div
        className="right-icon"
        onClick={() => {
          changeImage((currentImage + 1) % image.length);
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}

export default Carousel;
