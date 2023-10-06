import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../Redux/Reducers/userSlice";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const dispatch = useDispatch();
  const loginData = localStorage.getItem("user");

  useEffect(() => {
    if (loginData !== null && loginData !== undefined) {
      dispatch(login(JSON.parse(loginData)));
    } else {
      alert("need to logIn");
    }
  }, []);
  return (
    <div className="user h-[40vh] grid place-content-center gap-7 font-bold text-4xl text-cyan-700">
      <div>
        Name :
        {user !== null && user.payload !== null
          ? user?.payload.name
          : "not present"}
      </div>
      <div>
        Email :
        {user !== null && user.payload !== null
          ? user?.payload.email
          : "not present"}
      </div>

      {user === null || user === undefined ? (
        <Link to="/logIn" className="flex gap-4 items-center ">
          <BiLogIn />
          <h1>Log In</h1>
        </Link>
      ) : (
        <div
          className="flex gap-4 items-center cursor-pointer"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <BiLogOut />
          <h1>LogOut</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
