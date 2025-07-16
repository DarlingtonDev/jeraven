import { ArrowUpRight, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import Myobserver from "../utilities/observer";

const Hero = () => {
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
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    Myobserver.observe(hero);

    return () => {
      Myobserver.unobserve(hero);
    };
  }, []);

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
  const DeliveryCard = ({
    transparency,
    imageUrl,
    time,
    date,
  }: {
    transparency: number;
    imageUrl: string;
    time: string;
    date: string;
  }) => {
    return (
      <div
        className={`rounded-xl z-30 px-2.5 py-3 ${
          transparency === 1
            ? "bg-white/50 w-[85%] backdrop-blur-lg -translate-y-8 z-20"
            : transparency === 2
            ? "-translate-y-4 z-30 w-[90%] bg-white/70 backdrop-blur-lg delay-500"
            : "bg-white z-10 w-[95%] delay-1000"
        } absolute  h-full transition-all opacity-0 duration-500 ease-out translate-x-5 delivery-card`}
      >
        <div className="flex justify-between w-full items-center">
          <div className="w-1/2 flex items-center gap-1">
            <div className="w-8 h-8  rounded-[50%]">
              <img
                src={imageUrl}
                alt="courier image"
                className="rounded-[50%]"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 w-full flex justify-between items-center">
          <div className="w-1/2">
            <h2 className=" text-xs font-inter font-semibold"> NG/FCT-0218</h2>
            <p className=" font-inter text-gray-700 text-[11px]">In-transit</p>
          </div>

          <div className="w-1/2 flex flex-col items-end font-inter text-xs font-semibold">
            <p>{time}</p>
            <p className="text-gray-600 font-normal text-[11px]">{date}</p>
          </div>
        </div>

        <div className="mt-3 w-full h-24">
          <img
            src="/assets/ship.jpg"
            alt="containers"
            className="w-full h-full object-cover object-center rounded-md"
          />
        </div>
      </div>
    );
  };

  const Header = () => {
    return (
      <header className="flex items-center px-5 sticky top-5 w-full min-h-14 border border-white/30 bg-white/20 shadow-md backdrop-blur-xl rounded-3xl">
        <div className="w-[60%]">
          <div className="w-[4rem] h-6">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-[40%] flex items-center justify-between">
          <ul className="flex w-[70%] justify-around bg-white font-medium py-2 px-2 text-[11px] font-inter rounded-2xl">
            <li>Models</li>
            <li>Services</li>
            <li>Routes</li>
            <li>Insurance</li>
          </ul>

          <button className="bg-black text-[11px] text-white font-inter px-3 py-2 rounded-md flex items-center gap-2">
            <PhoneCall className="w-4 h-4" />
            Book a Call
          </button>
        </div>
      </header>
    );
  };
  return (
    <section className="w-full bg-gray-50 h-lvh p-2 hero">
      <div className="relative w-full h-full bg-center bg-cover bg-[url('/assets/bg.jpeg')] rounded-2xl ">
        <div className="absolute w-full h-full bg-black/30 rounded-2xl px-4">
          <Header />
          <div className="mt-32 px-4 transition-all duration-1000 ease-out opacity-0 -translate-y-5 hero-text">
            <h1 className="text-3xl font-medium font-poppins text-white">
              Trusted Logistics
              <br />
              Partner In Abuja
              <br />
            </h1>
            <p className="text-white font-inter text-[13px] mt-2 max-w-[40%]">
              Fast, secure delivery services built for Abuja’s growing
              businesses. We move with precision, so your goods arrive right —
              every time.
            </p>

            <div className="mt-4 bg-black w-fit px-2 py-1 rounded-2xl gap-1.5 flex items-center">
              <p className="text-[11px] font-poppins text-white">
                Ship with us
              </p>
              <div className="border rounded-[50%] flex justify-center items-center bg-white w-6 h-6">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 min-h-52 w-[18%] flex justify-center">
          {deliveryData.map((value, index) => (
            <DeliveryCard key={index} {...value} />
          ))}
        </div>

        <div className="absolute px-2 py-3 w-[25%] left-10 min-h-[94px] bottom-10 bg-white rounded-md flex justify-between items-center">
          <div className="w-1/2 h-full">
            <h2 className="font-inter text-xs font-semibold">
              Jeraven Logistics
            </h2>
            <p className="text-[11px] font-inter mt-1.5 text-gray-600 font-medium">
              Built for fast dispatch and <br /> on-time delivery in Abuja.
            </p>
          </div>
          <div className="w-1/2 h-16">
            <img
              src="/assets/movingcar.jpg"
              alt="moving vehicles"
              className="w-full h-full object-cover object-center rounded-md"
            />
          </div>
        </div>

        <div className="absolute w-[10%] left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2  flex items-center">
          <GlowingDot text="Efficiency" />
        </div>
        <div className="absolute w-[10%] right-[10%] top-[30%]  flex items-center">
          <GlowingDot text="Smart" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
