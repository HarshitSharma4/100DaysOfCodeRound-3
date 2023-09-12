import { MdKeyboardArrowRight } from "react-icons/md";

const CardHome = (props) => {
  const CardData = props;
  if (CardData === undefined || CardData === null) {
    return <></>;
  }
  return (
    <div className="Card h-96 w-80">
      <div className="img">
        <img src={CardData?.img} alt={CardData?.alt} />
      </div>
      <div className="content">
        <div className="title text-3xl my-4 font-semibold">
          {CardData?.title}
        </div>
        <div className="body my-3 text-base">{CardData?.body}</div>
        <div className="footer text-blue-700 my-7 flex justify-between font-medium hover:underline ">
          {CardData?.button.map((value, key) => {
            return (
              <div key={key}>
                <a
                  href={value?.link}
                  className="flex items-center justify-start hover:gap-3"
                >
                  {value?.text}
                  <MdKeyboardArrowRight className="text-2xl" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardHome;
