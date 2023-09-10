import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Microsoft365" element={<WorkInProgress />}></Route>
        <Route path="/Teams" element={<WorkInProgress />}></Route>
        <Route path="/Windows" element={<WorkInProgress />}></Route>
        <Route path="/Surface" element={<WorkInProgress />}></Route>
        <Route path="/Xbox" element={<WorkInProgress />}></Route>
        <Route path="/Support" element={<WorkInProgress />}></Route>
        <Route path="/Sign In" element={<WorkInProgress />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

const WorkInProgress = () => {
  return (
    <h1 className="text-7xl h-screen w-screen bg-gray-400 grid place-items-center">
      Work In Progress
    </h1>
  );
};
