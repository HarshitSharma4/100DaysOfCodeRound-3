import { styled } from "styled-components";

export const CardDiv = styled.div`
  width: 315px;
  height: 470px;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
`;
export const Image = styled.div`
  img {
    width: 315px;
    height: 470px;
    object-fit: cover;
  }
`;
export const Title = styled.div`
  h1 {
    font-size: 1.7rem;
    margin: 0.7rem;
    line-height: 1.5rem;
  }
`;
export const Body = styled.div`
  p {
    font-size: 1rem;
    line-height: 1.2rem;
    padding: 0.7rem;
  }
`;
export const Btn = styled.div`
  height: 45px;
  font-size: 1.2rem;
  position: absolute;
  padding: 0.3rem;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  background-color: #ac1b1b;
  color: #f6fefe;
  outline: none;
  border: 3px solid #ac1b1b;
  border-radius: 20px;
  &:hover {
    background-color: transparent;
    border: 3px solid #f6fefe;
  }
`;
export const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  width: 100%;
  overflow: scroll;
  text-align: left;
  color: #fff;
  background-color: #ac1b1b97;
`;
export const Footer = styled.div`
  text-align: center;
`;
export const Star = styled.div`
  height: 40px;
  width: 100px;
  margin: 0 0.7rem;
  font-size: 1.5rem;
`;
