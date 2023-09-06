import { React, useEffect, useState } from "react";
import { HomeDiv, HomeData, Container, Type } from "./Home.style";
import Card from "../component/Card/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
const Browse = () => {
  const [topratedMovies, settopratedMovies] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData("");
  }, []);
  useEffect(() => {
    getData(type);
  }, [type]);
  const getData = (type) => {
    axios(
      `https://api.themoviedb.org/3/movie/${
        type !== "" ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    ).then((result) => {
      settopratedMovies(result?.data.results);
    });
  };
  return (
    <HomeDiv>
      <HomeData>
        <Type>{(type ? type : "Popular").toUpperCase()} Movies</Type>
        <Container>
          {topratedMovies !== undefined &&
            topratedMovies.map((movies) => {
              return (
                <Card
                  id={movies?.id}
                  imgSrc={movies?.backdrop_path}
                  title={movies?.original_title}
                  star={movies?.vote_average}
                  body={movies?.overview}
                />
              );
            })}
        </Container>
      </HomeData>
    </HomeDiv>
  );
};

export default Browse;
