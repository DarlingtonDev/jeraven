// components/faq.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="w-full px-6 md:px-14 py-10 font-inter">
      <h2 className="font-inter font-bold ">
        Frequently Asked{" "}
        <span className="bg-lighter-primary text-white py-0.5 px-1">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-2 mt-3">
        <AccordionItem value="item-1" className="border-gray-600">
          <AccordionTrigger className="no-underline hover:no-underline cursor-pointer font-semibold text-[13px] ">
            Do you operate outside Abuja?
          </AccordionTrigger>
          <AccordionContent className=" text-[13px] font-medium">
            FastDrive is currently focused on fast, reliable delivery services
            within Abuja. However, expansion plans are underway. Stay tuned or
            contact us for special interstate requests.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-gray-600">
          <AccordionTrigger className="hover:no-underline cursor-pointer font-semibold text-[13px]">
            How does cash-on-delivery work with FastDrive?
          </AccordionTrigger>
          <AccordionContent className=" text-[13px] font-medium">
            When your customer pays on delivery, our dispatch riders collect the
            payment securely. We then remit the full amount to your account
            based on a scheduled, reliable payout system.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-gray-600">
          <AccordionTrigger className="hover:no-underline cursor-pointer font-semibold text-[13px]">
            Can I schedule pickups in advance?
          </AccordionTrigger>
          <AccordionContent className=" text-[13px] font-medium">
            Yes. You can book same-day or scheduled pickups for convenience. Our
            pickup system is built to support businesses of all sizes.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-gray-600">
          <AccordionTrigger className=" hover:no-underline cursor-pointer font-semibold text-[13px] ">
            What types of deliveries do you support?
          </AccordionTrigger>
          <AccordionContent className=" text-[13px] font-medium">
            FastDrive handles intra-city cargo delivery, e-commerce deliveries,
            multi-stop drops, and high-volume business orders with precision and
            care.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
