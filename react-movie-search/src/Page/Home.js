import { React, useEffect, useState } from "react";
import { HomeDiv, Container, HomeData, Type } from "./Home.style";
import Caurosal from "../component/caurosal/Caurosal";

import Card from "../component/Card/Card";
import axios from "axios";
const Home = () => {
  const [populerMovies, setPopularMovies] = useState({});
  const [topratedMovies, settopratedMovies] = useState([]);
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    ).then((result) => {
      setPopularMovies(result?.data);
    });

    axios(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    ).then((result) => {
      settopratedMovies(result?.data.results);
    });
  }, []);
  return (
    <HomeDiv>
      <HomeData>
        {populerMovies !== {} && <Caurosal data={populerMovies} />}
        <Type> Continue Watching</Type>
        <Container>
          {topratedMovies.map((movies) => {
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

export default Home;
