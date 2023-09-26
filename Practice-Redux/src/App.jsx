// import Page1 from "./pages/Page1";
// import Page2 from "./pages/Page2";
// import "./index.css";
// import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      <Routes>
        <Route to="/" element={<h1>Home</h1>}></Route>
        <Route to="/page2" element={<h2>page2</h2>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
