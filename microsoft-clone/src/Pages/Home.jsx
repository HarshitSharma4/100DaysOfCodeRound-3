import Navigation from "../Components/NavigationHome";
import Carousel from "../Components/CarouselHome";
import { Microsoft, CardFirst } from "../Components/Data";
import CardHome from "../Components/CardHome";
import { Higlight } from "../Components/Data";
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
      <div className="card w-[90%] my-28 mx-auto flex gap-7 items-center justify-center flex-wrap">
        {CardFirst.map((value, index) => {
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
      <div className="highlight">
        <div className="img">
          <img src={Higlight.img} alt={Higlight.alt} />
        </div>
        <div className="data">
          <div>{Higlight.status}</div>
          <div className="title">{Higlight.title}</div>
          <div className="body">{Higlight.body}</div>
          <div>
            <button className="">{Higlight.btnName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
