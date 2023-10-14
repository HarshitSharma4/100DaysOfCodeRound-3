import { useTheme } from "../Context/Theme";
const Home = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <div className="h-screen">
      <h1>
        Hey,I am <span className={theme.colorTheme}>Harshit Sharma</span>
      </h1>
    </div>
  );
};

export default Home;
