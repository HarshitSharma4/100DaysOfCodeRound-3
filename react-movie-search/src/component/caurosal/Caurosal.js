import { React, useState, useEffect } from "react";
import {
  Caurosals,
  ImageDiv,
  Indicator,
  Text,
  Btn,
  LeftIcon,
  RightIcon,
  Indicators,
  Imdb,
} from "./caurosal.style";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const Caurosal = (props) => {
  const result = props?.data.results;
  const [currentIndex, changeIndex] = useState(0);
  useEffect(() => {
    //Implementing the setInterval method
    if (result !== undefined && result !== null && result.length > 4) {
      const interval = setInterval(() => {
        changeIndex((currentIndex + 1) % result.length);
      }, 3000);
      //Clearing the interval
      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  if (result === undefined || result === null) {
    return <></>;
  }
  return (
    <Caurosals>
      <ImageDiv>
        <img
          src={`https://image.tmdb.org/t/p/original${result[currentIndex]?.backdrop_path}`}
          alt=""
        />
      </ImageDiv>
      <Indicators>
        <LeftIcon
          onClick={() => {
            currentIndex === 0
              ? changeIndex(result.length - 1)
              : changeIndex(currentIndex - 1);
          }}
        >
          <FaAngleLeft />
        </LeftIcon>

        <Indicator
          onClick={() => {
            currentIndex === 0
              ? changeIndex(result.length - 1)
              : changeIndex(currentIndex - 1);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${
              result[currentIndex === 0 ? result.length - 1 : currentIndex - 1]
                ?.backdrop_path
            }`}
            alt=""
          />
        </Indicator>
        <Indicator style={{ transform: "scale(1.2)" }}>
          <img
            src={`https://image.tmdb.org/t/p/original${result[currentIndex]?.backdrop_path}`}
            alt=""
          />
        </Indicator>
        <Indicator
          onClick={() => {
            changeIndex((currentIndex + 1) % result.length);
          }}
          style={{ transform: "scale(1.1)" }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${
              result[(currentIndex + 1) % result.length]?.backdrop_path
            }`}
            alt=""
          />
        </Indicator>
        <Indicator
          onClick={() => {
            changeIndex((currentIndex + 2) % result.length);
          }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original${
              result[(currentIndex + 2) % result.length]?.backdrop_path
            }`}
            alt=""
          />
        </Indicator>
        <RightIcon
          rightIcon
          onClick={() => {
            changeIndex((currentIndex + 1) % result.length);
          }}
        >
          <FaAngleRight />
        </RightIcon>
      </Indicators>

      <Text>
        <h1>{result[currentIndex]?.original_title}</h1>
        <p>{result[currentIndex]?.overview}</p>
        <h3>release_date : {result[currentIndex]?.release_date}</h3>
        <Imdb>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />
          <p>{result[currentIndex]?.vote_average}</p>
          <p> ~{result[currentIndex]?.original_language}</p>
        </Imdb>

        <Link to={`/movies/${result[currentIndex]?.id}`}>
          <Btn>Watch</Btn>
        </Link>
      </Text>
    </Caurosals>
  );
};

export default Caurosal;
