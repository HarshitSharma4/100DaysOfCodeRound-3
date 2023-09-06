import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MoviePage,
  Back,
  Page,
  MovieImage,
  MovieDetail,
  Movie,
  Poster,
  Genre,
  Production,
  Btn,
  ProductionItem,
  Intro,
} from "./Movie.style";

import { BiArrowBack } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";
const MovieSearch = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData(id);
    window.scrollTo(0, 0);
  }, []);

  const getData = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <MoviePage>
      <Back>
        <BiArrowBack />
      </Back>
      <Page>
        <Movie>
          <Poster>
            {" "}
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt=""
            />
          </Poster>

          <MovieDetail>
            <MovieImage>
              <img
                src={`https://image.tmdb.org/t/p/original${
                  currentMovieDetail ? currentMovieDetail.backdrop_path : ""
                }`}
                alt=""
              />
            </MovieImage>
            <Intro>
              <h1>
                {currentMovieDetail ? currentMovieDetail.original_title : ""}
              </h1>
              <p>{currentMovieDetail ? currentMovieDetail.tagline : ""}</p>
              <p>
                {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
                <span>
                  {currentMovieDetail
                    ? "(" + currentMovieDetail.vote_count + ") votes"
                    : ""}
                </span>
              </p>
              <p>
                {" "}
                {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
              </p>
              <div>
                {" "}
                {currentMovieDetail
                  ? "Release date: " + currentMovieDetail.release_date
                  : ""}
              </div>
              <div>
                {currentMovieDetail && currentMovieDetail.genres
                  ? currentMovieDetail.genres.map((genre) => (
                      <>
                        <Genre id={genre.id}>{genre.name}</Genre>
                      </>
                    ))
                  : ""}
              </div>
              <h3>Synopsis</h3>
              <p>{currentMovieDetail ? currentMovieDetail.overview : ""}</p>
              <div>
                {currentMovieDetail && currentMovieDetail.homepage && (
                  <a
                    href={currentMovieDetail.homepage}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Btn>
                      Homepage <BsBoxArrowUpRight />
                    </Btn>
                  </a>
                )}
                {currentMovieDetail && currentMovieDetail.imdb_id && (
                  <a
                    href={
                      "https://www.imdb.com/title/" + currentMovieDetail.imdb_id
                    }
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Btn>
                      IMDb <BsBoxArrowUpRight />
                    </Btn>
                  </a>
                )}
              </div>
            </Intro>
          </MovieDetail>
        </Movie>

        <Production>
          <h1>Production companies</h1>
          <ProductionItem>
            {currentMovieDetail &&
              currentMovieDetail.production_companies &&
              currentMovieDetail.production_companies.map((company) => (
                <>
                  {company.logo_path && (
                    <div>
                      <img
                        className="movie__productionComapany"
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          company.logo_path
                        }
                        alt=""
                      />
                      <p>{company.name}</p>
                    </div>
                  )}
                </>
              ))}
          </ProductionItem>
        </Production>
      </Page>
    </MoviePage>
  );
};

export default MovieSearch;
