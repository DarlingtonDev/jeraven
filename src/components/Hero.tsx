const Hero = () => {
  const Header = () => {
    return (
      <header className="flex items-center px-5 sticky top-6 w-full min-h-12 border border-white/30 bg-white/20 shadow-md backdrop-blur-xl rounded-3xl">
        <div className="w-[60%]">
          <div className="w-[4.3rem] h-7">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="w-[40%] flex items-center">
          <ul className="flex w-[70%] justify-around bg-white font-medium py-2 px-2 text-[11px] font-inter rounded-2xl">
            <li>Models</li>
            <li>Our Mission</li>
            <li>Careers</li>
            <li>About us</li>
          </ul>
        </div>
      </header>
    );
  };
  return (
    <section className="w-full bg-gray-50 h-lvh p-2">
      <div className="relative w-full h-full bg-center bg-cover bg-[url('/assets/bg.jpeg')] rounded-2xl ">
        <div className="absolute w-full h-full bg-black/20 rounded-2xl px-4">
          <Header />
        </div>
      </div>
    </section>
  );
};

export default Hero;
