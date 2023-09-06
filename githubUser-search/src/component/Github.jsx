import { FiBox } from "react-icons/fi";
import { BiSun, BiMoon } from "react-icons/bi";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import axios from "axios";
import "./github.css";
const Github = () => {
  const [darkMode, setdarkMode] = useState(true);
  const [searchText, setsearchText] = useState("");
  const [apidata, setapiData] = useState({});
  const handelchange = (event) => {
    setsearchText(event.target.value);
  };
  const keydn = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      getUserData(searchText);
    }
  };
  const apiKey = "https://api.github.com/users/";
  const getUserData = (user) => {
    axios(apiKey + user).then((response) => {
      console.log(response);
      setapiData(response.data);
    });
  };
  useEffect(() => {
    getUserData("unique011");
  }, []);
  return (
    <div
      className="github"
      style={
        darkMode
          ? { backgroundColor: "#242424", color: "rgba(255, 255, 255, 0.87)" }
          : { backgroundColor: "rgba(255, 255, 255, 0.87)", color: "#242424" }
      }
    >
      <div className="header">
        <div className="logo">
          <FiBox />
          <h3>GithubSearch</h3>
        </div>
        <div>
          <button
            className="dark-mode"
            onClick={() => {
              setdarkMode(!darkMode);
            }}
          >
            {darkMode ? <BiSun /> : <BiMoon />}
          </button>
        </div>
      </div>
      <div className="main">
        <div className="repo">
          <h1>
            The best <br />
            repositories
            <br />
            one search away.
          </h1>
          <input
            type="text"
            placeholder="Search"
            onChange={handelchange}
            onKeyDown={keydn}
          />
        </div>
        <div className="result">
          <img src={apidata?.avatar_url} alt="UserAcountImage" />
          <h3>login : {apidata?.login}</h3>
          <h3>Name : {apidata?.name}</h3>
          {/* <h3>Email : {apidata?.email}</h3> */}
          <a
            style={
              darkMode
                ? { color: "rgba(255, 255, 255, 0.87)" }
                : { color: "#242424" }
            }
            href={apidata?.html_url}
          >
            Github
            <BsBoxArrowUpRight />{" "}
          </a>
        </div>
      </div>
      <div className="footer">
        <p>Made with ❤️ by</p>
        <a
          href="https://github.com/unique011"
          style={
            darkMode
              ? { color: "rgba(255, 255, 255, 0.87)" }
              : { color: "#242424" }
          }
        >
          Harshit Sharma
        </a>
      </div>
    </div>
  );
};

export default Github;
