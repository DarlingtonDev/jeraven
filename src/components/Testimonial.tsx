import { Quote } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      type: "long",
      topText: "No more failed deliveries",
      quote:
        "I've worked with a few logistics companies before, but FastDrive stands out for one simple reason — they actually care about your deliveries. My customers get their items on time, and if there's ever an issue, someone calls before I even ask. Honestly, I just rest now.",
      name: "Aisha Bello",
      role: "E-commerce Vendor (Skincare)",
    },
    {
      type: "medium",
      topText: "Pickup always on schedule",
      quote:
        "FastDrive gives me peace of mind. I don't have to chase riders or keep explaining to customers — once I schedule a pickup, I know it's handled.",
      name: "Emeka Uzo",
      role: "E-commerce Vendor (Tech Accessories)",
    },
    {
      type: "medium",
      topText: "Timely remittance, no delay",
      quote:
        "Their pay-on-delivery remittance works well for my business. Even when things are tight, FastDrive doesn’t delay — they always keep to the plan.",
      name: "Fatima Yakubu",
      role: "Online Retailer (Home Goods)",
    },
    {
      type: "short",
      topText: "Deliveries now 2x faster",
      quote: "Fast, friendly, and reliable — FastDrive is my go-to in Abuja.",
      name: "Tunde Adebayo",
      role: "Mini Importation Business",
    },
    {
      type: "short",
      topText: "Reliable logistics partner",
      quote: "No stories, no stress. FastDrive delivers.",
      name: "Chika Nwosu",
      role: "Online Boutique Owner",
    },
  ];

  const Card = ({
    topText,
    quote,
    name,
    role,
  }: {
    topText: string;
    quote: string;
    name: string;
    role: string;
  }) => {
    return (
      <div className="lg:min-h-fit w-full rounded-xl bg-white card-shadow px-3 py-4 shrink-0 lg:shrink-1 snap-center">
        <h3 className="italic font-semibold font-poppins  text-gray-600 text-[13px]">
          - {topText}
        </h3>

        <Quote className="text-primary mt-3 w-4 h-4" />
        <p className="mt-1 text-[12px] font-inter font-medium">{quote}</p>

        <div className="mt-2 text-[12px] font-inter font-bold ">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    );
  };

  const LittleCards = ({
    topText,
    quote,
    name,
    role,
  }: {
    topText: string;
    quote: string;
    name: string;
    role: string;
  }) => {
    return (
      <div className="min-h-fit w-full rounded-xl bg-white card-shadow px-3 py-4">
        <h3 className="italic font-semibold font-poppins text-[13px] text-gray-600">
          - {topText}
        </h3>

        <Quote className="text-primary mt-3 w-4 h-4" />
        <p className="mt-1 text-[12px] font-inter font-medium">{quote}</p>

        <div className="mt-2 text-[12px] font-inter font-bold ">
          <p>{name}</p>
          <p>{role}</p>
        </div>
      </div>
    );
  };
  return (
    <section
      className="lg:px-14 w-full mt-10 lg:mt-16 py-6 testimonials opacity-0 transition-all ease-in-out duration-700 translate-y-10"
      id="testimonials"
    >
      <div className="flex flex-col items-center">
        <div className="relative w-fit px-3 py-1">
          <div className="absolute right-0 top-0 flex flex-col items-end">
            <div className="w-3 h-0.5 bg-lighter-primary rounded-xl" />
            <div className="w-0.5 h-2.5 bg-lighter-primary rounded-xl" />
          </div>

          <h3 className="font-inter font-semibold text-[12px] text-gray-700">
            Testimonials
          </h3>

          <div className="absolute left-0 bottom-0 flex flex-col">
            <div className="w-0.5 h-2.5 bg-lighter-primary rounded-xl" />
            <div className="w-3 h-0.5 bg-lighter-primary rounded-xl" />
          </div>
        </div>

        <h1 className="mt-6 text-center lg:text-left lg:mt-4 text-2xl font-poppins font-semibold px-8">
          Some of our satisfied customers
        </h1>
        <h1 className="mt-2 text-center lg:text-left text-2xl font-poppins font-semibold text-gray-500 px-8">
          Results that speaks volume
        </h1>
        <p className="mt-2 text-xs font-inter text-gray-600 px-8">
          Find out how our happy clients are raving about us
        </p>

        <div className="flex lg:hidden gap-x-4 mt-8 w-full overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-8">
          {testimonials.map((values, index) => (
            <Card key={index} {...values} />
          ))}
        </div>

        <div className="w-[80%] mt-12 px-8 space-x-4 hidden lg:flex">
          <div className="w-1/2 flex flex-col space-y-4">
            <Card
              topText={testimonials[0].topText}
              quote={testimonials[0].quote}
              name={testimonials[0].name}
              role={testimonials[0].role}
            />
            <Card
              topText={testimonials[1].topText}
              quote={testimonials[1].quote}
              name={testimonials[1].name}
              role={testimonials[1].role}
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <Card
              topText={testimonials[2].topText}
              quote={testimonials[2].quote}
              name={testimonials[2].name}
              role={testimonials[2].role}
            />

            <div className="flex w-full space-x-4 ">
              <LittleCards
                topText={testimonials[3].topText}
                quote={testimonials[3].quote}
                name={testimonials[3].name}
                role={testimonials[3].role}
              />
              <LittleCards
                topText={testimonials[4].topText}
                quote={testimonials[4].quote}
                name={testimonials[4].name}
                role={testimonials[4].role}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
