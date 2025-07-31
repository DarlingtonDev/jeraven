import { ArrowUpRight, PhoneCall } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DeliveryCard } from "./DeliveryCard";
import ScrollToView from "@/utilities/ScrollTo";

const Hero = () => {
  const [bgLoaded, setbgLoaded] = useState(false);

  const topBar = useRef<null | HTMLDivElement>(null);
  const bottomBar = useRef<null | HTMLDivElement>(null);
  const middleBar = useRef<null | HTMLDivElement>(null);

  const deliveryData = [
    {
      transparency: 1,
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
      time: "10:30",
      date: "2025-07-15",
    },
    {
      transparency: 2,
      imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      time: "02:15",
      date: "2025-07-16",
    },
    {
      transparency: 0,
      imageUrl: "https://randomuser.me/api/portraits/men/38.jpg",
      time: "09:00",
      date: "2025-07-17",
    },
  ];

  const GlowingDot = ({ text }: { text: string }) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setActive((prev) => !prev);
      }, 700);

      return () => {
        clearInterval(intervalId);
      };
    }, [active]);
    return (
      <>
        <div className="w-8 h-8 p-1.5  rounded-[50%] bg-white/40 flex justify-center items-center">
          <div className="bg-white w-full h-full p-0.5 rounded-[50%]">
            <div
              className={`${
                active ? "bg-green-700" : "bg-green-500"
              } w-full h-full p-2 rounded-[50%] flex justify-center items-center transition-all duration-700 ease-in-out`}
            >
              <div className="bg-white w-full h-full p-0.5 rounded-[50%]"></div>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-1 -translate-x-1.5 rounded-2xl">
          <p className="font-inter text-[11px] font-medium">{text}</p>
        </div>
      </>
    );
  };

  const Header = () => {
    const [navOpen, setnavOpen] = useState(false);
    useEffect(() => {
      if (navOpen) {
        applyAnimation();
      } else {
        removeAnimation();
      }
    }, [navOpen]);
    function applyAnimation() {
      if (topBar.current && bottomBar.current && middleBar.current) {
        topBar.current.classList.add("collapse-down");
        bottomBar.current.classList.add("collapse-up");
        middleBar.current?.classList.add("rotate-down");
      }
    }

    function removeAnimation() {
      if (topBar.current && bottomBar.current && middleBar.current) {
        topBar.current.classList.remove("collapse-down");
        bottomBar.current.classList.remove("collapse-up");
        middleBar.current?.classList.remove("rotate-down");
      }
    }

    function OpenandCloseNav() {
      setnavOpen((prev) => !prev);
    }

    const MenuBar = () => {
      return (
        <div
          className=" lg:hidden flex flex-col gap-y-1 "
          onClick={OpenandCloseNav}
        >
          <div className="w-5 h-[2px] bg-white rounded-2xl" ref={topBar}></div>
          <div
            className="w-5 h-[2px] bg-white rounded-2xl"
            ref={middleBar}
          ></div>
          <div
            className="w-5 h-[2px] bg-white rounded-2xl"
            ref={bottomBar}
          ></div>
        </div>
      );
    };
    return (
      <header className="flex flex-col lg:flex-row lg:left-auto lg:-translate-x-0 left-1/2 w-[95%] lg:justify-start justify-between -translate-x-1/2 z-50 items-center px-5 absolute mx-auto max-w-[80.5rem] pb-4 lg:pb-0 top-4 lg:w-full min-h-14 border border-white/30 bg-white/20 shadow-md lg:backdrop-blur-xl backdrop-blur-md rounded-3xl py-2 lg:py-0">
        <div className="lg:w-[60%] flex lg:block justify-between w-full items-center">
          <p className="mt-2 font-inter font-medium text-white ">FastDrive</p>

          <div className="mt-2">
            <MenuBar />
          </div>
        </div>

        <div className="w-[40%] lg:flex items-center justify-between hidden">
          <ul className="flex w-[70%] justify-around bg-white font-medium py-2 px-2 text-[11px] font-inter rounded-2xl">
            <li
              className="cursor-pointer"
              onClick={() => ScrollToView("services")}
            >
              Services
            </li>
            <li
              className="cursor-pointer"
              onClick={() => ScrollToView("why-us")}
            >
              Why us
            </li>
            <li
              className="cursor-pointer"
              onClick={() => ScrollToView("testimonials")}
            >
              Testimonials
            </li>
            <li className="cursor-pointer" onClick={() => ScrollToView("faq")}>
              Faq
            </li>
          </ul>

          <button
            className="bg-primary text-[11px] text-white font-inter px-3 py-2 rounded-md flex items-center gap-2 cursor-pointer"
            onClick={() =>
              window.open(
                "https://wa.me/2349026707113?text=Hi%20Jeraven%2C%20I%E2%80%99d%20like%20to%20book%20a%20call%20to%20discuss%20your%20logistics%20services.",
                "_blank"
              )
            }
          >
            <PhoneCall className="w-4 h-4" />
            Book a Call
          </button>
        </div>
        {navOpen && (
          <div className="w-full flex flex-col mt-4 lg:hidden items-center justify-between">
            <ul className="flex w-full gap-y-5 items-center flex-col font-medium py-2 px-2 text-[11px] font-inter rounded-2xl ">
              <li
                className="text-[13px] text-white font-semibold cursor-pointer"
                onClick={() => ScrollToView("services", setnavOpen)}
              >
                Services
              </li>
              <li
                className="text-[13px] text-white font-semibold cursor-pointer"
                onClick={() => ScrollToView("why-us", setnavOpen)}
              >
                Why us
              </li>
              <li
                className="text-[13px] text-white font-semibold cursor-pointer"
                onClick={() => ScrollToView("testimonials", setnavOpen)}
              >
                Testimonials
              </li>
            </ul>

            <button
              className="bg-primary text-[13px] mt-3 text-white font-inter px-3 py-2 rounded-md flex items-center gap-2"
              onClick={() =>
                window.open(
                  "https://wa.me/2349026707113?text=Hi%20Jeraven%2C%20I%E2%80%99d%20like%20to%20book%20a%20call%20to%20discuss%20your%20logistics%20services.",
                  "_blank"
                )
              }
            >
              <PhoneCall className="w-4 h-4" />
              Book a Call
            </button>
          </div>
        )}
      </header>
    );
  };
  return (
    <section className="w-full bg-gray-50 md:h-lvh h-svh p-2 hero">
      <div
        className={`relative w-full h-full bg-center ${
          bgLoaded
            ? "bg-[url('/assets/bg.jpeg')]"
            : "bg-[url('/assets/bg-blur.webp')]"
        } bg-cover rounded-xl md:rounded-2xl`}
      >
        <img
          src="/assets/bg.jpeg"
          alt="loaded background image"
          className="hidden"
          onLoad={() => setbgLoaded(true)}
        />
        <div className="absolute w-full h-full bg-black/30 md:rounded-2xl rounded-xl px-4">
          <Header />
          <div className="mt-40 px-4 transition-all duration-700  ease-in opacity-0 translate-y-5 hero-text">
            <h1 className=" text-3xl font-medium font-poppins text-white">
              Trusted Logistics
              <br />
              Partner In Abuja
              <br />
            </h1>
            <p className="text-white font-inter text-sm md:text-[13px] mt-2 w-full md:max-w-[40%]">
              Fast, secure delivery services built for Abuja’s growing
              businesses. We move with precision, so your goods arrive right —
              every time.
            </p>

            <button className="cursor-pointer mt-6 md:mt-4 bg-primary w-fit px-2 py-1.5 md:py-1 rounded-2xl gap-1.5 md:flex items-center hidden">
              <p className="md:text-[11px] text-xs font-medium font-poppins text-white">
                Ship with us
              </p>
              <div className="border rounded-[50%] flex justify-center items-center bg-white w-6 h-6">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </button>

            <button className="md:hidden mt-4 bg-primary px-4 py-3 text-white font-inter rounded-sm text-[13px]">
              Ship with us
            </button>
          </div>
        </div>

        <div className="delivery-card transition-all ease-in-out duration-700 opacity-0 translate-x-5 absolute bottom-10 right-10 min-h-52 w-[85%]  md:w-[18%] justify-center lg:flex hidden">
          {deliveryData.map((value, index) => (
            <DeliveryCard key={index} {...value} />
          ))}
        </div>

        <div className="car-sec transition-all ease-in-out duration-700 opacity-0 translate-y-5 absolute px-3 md:px-2 py-3 w-[85%] lg:w-[25%] left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-10 min-h-[94px] bottom-14 lg:bottom-10 bg-white rounded-md flex justify-between items-center">
          <div className="w-1/2 h-full">
            <h2 className="font-inter text-xs font-semibold">
              FastDrive Logistics
            </h2>
            <p className="text-[11px] font-inter mt-1.5 text-gray-600 font-medium">
              Built for fast dispatch and <br /> on-time delivery in Abuja.
            </p>
          </div>
          <div className="w-1/2 h-16 ">
            <img
              src="/assets/movingcar.jpg"
              loading="eager"
              fetchPriority="high"
              alt="moving vehicles blurred"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
        </div>

        <div className="absolute w-[10%] lg:left-[55%] top-1/2 left-[60%] lg:-translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center">
          <GlowingDot text="Fast" />
        </div>
        <div className="absolute w-[10%] lg:right-[10%] lg:top-[30%] top-[60%] right-[70%] hidden  md:flex items-center">
          <GlowingDot text="Reliable" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
