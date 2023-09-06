import { React, useState } from "react";
import { image } from "./CarouselData";
import { FaXmark } from "react-icons/fa6";
import Carousel from "../components/Carousel";
export default function ImageGallery() {
  const [currentIndex, setcurrentIndex] = useState(null);

  const handelClick = (index) => {
    setcurrentIndex(index);
  };
  const cancelImage = () => {
    setcurrentIndex(null);
  };
  return (
    <div
      className="galary"
      style={currentIndex !== null ? { height: "100vh" } : { height: "100%" }}
    >
      <div className="imageGallary">
        {image.map((item, index) => (
          <div
            key={index}
            className="images"
            onClick={() => handelClick(index)}
          >
            <img src={item.img} alt={item.Title} />
          </div>
        ))}
      </div>
      {currentIndex !== null ? (
        <div className="bigScren">
          <button className="crossImage" onClick={cancelImage}>
            <FaXmark />
          </button>
          <Carousel index={currentIndex} />{" "}
        </div>
      ) : null}
    </div>
  );
}
