import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Reducers/userSlice";
import image from "../assets/OIG.jpeg";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 h-[65%] w-[65%] m-auto rounded-lg border-2 border-gray-700">
      <div
        className="image hidden md:block overflow-hidden"
        style={{
          clipPath:
            "polygon(100% 0, 91% 4%, 91% 95%, 100% 100%, 0 100%, 0% 60%, 0 0)",
        }}
      >
        <img className="object-cover w-full h-full" src={image} alt="" />
      </div>
      <div className="login">
        <form
          className="flex flex-col gap-7 items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              login({
                name: name,
                email: email,
                password: password,
                logIn: true,
              })
            );
            Navigate("/");
          }}
        >
          <h1 className="text-3xl mb-5  text-blue-500 font-bold">
            Create Account
          </h1>
          <input
            className="border-b-2 outline-none h-10 border-blue-500"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            className="border-b-2 outline-none h-10 border-blue-500"
            type="email"
            placeholder="enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="border-b-2 outline-none h-10 border-blue-500"
            type="password"
            placeholder="enter yur password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            type="submit"
            className="py-3 m-4 px-7 rounded-md text-lg text-gray-50 bg-blue-500 hover:bg-blue-400 hover:text-gray-100s"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
