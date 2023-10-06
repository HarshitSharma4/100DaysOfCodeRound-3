import Products from "./Components/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import NavBar from "./Components/NavBar";
import LogInPage from "./Components/LogInPage";
import Profile from "./Components/Profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "./Redux/Reducers/userSlice";
import AddToCard from "./Components/AddToCard";
function App() {
  const loginData = localStorage.getItem("user");
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginData !== null && loginData !== undefined) {
      dispatch(login(JSON.parse(loginData)));
    } else {
      alert("need to logIn");
    }
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/product/:id" exact element={<ProductDetail />} />
          <Route path="/Login" exact element={<LogInPage />} />
          <Route path="/Profile" exact element={<Profile />} />
          <Route path="/AddToCard" exact element={<AddToCard />} />
          <Route path="/*">404 product not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
