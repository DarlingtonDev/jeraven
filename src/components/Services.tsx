import {
  Boxes,
  Check,
  ChevronRight,
  Clock,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [currentSlide, setCurrentSilde] = useState("first");
  const services = [
    {
      icon: Truck,
      title: "Fast Same-Day Delivery",
      paragraph:
        "Get parcels delivered within hours. Ideal for businesses and urgent dispatch needs in your city",
    },

    {
      icon: Clock,
      title: "Scheduled Pickup Services",
      paragraph:
        "Book your pickups ahead and leave the rest to us. Realiable timing and smooth coordination, every time",
    },

    {
      icon: Boxes,
      title: "Bulk & Multi-Stop Delivery",
      paragraph:
        "Send multiple packages in one trip. Cost effective delivery built for vendors, stores, and growing brands.",
    },

    {
      icon: Store,
      title: "Business-to-Customer Delivery",
      paragraph:
        "Reliable delivery for online sellers, stores, and retail vendors. we bridge the gap between your business and your ccustomers",
    },
  ];
  const Card = ({
    icon: Icon,
    title,
    paragraph,
  }: {
    icon: LucideIcon;
    title: string;
    paragraph: string;
  }) => {
    return (
      <div className="bg-white border-gray-200 rounded-2xl min-h-44 lg:shrink-1 w-full shrink-0 lg:w-[calc(25%-0.5rem)] card-shadow py-5 px-4 snap-center">
        <div className="w-10 h-9 rounded-md bg-white card-shadow flex justify-center items-center">
          <Icon className="text-primary w-5 h-5" />
        </div>

        <div className="font-inter mt-4">
          <h2 className="font-medium text-[13px] font-poppins">{title}</h2>
          <p className="mt-2 text-xs font-medium text-gray-600">{paragraph}</p>
        </div>
      </div>
    );
  };

  function changeSlide() {
    const scrollContainer = document.getElementById("carousel");
    if (scrollContainer) {
      if (scrollContainer.scrollLeft > 0 && scrollContainer.scrollLeft < 100)
        setCurrentSilde("first");
      if (scrollContainer.scrollLeft > 100 && scrollContainer.scrollLeft <= 342)
        setCurrentSilde("second");
      if (scrollContainer.scrollLeft > 342 && scrollContainer.scrollLeft <= 684)
        setCurrentSilde("third");
      if (
        scrollContainer.scrollLeft > 684 &&
        scrollContainer.scrollLeft <= 1026
      )
        setCurrentSilde("fourth");
    }
  }
  return (
    <section className=" mt-10 py-4 px-6 " id="services">
      <div className="first-service opacity-0 transition-all ease-in-out duration-700 translate-y-10 w-full flex lg:flex-row flex-col lg:justify-between lg:items-center lg:px-14 motion-opacity-in-0">
        <h1 className="text-2xl font-medium font-poppins ">
          FastDrive's <br />
          Logistics Solutions
        </h1>

        <div className="max-w-[95%] mt-4 lg:mt-auto lg:max-w-[40%]  text-[13px] text-gray-900 font-inter font-medium">
          <p>
            Powering Nigerian businesses with reliable delivery, efficient cargo
            movement, and tailored logistics services built to simplify
            nationwide shipping.
          </p>
        </div>
      </div>

      <div className="second-service opacity-0 transition-all ease-in-out duration-700 translate-y-10">
        <div
          className=" flex w-full gap-4 lg:overflow-x-hidden mt-7 lg:mt-12 lg:px-14 py-4 lg:justify-center snap-x snap-mandatory overflow-x-auto scroll-smooth px-2"
          id="carousel"
          onScroll={changeSlide}
        >
          {services.map((value, index) => (
            <Card key={index} {...value} />
          ))}
        </div>

        <div className="w-40 h-6 ml-auto mr-auto flex gap-x-2 items-center justify-center lg:hidden">
          <div
            className={`${
              currentSlide === "first"
                ? "w-6 h-2 rounded-3xl bg-primary shrink-0"
                : "w-2 h-2 rounded-[50%] bg-lighter-primary"
            } transition-all ease-in-out`}
          ></div>
          <div
            className={`${
              currentSlide === "second"
                ? "w-6 h-2 rounded-3xl bg-primary shrink-0"
                : "w-2 h-2 rounded-[50%] bg-lighter-primary"
            } transition-all ease-in-out`}
          ></div>
          <div
            className={`${
              currentSlide === "third"
                ? "w-6 h-2 rounded-3xl bg-primary shrink-0"
                : "w-2 h-2 rounded-[50%] bg-lighter-primary"
            } transition-all ease-in-out`}
          ></div>
          <div
            className={`${
              currentSlide === "fourth"
                ? "w-6 h-2 rounded-3xl bg-primary shrink-0"
                : "w-2 h-2 rounded-[50%] bg-lighter-primary"
            } transition-all ease-in-out`}
          ></div>
        </div>
      </div>

      <div className="w-full mt-16 min-h-44 flex lg:justify-between lg:flex-row flex-col-reverse lg:px-14 third-service opacity-0 transition-all ease-in-out duration-700 translate-y-10">
        <div className=" mt-3  lg:mt-0 lg:w-[40%] min-h-[16rem] lg:min-h-[18rem] py-1 lg:py-8 flex items-center justify-center lg:border border-dotted border-primary rounded-md">
          <div className="h-full w-[95%]">
            <img src="/assets/delivery.jpg" alt="" loading="eager" />
          </div>
        </div>

        <div className="lg:w-1/2 flex py-4 flex-col w-full">
          <p className="font-poppins text-gray-600 text-xs lg:text-[13px] font-medium">
            Secure Delivery. Trusted Remittance
          </p>
          <h2 className="font-poppins mt-2 text-2xl font-medium leading-relaxed">
            <span>Payment-on-Delivery</span>{" "}
            <span className="bg-lighter-primary text-white px-2 py-0.5">
              Made Easy
            </span>
          </h2>
          <p className="lg:mt-2  mt-4 font-inter max-w-[90%] text-[13px] font-medium text-gray-600">
            We handle your deliveries, collect payment from your customer and
            remit the cash directly to your account - fast, secure and
            stress-free
          </p>

          <ul className="lg:mt-4 mt-6 flex gap-4 flex-col  font-inter text-[13px] font-medium text-gray-900">
            <li className="flex gap-1 items-center text-gray-600">
              {" "}
              <Check className="w-4 h-4 text-green-600" /> Payments collected on
              your behalf
            </li>
            <li className="flex gap-1 items-center text-gray-600">
              <Check className="w-4 h-4 text-green-600" /> Timely, scheduled
              remittance you can count on
            </li>
            <li className="flex gap-1 items-center text-gray-600">
              <Check className="w-4 h-4 text-green-600" /> Trusted by vendors,
              stores, and eCommerce sellers
            </li>
          </ul>

          <button className=" border cursor-pointer border-lighter-primary lg:border-none flex gap-0.5 items-center self-start mt-7 font-inter text-primary text-[13px] px-2 py-2.5 rounded-none  ml-1">
            Start Collecting Today
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
