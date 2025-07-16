const Services = () => {
  const Card = () => {
    return (
      <div className="bg-white border-gray-200 rounded-2xl min-h-44 shrink-0 w-[calc(25%-1rem)] card-shadow"></div>
    );
  };
  return (
    <section className="mt-10 py-4 px-14">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl font-medium font-poppins">
          Comprehensive <br />
          Logistics services
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

      <div className="flex w-full gap-3  overflow-x-hidden mt-12 px-3 py-4 justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Services;
