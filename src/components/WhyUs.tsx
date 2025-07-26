import {
  CheckCircle,
  ChevronRight,
  Headset,
  Lock,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const WhyUs = () => {
  const theGeravinDifference = [
    {
      icon: Headset,
      title: "Proactive Customer Support",
      subheading: "Real Help, Not Auto Replies",
      subtitle:
        "Our support team doesn’t send canned messages. You get fast responses from real people who understand your business.",
    },
    {
      icon: Wrench,
      title: "Built on Vendor Feedback",
      subheading: "We Listen. Then We Build.",
      subtitle:
        "Every tool we offer — from pickup scheduling to remittance tracking — came from listening to vendors like you.",
    },
    {
      icon: CheckCircle,
      title: "Consistency You Can Count On",
      subheading: "Delivery Without Excuses",
      subtitle:
        "Jeraven runs on commitment. We don’t disappear on pickup days or shift delivery windows without warning.",
    },
    {
      icon: Lock,
      title: "Trust-Centered Operations",
      subheading: "Vendors First, Always",
      subtitle:
        "We’re not here to take advantage of you. Our payout structure, our pricing, our service terms — all are designed with your success at the center.",
    },
  ];

  const FlipCard = ({
    Icon,
    title,
    subtitle,
  }: {
    Icon: LucideIcon;
    title: string;
    subtitle: string;
  }) => {
    return (
      <div className="w-full flex h-40 lg:px-1 py-4 gap-6.5 items-center lg:border-none rounded-md border px-4 shadow-md lg:shadow-none">
        <div className="w-[14%] bg-white card-shadow h-fit flex justify-center items-center px-1 py-2 rounded-md">
          <Icon className="w-5 h-5" />
        </div>
        <div className="w-[86%]">
          <h2 className="font-inter font-semibold text-sm">{title}</h2>
          <p className="font-inter text-[12px] mt-2 text-gray-600 ">
            {subtitle}
          </p>
        </div>
      </div>
    );
  };
  return (
    <section
      className="why-us opacity-0 transition-all ease-in-out duration-700 translate-y-10 px-8 lg:px-14 mt-10 lg:mt-20 py-3 flex gap-2 flex-col lg:flex-row"
      id="why-us"
    >
      <div className="w-full  lg:w-1/3">
        <p className="font-inter text-gray-700 font-medium text-[13px]">
          <span className="text-primary">/</span>Why us?
        </p>
        <h1 className="text-4xl lg:text-5xl mt-2.5 font-poppins lg:leading-normal leading-tight">
          The Jeraven
          <span className="bg-primary-shade flex w-fit gap-x-3 text-white lg:px-1 px-1.5 py-1">
            Difference
          </span>
        </h1>
        <p className="mt-4 font-inter text-[13px] text-gray-600 max-w-[85%]">
          We've reimagined logistics from a vendor's point of view - focused on
          reliability, transparency, and results. No delays. No hidden fees.
          Just delivery that works
        </p>

        <button
          className="cursor-pointer mt-6 lg:border-none border border-lighter-primary px-1 py-2 lg:mt-5 flex items-center text-primary font-inter text-[13px] "
          onClick={() =>
            window.open(
              "https://wa.me/2349026707113?text=Hello%20Jeraven%2C%20I%E2%80%99d%20like%20to%20try%20your%20logistics%20service%20for%20a%20delivery.%20What%20do%20I%20need%20to%20do%3F",
              "_blank"
            )
          }
        >
          Try Jeraven Today <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col lg:hidden mt-8 gap-y-5">
        <FlipCard
          Icon={theGeravinDifference[0].icon}
          title={theGeravinDifference[0].title}
          subtitle={theGeravinDifference[0].subtitle}
        />

        <FlipCard
          Icon={theGeravinDifference[1].icon}
          title={theGeravinDifference[1].title}
          subtitle={theGeravinDifference[1].subtitle}
        />

        <FlipCard
          Icon={theGeravinDifference[2].icon}
          title={theGeravinDifference[2].title}
          subtitle={theGeravinDifference[2].subtitle}
        />

        <FlipCard
          Icon={theGeravinDifference[3].icon}
          title={theGeravinDifference[3].title}
          subtitle={theGeravinDifference[3].subtitle}
        />
      </div>

      <div className="hidden lg:mt-0 lg:w-2/3 lg:flex min-h-96">
        <div className="w-full lg:w-1/2 self-end px-7 ">
          <FlipCard
            Icon={theGeravinDifference[0].icon}
            title={theGeravinDifference[0].title}
            subtitle={theGeravinDifference[0].subtitle}
          />
          <div className="w-full h-[1.5px] bg-gradient-to-r from-lighter-primary to-transparent"></div>
          <FlipCard
            Icon={theGeravinDifference[1].icon}
            title={theGeravinDifference[1].title}
            subtitle={theGeravinDifference[1].subtitle}
          />
        </div>

        <div className="h-auto w-[1px] bg-gradient-to-t from-lighter-primary to-transparent"></div>

        <div className="w-full lg:w-1/2 self-start px-7">
          <FlipCard
            Icon={theGeravinDifference[2].icon}
            title={theGeravinDifference[2].title}
            subtitle={theGeravinDifference[2].subtitle}
          />
          <div className="w-full h-[1px] bg-gradient-to-l from-lighter-primary to-transparent"></div>
          <FlipCard
            Icon={theGeravinDifference[3].icon}
            title={theGeravinDifference[3].title}
            subtitle={theGeravinDifference[3].subtitle}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
