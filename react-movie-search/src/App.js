import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import Home from "./Page/Home";
import Browse from "./Page/Browse";
import MovieSearch from "./Page/MovieSearch";
const placeBetween = {
  height: "99vh",
  width: "99%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "black",
  borderRadius: "15px",
  padding: "0",
};
function App() {
  return (
    <div style={placeBetween}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/:type" element={<Browse />}></Route>
          <Route path="/movies/:id" element={<MovieSearch />}></Route>
          <Route path="/*" element={<WorkInProgress heading="Error" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

function WorkInProgress(props) {
  return (
    <div
      style={{
        flexBasis: "85%",
        display: "grid",
        placeItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{props.heading}</h1>
      <h2>Work in Progress</h2>
    </div>
  );
}
