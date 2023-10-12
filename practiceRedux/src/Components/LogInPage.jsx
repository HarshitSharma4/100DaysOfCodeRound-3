import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Reducers/userSlice";
import image from "../assets/OIG.jpeg";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

    return passwordRegex.test(password);
  };
  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (!/^[A-Za-z\s]{2,30}$/.test(name)) {
      setNameError(
        "Name must be between 2 and 30 characters, only letters and spaces."
      );
      isValid = false;
    } else {
      setNameError("");
    }

    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Invalid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one special character, one uppercase letter, and one lowercase letter, and be at least 8 characters long."
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(
        login({
          name: name,
          email: email,
          password: password,
          logIn: true,
        })
      );
      Navigate("/");
    }
  };

  return (
    <div className="grid place-items-center grid-cols-1 md:grid-cols-2 h-[65%] w-[100%] md:w-[65%] m-auto rounded-lg border-2 border-gray-700">
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
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl mb-5 text-blue-500 font-bold">
            Create Account
          </h1>
          <input
            className={`border-b-2 outline-none h-10 border-blue-500 ${
              nameError ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {nameError && <p className="text-red-500">{nameError}</p>}
          <input
            className={`border-b-2 outline-none h-10 border-blue-500 ${
              emailError ? "border-red-500" : ""
            }`}
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
          <input
            className={`border-b-2 outline-none h-10 border-blue-500 ${
              passwordError ? "border-red-500" : ""
            }`}
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
          <button
            type="submit"
            className="py-3 m-4 px-7 rounded-md text-lg text-gray-50 bg-blue-500 hover:bg-blue-400 hover:text-gray-100"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
