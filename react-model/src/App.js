import "./App.css";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import Modal from "./components/Modal";
import Card from "./components/Card";
import imgBlackCoffee from "./Aserts/black-coffee-1185883.jpg";
import imgBlackForest from "./Aserts/forest-1400470.jpg";
import imgBlackSun from "./Aserts/sun-1393169.jpg";
import Navbar from "./components/Navbar";
import ImageGallery from "./components/ImageGallery";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/modal" element={<Model />}></Route>
          <Route path="/cards" element={<Cards />}></Route>
          <Route path="/carousel" element={<Carousel index={0} />}></Route>
          <Route path="/imageGallary" element={<ImageGallery />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Model = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className="App-header">
      <h1 className="hey">Hey, Click on the button to open Modal</h1>
      <button
        className="open-btn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open
      </button>

      {openModal && <Modal closeModal={setOpenModal} />}
    </header>
  );
};

const Cards = () => {
  return (
    <main>
      <div className="card-container">
        <Card
          color="#808080a9"
          imgSrc={imgBlackCoffee}
          title="Coffee"
          body="Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks."
        />
        <Card
          color="#37ff00b2"
          imgSrc={imgBlackForest}
          title="Forest"
          body="A forest is an area of land dominated by trees.[1] Hundreds of definitions of forest are used throughout the world, incorporating factors such as tree density, tree height, land use, legal standing, and ecological function"
        />
        <Card
          color="#f73a06ae"
          imgSrc={imgBlackSun}
          title="Sun"
          body="The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth. "
        />
      </div>
    </main>
  );
};

const Home = () => {
  const [isOpen, setisOpen] = useState(false);
  const [showbtn, setshowbtn] = useState(false);
  const paragraphStyle = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      setshowbtn(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);
  return (
    <div className="Home">
      <h1>Introduction</h1>
      <p style={isOpen ? null : paragraphStyle} ref={ref}>
        Orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      {showbtn && (
        <button
          className="show-more"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
          {isOpen ? "Read less.." : "Read More..."}
        </button>
      )}
    </div>
  );
};
