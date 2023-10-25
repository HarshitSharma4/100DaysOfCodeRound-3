import { twMerge } from "tailwind-merge";
import { useTheme } from "../Context/Theme";
import { profileImage } from "../Components/Navgation/NavData";
import { BsDownload } from "react-icons/bs";
const Home = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <div
      className="flex justify-evenly flex-col lg:flex-row-reverse items-center gap-7 flex-wrap p-4 my-20 md:my-24 "
      id="home"
    >
      <div className="h-72 w-72 md:h-96 md:w-96 rounded-[100%] lg:h-[30rem] lg:w-[23rem] overflow-hidden lg:rounded-lg">
        <img
          className="h-full w-full object-cover "
          src={profileImage.img4}
          alt=""
        />
      </div>
      <div className="p-4 md:basis-[70%] lg:basis-[50%]">
        <h1 className="text-2xl md:text-3xl mt-10 mb-5">
          Hey,I am{" "}
          <span className={twMerge(theme.colorTheme.text)}>Harshit Sharma</span>
        </h1>
        <h2 className="text-gray-400  text-lg md:text-xl mb-10">
          Frontend Developer
        </h2>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio cumque
          incidunt deserunt alias recusandae quis corporis quasi blanditiis
          facilis possimus. Ipsa ducimus deserunt a amet dignissimos impedit
          aspernatur dolore, consequatur harum tempora quasi fugiat illo at odio
          explicabo laboriosam necessitatibus voluptate exercitationem, rem
          beatae repellat error atque minus? Quaerat, aperiam.
        </p>
        <a
          href=""
          download={true}
          className={twMerge(
            "flex my-10 gap-4 items-center text-lg h-12 w-48 px-7 rounded-lg border-2 border-solid",
            theme.colorTheme.text,
            theme.colorTheme.btn,
            theme.colorTheme.border
          )}
        >
          <BsDownload />
          Download
        </a>
      </div>
    </div>
  );
};

export default Home;
