import { FaEarthAmericas } from "react-icons/fa6";
import { FooterData, FooterNav } from "./Data";
import { MdPrivacyTip } from "react-icons/md";
//import { rightWrong } from "../assets/rightAndwrong.svg";
const Footer = () => {
  return (
    <div className=" bg-[#f2f2f2] px-16">
      <div className="footer grid grid-cols-1 mt-8 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-baseline py-10 ">
        {FooterData.map((value, index) => {
          return (
            <div key={index} className="grid  text-start ">
              <h1 className="text-base font-bold my-2 text-gray-700">
                {value.title}
              </h1>

              {value.subtitle.map((value, key) => {
                return (
                  <a
                    href={value.link}
                    className="text-xs my-2 text-gray-500 hover:underline hover:text-black"
                    key={key}
                  >
                    {value.text}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="flex justify-between align-middle gap-4 flex-wrap">
        <div className="flex gap-4 flex-wrap text-sm ">
          <div className="flex gap-2 items-center flex-wrap text-gray-500">
            <FaEarthAmericas />{" "}
            <a href={FooterNav.locLink} className="hover:underline ">
              {FooterNav?.location}
            </a>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            <MdPrivacyTip />{" "}
            <a href={FooterNav.choLink} className="hover:underline ">
              {FooterNav?.Choices}
            </a>
          </div>
        </div>

        <div className="flex gap-4 flex-wrap text-xs text-gray-500">
          <div className="flex gap-4 flex-wrap">
            {FooterNav.navItem.map((value, key) => {
              return (
                <a
                  href={value?.link}
                  key={key}
                  className=" my-2  hover:underline hover:text-black"
                >
                  {value?.text}
                </a>
              );
            })}
          </div>
          <div className=" my-2  ">{FooterNav?.mark}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
