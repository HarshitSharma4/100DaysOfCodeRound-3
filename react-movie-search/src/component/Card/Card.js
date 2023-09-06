import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import {
  CardDiv,
  Image,
  Title,
  Body,
  Btn,
  Container,
  Footer,
  Star,
} from "./Card.style";
import { Link } from "react-router-dom";
function Card(props) {
  const [fullMode, setFullMode] = useState(false);
  const [Height, setHeight] = useState("30%");
  if (props.id === undefined || props.id === null) {
    return <></>;
  }
  return (
    <CardDiv
      onMouseEnter={() => {
        setFullMode(true);
        setHeight("100%");
      }}
      onMouseLeave={() => {
        setFullMode(false);
        setHeight("30%");
      }}
    >
      <Image>
        <img
          src={`https://image.tmdb.org/t/p/original${props?.imgSrc}`}
          alt="card.."
        />
      </Image>
      <Container style={{ height: Height }}>
        <Title>
          <h1>{props?.title}</h1>
          {!fullMode && (
            <Star>
              <AiFillStar /> {props?.star}
            </Star>
          )}
        </Title>
        {fullMode && (
          <>
            <Body>
              {" "}
              <p>{props?.body}</p>
            </Body>
            <Footer>
              <Link to={`/movies/${props?.id}`}>
                <Btn>Watch</Btn>
              </Link>
            </Footer>
          </>
        )}
      </Container>
    </CardDiv>
  );
}

export default Card;
