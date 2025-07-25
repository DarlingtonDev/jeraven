import { MailIcon, Map, PhoneIncoming } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 min-h-56 pt-16 pb-4  px-16  ">
      <div className="flex items-stretch w-full gap-x-4">
        <div className="w-1/3 h-auto flex flex-col">
          <div className="w-[30%] h-10 flex justify-center items-center rounded-[2px] bg-lighter-primary px-2">
            <img src="/assets/logo.png" alt="Jeraven's logo" />
          </div>
          <p className=" font-inter text-[13px] font-medium mt-3">
            {" "}
            Fast, secure delivery services built for Abuja’s growing businesses.
            We move with precision, so your goods arrive right — every time.
          </p>

          <div className="flex gap-x-3 mt-5">
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
              alt="Instagram"
              width={16}
              height={16}
            />

            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg"
              alt="X icon"
              width="16"
              height="16"
            />
          </div>
        </div>

        <div className="w-2/3 flex items-end flex-col">
          <h2 className=" font-inter text-base font-bold">
            Contact Informations
          </h2>

          <div className="flex flex-col gap-y-4 items-end mt-2">
            <div className="flex gap-x-2 items-center font-inter text-[13px] font-medium">
              <Map className="w-4 h-4 text-primary" />
              <p>
                Block C, C1001 Apo Urban Market, Apo Resettlement Abuja, Nigeria
              </p>
            </div>
            <div className="flex gap-x-2 items-center font-inter text-[13px] font-medium">
              <PhoneIncoming className="w-4 h-4 text-primary" />
              <p>(+234) 902 670 7113</p>
            </div>
            <div className="flex gap-x-2 items-center font-inter text-[13px] font-medium">
              <MailIcon className="w-4 h-4 text-primary" />
              <p>Jeravenlogistics@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t  w-full mt-6 flex items-center justify-center py-2 text-[13px] font-inter font-bold">
        <p>&copy;2025 Jeraven. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
