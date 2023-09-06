import styled from "styled-components";

export const Caurosals = styled.div`
  height: 65%;
  width: 100%;
  overflow: hidden;
  margin: 1rem auto;

  position: relative;
`;
export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
export const Indicators = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  gap: 1rem;
  bottom: 20px;
  right: 20px;
  width: 39%;
  height: 25%;
  z-index: 5;
  @media (max-width: 550px) {
    display: none;
  }
`;
export const Indicator = styled.div`
  height: 70px;
  width: 100px;
  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    /* filter: blur(0.5rem); */
  }
`;
export const Text = styled.div`
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background-color: #00000035;
  & h1 {
    margin-top: 7.8rem;
    font-size: 3rem;
    font-weight: 900;
  }
  @media (max-width: 700px) {
    & h1 {
      margin: 0;
    }
  }
  & p {
    font-size: 1rem;
    line-height: 1.5rem;
    margin: 1rem 0;
  }
`;
export const Btn = styled.button`
  height: 55px;
  font-size: 1.3rem;
  width: 150px;
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
export const LeftIcon = styled.div`
  position: absolute;
  z-index: 6;
  left: 0;
  top: 50%;
  transform: translatey(-50%);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  background-color: #ac1b1b;
  height: 30px;
  width: 30px;
  border-radius: 100%;
`;
export const RightIcon = styled.div`
  position: absolute;
  z-index: 6;
  right: 0;
  top: 50%;
  transform: translatey(-50%);
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  background-color: #ac1b1b;
  height: 30px;
  width: 30px;
  border-radius: 100%;
`;
export const Imdb = styled.div`
  display: flex;
  justify-content: left;

  & img {
    margin: 1rem;
    height: 35px;
    width: 55px;
    border-radius: 10px;
    object-fit: cover;
  }
  & p {
    font-size: 1.5rem;
    margin: 1.3rem;
  }
`;
