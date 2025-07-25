import {
  Boxes,
  Check,
  ChevronRight,
  Clock,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";

const Services = () => {
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
      <div className="bg-white border-gray-200 rounded-2xl min-h-44 shrink-0 w-[calc(25%-0.5rem)] card-shadow py-5 px-4">
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
  return (
    <section className="mt-10 py-4">
      <div className="w-full flex justify-between items-center px-14">
        <h1 className="text-2xl font-medium font-poppins ">
          Jeraven's <br />
          Logistics Solutions
        </h1>

        <div className="max-w-[40%] text-center text-[13px] text-gray-900 font-inter font-medium">
          <p>
            Empowering Nigerian businesses with fast logistics, reliable
            delivery solutions, modern branding, and high-performing website
            designed to boost visibiity, attract customers, and drive real
            business growth
          </p>
        </div>
      </div>

      <div className="flex w-full gap-4  overflow-x-hidden mt-12 px-14 py-4 justify-center ">
        {services.map((value, index) => (
          <Card key={index} {...value} />
        ))}
      </div>

      <div className="w-full mt-16 min-h-44 flex justify-between px-14">
        <div className=" w-[40%] min-h-[18rem]  py-8 flex items-center justify-center border border-dotted border-primary rounded-md">
          <div className=" h-full w-[90%]">
            <img src="/assets/delivery.jpg" alt="" loading="eager" />
          </div>
        </div>

        <div className="w-1/2 flex py-4 flex-col">
          <p className="font-poppins text-gray-600 text-[13px] font-medium">
            Secure Delivery. Trusted Remittance
          </p>
          <h2 className="font-poppins mt-2 text-2xl font-medium">
            <span>Payment-on-Delivery</span>{" "}
            <span className="bg-lighter-primary text-white px-2 py-0.5">
              Made Easy
            </span>
          </h2>
          <p className="mt-2 font-inter max-w-[90%] text-[13px] font-medium text-gray-600">
            We handle your deliveries, collect payment from your customer and
            remit the cash directly to your account - fast, secure and
            stress-free
          </p>

          <ul className="mt-4 flex gap-2 flex-col  font-inter text-[13px] font-medium text-gray-900">
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

          <button className="flex gap-0.5 items-center self-start mt-7 font-inter text-primary text-[13px] px-2 py-2.5 rounded-sm  ml-1">
            Start Collecting Today
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
