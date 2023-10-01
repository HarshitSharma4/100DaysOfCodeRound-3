import Products from "./Components/Products";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
function App() {
  return (
    <div>
      <Router>
        <h1 className="w-full px-9 my-6 text-4xl font-extrabold text-zinc-900 border-b-4 border-gray-400">
          Fake Shop
        </h1>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route>404 product not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
