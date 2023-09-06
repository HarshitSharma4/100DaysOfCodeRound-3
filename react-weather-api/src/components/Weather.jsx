import { React, useEffect, useState, useRef } from "react";
import axios from "axios";
import "../components/weather.css";
import * as math from "mathjs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Humidity_icon from "../assets/images/Humidity.png";
import Clouds_icon from "../assets/images/Clouds.png";
import Haze_icon from "../assets/images/Haze.png";
import Mist_icon from "../assets/images/Mist.png";
import Clear_icon from "../assets/images/Clear.png";
import Rain_icon from "../assets/images/Rain.png";
import Snow_icon from "../assets/images/Snow.png";
import Wind_icon from "../assets/images/Wind.png";

import Humidity_bg from "../assets/backgroundImage/Humidity.jpg";
import Clouds_bg from "../assets/backgroundImage/Clouds.jpg";
import Haze_bg from "../assets/backgroundImage/Haze.jpg";
import Mist_bg from "../assets/backgroundImage/Mist.jpg";
import Clear_bg from "../assets/backgroundImage/Clear.jpg";
import Rain_bg from "../assets/backgroundImage/Rain.jpg";
import Snow_bg from "../assets/backgroundImage/Snow.jpg";
import Wind_bg from "../assets/backgroundImage/Wind.jpg";

const Weather = () => {
  const [weatherImage, setweatherImage] = useState(Rain_icon);
  const [bg, setbg] = useState(Rain_bg);

  const [date, setdate] = useState(new Date());

  const apikey = "11112d61dad6beb077f4c80f5b7b4156";
  // const api = "e7a1c0cd3e2a71f0724b9031308f9ecd";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const apiEnd = "&appid=";
  const [apiData, setapiData] = useState({});
  const [isOpen, setisopen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const fetchDataApi = (city) => {
    axios(`${apiUrl}${city}${apiEnd}${apikey}`)
      .then((res) => {
        setapiData(res.data);
        console.log(apiData);
        setImage(apiData?.weather[0]?.main);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setInterval(() => setdate(new Date()), 30000);
    fetchDataApi("udaipur");
  }, []);
  const inputElement1 = useRef();
  const inputElement2 = useRef();
  const handelsearch1 = () => {
    if (searchText !== "") {
      fetchDataApi(searchText);
      setSearchText("");
      inputElement1.current.value = "";
    }
  };
  const handelsearch2 = () => {
    if (searchText !== "") {
      fetchDataApi(searchText);
      setSearchText("");
      inputElement2.current.value = "";
      setisopen(false);
    }
    setisopen(!isOpen);
  };
  const handelChange = (event) => {
    setSearchText(event.target.value);
  };

  const setImage = (image) => {
    switch (image) {
      case "Rain":
        setweatherImage(Rain_icon);
        setbg(Rain_bg);
        break;
      case "Humidity":
        setweatherImage(Humidity_icon);
        setbg(Humidity_bg);
        break;
      case "Clouds":
        setweatherImage(Clouds_icon);
        setbg(Clouds_bg);
        break;
      case "Haze":
        setweatherImage(Haze_icon);
        setbg(Haze_bg);
        break;
      case "Mist":
        setweatherImage(Mist_icon);
        setbg(Mist_bg);
        break;
      case " Clear":
        setweatherImage(Clear_icon);
        setbg(Clear_bg);
        break;
      case "Clear":
        setweatherImage(Clear_icon);
        setbg(Clear_bg);
        break;
      case "Snow":
        setweatherImage(Snow_icon);
        setbg(Snow_bg);
        break;
      case "Wind":
        setweatherImage(Wind_icon);
        setbg(Wind_bg);
        break;

      default:
    }
  };
  return (
    <div>
      <div
        id="background-weather"
        style={{
          backgroundImage: `linear-gradient(
      rgba(101, 120, 224, 0.1),
      rgba(96, 94, 116, 0.6)
    ),url(${bg})`,
        }}
      >
        <div id="weather">
          <h1 id="temprature"> {math.floor(apiData?.main?.temp - 273)}°C</h1>

          <div>
            {" "}
            <h1 id="location">{apiData?.name}</h1>
            <p id="time-date">
              {" "}
              {date.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>

          <img id="weather-image" src={weatherImage} alt="rain" />
        </div>
        <div id="information">
          <div className="search">
            <input
              type="text"
              placeholder="Aother Location"
              id="city"
              onChange={handelChange}
              ref={inputElement1}
            />
            <button id="search" onClick={handelsearch1}>
              {" "}
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                />
              </svg>
            </button>

            <hr width="70%" />
            <div className="suggestion">
              <h3 className="jaipur">Jaipur</h3>
              <h3 className="bangalore">Bangalore</h3>
              <h3 className="mumbai">Mumbai</h3>
              <h3 className="goa">Goa</h3>
            </div>
            <hr />
          </div>
          <div className="isopen">
            {isOpen && (
              <input
                type="text"
                placeholder="Enter City"
                onChange={handelChange}
                ref={inputElement2}
              />
            )}
            <button className="st-btn" onClick={handelsearch2}>
              <FaMagnifyingGlass />
            </button>
          </div>
          <div className="weather-detail">
            <h2>Weather details</h2>
            <div className="detail">
              <div className="cloud">
                <h3>Clouds</h3>
                <h3 id="cloud">{apiData?.clouds?.all}%</h3>
              </div>
              <div className="humadity">
                <h3>Humidity</h3>
                <h3 id="humadity">{apiData?.main?.humidity}%</h3>
              </div>
              <div className="wind">
                <h3>Wind</h3>
                <h3 id="wind">{apiData?.wind?.speed}km/h</h3>
              </div>
              <div className="rain">
                <h3>Rain</h3>
                <h3 id="rain">{apiData?.main?.humidity - 20}%</h3>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
