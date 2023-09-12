import LogoImg from "../assets/logo.png";
import icon from "../assets/icon.png";
import carosal_1 from "../assets/carosal-1.avif";
import carosal_2 from "../assets/carosal-2.avif";
import windows from "../assets/windowsicon.webp";
import xbox from "../assets/xbox.webp";
import surface from "../assets/surface.webp";
import surfaceLaptop from "../assets/Surface-Laptop.webp";
import cardContent from "../assets/Content-Card.avif";
import gldnXsx from "../assets/gldn-XSX.webp";
import gldnXss from "../assets/gldn-XSS-CP.webp";
import HiglightImg from "../assets/Hidglight.avif";

export const Logo = { Img: LogoImg };
export const Higlight = {
  img: HiglightImg,
  alt: `A painting of characters from Starfield, against a starry background.`,
  status: `New`,
  title: `For all, into the Starfield`,
  body: `Create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity’s greatest mystery. `,
  btnName: `Get Starfield now `,
};

export const Icon = {
  Img: icon,
};

export const CarouselData = [
  {
    Img: carosal_1,
    Title: "Surface Laptop 5",
    Body: `Sophisticated style and multitasking speed powered by 12th Gen Intel® Core, with Windows 11`,
    Link: `/`,
  },
  {
    Img: carosal_2,
    Title: `Surface Pro 9`,
    Body: `Tablet versatility and laptop power — all in one ultra-portable device`,
    Link: `/`,
  },
];

export const Microsoft = [
  {
    img: windows,
    title: `Choose your Microsoft 365`,
    link: `https://www.microsoft.com/en-in/microsoft-365/compare-all-microsoft-365-products?icid=MSCOM_QL_M365`,
  },
  {
    img: surface,
    title: `Explore Surface devices`,
    link: `https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface`,
  },
  {
    img: xbox,
    title: `Buy Xbox games and consoles`,
    link: `https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox`,
  },
  {
    img: windows,
    title: `Get Windows 11 `,
    link: `https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows`,
  },
];

export const CardFirst = [
  {
    img: surfaceLaptop,
    alt: "Surface Laptop Studio with keyboard attached, propped on kickstand.",
    title: `Surface Laptop Studio`,
    body: `Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.  `,
    button: [
      {
        text: `Learn more`,
        link: "https://www.microsoft.com/en-in/surface/devices/surface-laptop-studio?icid=mscom_marcom_CPH1a_SurfaceLaptopStudio",
      },
    ],
  },
  {
    img: cardContent,
    alt: `A young woman works on a Surface laptop while Microsoft 365 App icons whirl around her head.`,
    title: `Microsoft 365`,
    body: `Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps.`,
    button: [
      {
        text: `For one person`,
        link: `https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf?icid=mscom_marcom_CPH2a_M365Personal`,
      },
      {
        text: `For up to six people`,
        link: `https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_CPH2b_M365Family`,
      },
    ],
  },
  {
    img: gldnXsx,
    alt: `An Xbox Series X console and an Xbox controller`,
    title: `Xbox Series X`,
    body: `The fastest, most powerful Xbox ever.`,
    button: [
      {
        text: `Shop Xbox Series X`,
        link: `https:80//www.xbox.com/en-in/consoles/xbox-series-x?icid=mscom_marcom_CPH3a_XboxSeriesX`,
      },
    ],
  },
  {
    img: gldnXss,
    alt: `An Xbox Series S console and an Xbox controller`,
    title: `Xbox Series S`,
    body: `Next-gen performance in the smallest Xbox ever.`,
    button: [
      {
        text: `Shop Xbox Series S`,
        link: `https://www.xbox.com/en-in/consoles/xbox-series-s?icid=mscom_marcom_CPH4a_XboxSeriesS`,
      },
    ],
  },
];
