import React, { useState } from "react";

export const DeliveryCard = React.memo(
  ({
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
    const [loaded, setLoaded] = useState(false);
    return (
      <div
        className={`rounded-xl z-30 px-2.5 py-3 ${
          transparency === 1
            ? "bg-white/50 w-[85%] backdrop-blur-lg -translate-y-8 z-20"
            : transparency === 2
            ? "-translate-y-4 z-30 w-[90%] bg-white/70 backdrop-blur-lg delay-200"
            : "bg-white z-10 w-[95%] delay-400"
        } absolute  h-full transition-all opacity-0 duration-1000 ease-out translate-x-5 delivery-card`}
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
            <h2 className=" text-xs font-inter font-semibold"> In transit</h2>
            <p className=" font-inter text-gray-700 text-[11px]">NG-fct-0218</p>
          </div>

          <div className="w-1/2 flex flex-col items-end font-inter text-xs font-semibold">
            <p>{time}</p>
            <p className="text-gray-600 font-normal text-[11px]">{date}</p>
          </div>
        </div>

        <div className="mt-3 w-full h-24">
          <img
            src={`${loaded ? "/assets/ship.jpg" : "/assets/ship-blur.webp"}`}
            alt="containers in a ship "
            className="w-full h-full object-cover object-center rounded-md"
          />
          <img
            src="/assets/ship.jpg"
            alt="containers in a ship"
            className="hidden"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    );
  }
);
