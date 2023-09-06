import styled from "styled-components";

export const HomeDiv = styled.div`
  flex-basis: 85%;
  height: 100%;
  @media (max-width: 900px) {
    flex-basis: 100%;
  }
`;

export const HomeData = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  padding: 0rem 1rem;
`;
export const Type = styled.h1`
  margin: 2rem 0;
  font-weight: 900;
`;
export const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;
