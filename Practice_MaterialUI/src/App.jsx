import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import "./index.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page3 from "./pages/Page3";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/template2" element={<Page2 />}></Route>
        <Route path="/template3" element={<Page3 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
