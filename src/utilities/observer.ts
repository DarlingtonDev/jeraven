function func(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target as HTMLElement;

      if (el.classList.contains("hero-text")) {
        el.classList.remove("translate-y-5");
        el.classList.add("opacity-100", "translate-y-0");
      }
      if (el.classList.contains("delivery-card")) {
        el.classList.remove("translate-x-5");
        el.classList.add("opacity-100", "translate-x-0");
      }
      if (el.classList.contains("first-service")) {
        el.classList.remove("translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }
      if (el.classList.contains("second-service")) {
        el.classList.remove("translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }
      if (el.classList.contains("third-service")) {
        el.classList.remove("translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }
      if (el.classList.contains("why-us")) {
        el.classList.remove("translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }
      if (el.classList.contains("testimonials")) {
        el.classList.remove("translate-y-10");
        el.classList.add("opacity-100", "translate-y-0");
      }

      if (el.classList.contains("car-sec")) {
        el.classList.remove("translate-y-5");
        el.classList.add("opacity-100", "translate-y-0");
      }
      if (el.classList.contains("ready")) {
        el.classList.remove("translate-y-5");
        el.classList.add("opacity-100", "translate-y-0");
      }
    }
  });
}
const options = { threshold: 0.3 };
const Myobserver = new IntersectionObserver(func, options);

export default Myobserver;
