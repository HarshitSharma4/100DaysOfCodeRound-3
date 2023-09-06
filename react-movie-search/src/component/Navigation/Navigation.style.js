import { styled } from "styled-components";

export const Navigator = styled.div`
  padding: 1.1rem;
  //background-color: "#0d0202";
  flex-basis: 15%;
  @media (max-width: 900px) {
    position: fixed;
    z-index: 9;
    bottom: 0;
    background-color: black;
    width: 100%;
  }
`;
export const NavLogo = styled.div`
  font-size: 1rem;
  display: flex;
  gap: 1.5rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const Nlogo = styled.div`
  width: 31px;
  height: 31px;
  border-radius: 100%;
  font-size: 0.9rem;
  background-color: #ac1b1b;
  display: grid;
  place-items: center;
`;
export const NavHorizontal = styled.div`
  height: 100%;

  padding: 0%.5rem;
  border-right: 2px solid #a4a4a4;
  @media (max-width: 900px) {
    & h4 {
      display: none;
    }
  }
`;

export const NavLink = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  a {
    font-size: 1.2rem;
    padding: 0.7rem;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: left;
    &:hover {
      background-color: #931f1f;
    }
  }
  & p {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    display: block;
  }
  @media (max-width: 900px) {
    & p {
      display: none;
    }
    & a {
      flex-basis: 25%;
      justify-content: center;
    }
    flex-direction: row;

    justify-content: space-between;
  }
`;
