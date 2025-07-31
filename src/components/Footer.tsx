import { MailIcon, Map, PhoneIncoming } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 min-h-56 pt-12 lg:pt-16 px-6 lg:px-16  ">
      <div className="flex items-stretch w-full gap-x-4 flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 h-auto flex flex-col">
          <div className="w-[30%] h-10 flex justify-center items-center rounded-[2px] bg-lighter-primary px-2">
            <h1 className="font-inter font-medium text-white text-xl">
              FastDrive
            </h1>
          </div>
          <p className=" font-inter lg:text-[13px] text-[12px] font-medium mt-3">
            {" "}
            Fast, secure delivery services built for Abuja’s growing businesses.
            We move with precision, so your goods arrive right — every time.
          </p>

          <div className="flex gap-x-5 lg:gap-x-3 mt-5 ">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg"
              alt="X icon"
              width="20"
              height="20"
              className="cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full lg:w-2/3 flex lg:items-end flex-col">
          <h2 className=" font-inter text-base font-bold hidden lg:block">
            Contact Informations
          </h2>

          <div className="flex flex-col gap-y-4 lg:items-end lg:mt-2 mt-4">
            <div className="flex gap-x-2 items-center font-inter lg:text-[13px] text-[12px] font-medium">
              <Map className="lg:w-4 lg:h-4 w-4 h-4 text-primary" />
              <p>
                Block F, 20012 Kubwa Region Market, Kubwa{" "}
                <br className="lg:hidden" /> Resettlement Abuja, Nigeria
              </p>
            </div>
            <div className="flex gap-x-2 items-center font-inter lg:text-[13px] text-[12px] font-medium">
              <PhoneIncoming className="lg:w-4 lg:h-4 w-4 h-4 text-primary" />
              <p>(+234) 708 770 8112</p>
            </div>
            <div className="flex gap-x-2 items-center font-inter lg:text-[13px] text-[12px] font-medium">
              <MailIcon className="lg:w-4 lg:h-4 w-4 h-4 text-primary" />
              <p>Fastdrivelogistics@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t  w-full mt-10 flex items-center justify-center  text-[13px] font-inter font-bold py-5">
        <p>&copy;2025 Jeraven. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
