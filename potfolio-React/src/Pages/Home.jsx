import { useTheme } from "../Context/Theme";
const Home = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <div className="h-screen" id="home">
      <h1>
        Hey,I am{" "}
        <span className={theme.colorTheme === "Green" && "text-green"}>
          Harshit Sharma
        </span>
      </h1>
    </div>
  );
};

export default Home;
