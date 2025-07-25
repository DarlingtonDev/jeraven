import { ArrowUpRight } from "lucide-react";
import { FAQ } from "./Faq";

const Ready = () => {
  return (
    <section className="w-full px-20 mt-16 py-10">
      <div className="w-full min-h-96 rounded-xl bg-[url('/assets/man-delivery.jpg')] bg-top relative bg-cover  border border-gray-200">
        <div className="absolute w-full h-full bg-white/60 rounded-2xl"></div>
        <div className="w-full flex">
          <div className="w-1/2 py-24 px-6 absolute">
            <h2 className="font-semibold font-poppins text-2xl">
              Ready to ship?
            </h2>
            <p className="mt-3 font-poppins text-xs font-medium max-w-[80%]">
              Whether you're moving a single parcel or managing daily
              deliveries, Jeraven makes it easy. Our reliable pickup system,
              real-time tracking, and dedicated support ensure your packages
              reach their destination on time — without the stress.
            </p>

            <button className="mt-3 flex py-2.5 rounded-sm gap-x-2  px-2 font-inter text-xs bg-lighter-primary text-white">
              Request a quote
              <div className="w-[1px] bg-white rounded-2xl"></div>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="w-1/2 right-0 top-10 px-6 absolute ">
            <FAQ />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ready;
