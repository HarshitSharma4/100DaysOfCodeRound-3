import Navigation from "../Components/NavigationHome";
import Carousel from "../Components/CarouselHome";
import GotoTop from "../Components/GotoTop";
import {
  Microsoft,
  CardFirstHomeSection,
  CardSecondHomeSection,
} from "../Components/Data";
import CardHome from "../Components/CardHome";
import { Higlight } from "../Components/Data";
import { BiLogoFacebook, BiLogoYoutube } from "react-icons/bi";
import { Xmark } from "../Components/Data";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Navigation />
      <Carousel />
      <div className="flex w-[70%] text-center my-16 mx-auto items-center justify-center gap-10 flex-wrap text-blue-500 underline font-semibold">
        {Microsoft.map((value, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center flex-col gap-4"
            >
              <img src={value.img} alt="icon" />
              <a href={value.link}>{value.title}</a>
            </div>
          );
        })}
      </div>
      <div className="card w-[90%] my-28 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-stretch">
        {CardFirstHomeSection.map((value, index) => {
          return (
            <div key={index}>
              <CardHome
                img={value?.img}
                alt={value?.alt}
                title={value?.title}
                body={value?.body}
                button={value?.button}
              />
            </div>
          );
        })}
        <GotoTop />
      </div>
      <div className="highlight grid grid-cols-1 w-[90%] m-auto lg:relative">
        <div className="img  overflow-hidden m-auto ">
          <img src={Higlight.img} className="" alt={Higlight.alt} />
        </div>
        <div className="data p-4 m-2 lg:absolute lg:right-0 lg:left-[50%] lg:p-24 lg:top-[50%] lg:-translate-y-[50%] z-10 lg:text-white">
          <div className="bg-yellow-400 text-base inline-block px-3 py-1 my-1 text-black font-semibold">
            {Higlight.status}
          </div>
          <div className="title text-2xl my-4 font-semibold lg:font-extrabold lg:text-3xl">
            {Higlight.title}
          </div>
          <div className="body text-base lg:text-lg">{Higlight.body}</div>
          <div>
            <button className="p-2 my-4 bg-blue-600 text-white font-bold lg:font-bold hover:bg-blue-700 lg:text-lg">
              {Higlight.btnName}
            </button>
          </div>
        </div>
      </div>
      <div className="w-[90%] my-28 mx-auto ">
        <h1 className="block">For business</h1>
        <div className="card grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 place-items-stretch">
          {CardSecondHomeSection.map((value, index) => {
            return (
              <div key={index}>
                <CardHome
                  img={value?.img}
                  alt={value?.alt}
                  title={value?.title}
                  body={value?.body}
                  button={value?.button}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 align-middle justify-start w-[90%] m-auto">
        <h1 className="text-xl"> Follow Microsoft:</h1>
        <a href="https://www.facebook.com/MicrosoftIndia">
          <BiLogoFacebook className="text-3xl" />
        </a>
        <a href="https://twitter.com/microsoftindia">
          <img
            src={Xmark.Xicon}
            className="h-9 w-9 -translate-y-1"
            alt="xmark"
          />
        </a>
        <a href="https://www.youtube.com/user/IndiaMicrosoftVideos">
          <BiLogoYoutube className="text-4xl -translate-y-1" />
        </a>
      </div>

      <Footer />
    </>
  );
};

export default Home;
