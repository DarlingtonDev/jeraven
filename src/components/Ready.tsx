import { ArrowUpRight } from "lucide-react";
import { FAQ } from "./Faq";

const Ready = () => {
  return (
    <section
      className="w-full lg:px-20 px-4 mt-10 lg:mt-16 py-10 ready opacity-0 transition-all ease-in-out duration-700 translate-y-10"
      id="faq"
    >
      <div className="w-full min-h-80 lg:min-h-96 rounded-xl bg-[url('/assets/man-delivery.jpg')] bg-top relative bg-cover  border border-gray-200">
        <div className="absolute w-full h-full bg-white/60 rounded-2xl"></div>
        <div className="w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 mt-16 lg:mt-0 lg:py-24 px-6 absolute">
            <h2 className="font-semibold font-poppins text-2xl">
              Ready to ship?
            </h2>
            <p className="mt-3 font-poppins text-xs font-medium lg:max-w-[80%] leading-relaxed">
              Whether you're moving a single parcel or managing daily
              deliveries, Jeraven makes it easy. Our reliable pickup system,
              real-time tracking, and dedicated support ensure your packages
              reach their destination on time — without the stress.
            </p>

            <button
              className="mt-4 cursor-pointer lg:mt-3 flex py-4 lg:py-2.5 rounded-sm gap-x-2  px-2 font-inter text-[13px] lg:text-xs bg-black lg:bg-lighter-primary text-white"
              onClick={() =>
                window.open(
                  "https://wa.me/2349026707113?text=Hi%20Jeraven%2C%20please%20send%20me%20a%20quote%20for%20a%20delivery%20service.%20I%E2%80%99ll%20share%20the%20details%20now.",
                  "_blank"
                )
              }
            >
              Request a quote
              <div className="w-[1px] bg-white rounded-2xl hidden lg:block"></div>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="hidden lg:block w-1/2 right-0 top-3 px-6 absolute ">
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
