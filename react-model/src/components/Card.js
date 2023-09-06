import React from "react";
//import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Card(props) {
  const [fullMode, setFullMode] = useState(false);
  const [Height, setHeight] = useState("30%");
  let containerColor = props.color;
  return (
    <div className="Card">
      <div className="image">
        <img src={props.imgSrc} alt="card.." />
      </div>
      <div
        className="container"
        style={{ backgroundColor: containerColor, height: Height }}
      >
        {!fullMode && (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="icon"
            style={{ backgroundColor: containerColor }}
            onClick={() => {
              setHeight("100%");
              setFullMode(true);
            }}
          />
        )}
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="body">{fullMode && <p>{props.body}</p>}</div>
        <div className="Footer">
          {fullMode && (
            <button
              className="done"
              onClick={() => {
                setHeight("30%");
                setFullMode(false);
              }}
            >
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
