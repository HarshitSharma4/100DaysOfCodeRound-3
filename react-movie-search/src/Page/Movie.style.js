import styled from "styled-components";

export const MoviePage = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  padding: 2rem;
  height: 170vh;
`;
export const Back = styled.button`
  background-color: transparent;
  font-size: 1.5rem;
  color: #fff;
  border: solid 2px #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  &:hover {
    border: solid 2px black;
  }
`;
export const Page = styled.div``;
export const Movie = styled.div`
  position: relative;
  height: 590px;
  width: 80%;

  margin: auto;
`;
export const Poster = styled.div`
  position: absolute;
  top: 0;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  z-index: 0;
  &img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const MovieImage = styled.div`
  height: 430px;
  width: 400px;
  flex-basis: 70%;
  border-radius: 10px;
  overflow: hidden;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  align-items: center;
  padding: 1rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const Genre = styled.div`
  height: 40px;
  font-size: 1rem;

  color: #f6fefe;
  outline: none;
  padding: 0.3rem;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid #f6fefe;
  &:hover {
    border: 3px solid #ac1b1b;
    background-color: #ac1b1b;
  }
`;

export const Production = styled.div`
  text-align: center;
  margin: 3rem auto;
`;

export const Btn = styled.button`
  height: 55px;
  font-size: 1.3rem;
  width: 200px;
  background-color: #ac1b1b;
  color: #f6fefe;
  padding: 0.5rem 1rem;
  outline: none;
  border: 3px solid #ac1b1b;
  border-radius: 15px;
  &:hover {
    background-color: transparent;
    color: #ac1b1b;
  }
`;

export const ProductionItem = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  &p {
    margin: 1rem auto;
  }
  & img {
    width: 150px;
    height: 70px;
    object-fit: contain;
    background-color: #fff;
  }
`;

export const Intro = styled.div`
  padding: 1rem;
  & div {
    display: flex;
    gap: 1rem;
    margin: 1rem;
  }

  & p,
  & h1,
  & h3 {
    margin: 1rem;
  }
`;
